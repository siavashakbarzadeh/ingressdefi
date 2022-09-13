import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ContractDetails } from "src/assets/files/contract";
import { NftExchangeAbi } from "src/assets/files/nft_abi";
import { NFT_721_Token_ABI } from "src/assets/files/127cre_abi";
import { NFT_1155_Token_ABI } from "src/assets/files/5511cre_abi";
import { NFT_bnb_Token_ABI } from "src/assets/files/nft_bnb_abi";
import { NFT_20_Token_ABI } from "src/assets/files/20cre_abi";
import { NftService } from "src/app/common/services/metamask/nft/nft.service";
import { Sample } from "src/assets/files/currencyType";


declare let window: any;

@Component({
	selector: 'app-market-detail',
	templateUrl: './market-detail.component.html',
	styleUrls: ['./market-detail.component.css']
})
export class MarketDetailComponent implements OnInit {
	@ViewChild('closebutton') closebutton;
	@ViewChild('closebutton1') closebutton1;
	@ViewChild('closebutton2') closebutton2;
	@ViewChild('closebutton3') closebutton3;

	itemObj: any = {};
	items: any = {};
	moreitems: any = {};
	pageKey: any;
	limit = 6;
	skip = 6;
	account:any;
	buyedition = 1;
	minDateend = new Date();
	offerData: any = {};
	publishData: any = {};
	offObj: any = {};
	bidsObj: any = {};
	itemsHis: any = {};
	itemsOffers: any = {};
	apprToken: any = {};
	apprTokenId: any = {};
	apprTokenABI: any = {};
	bnbBalance: Number;
	tokenBalance: any = {};
	approvePrice: any = {};
	developerfee: any = {};
	royaltyfee: any = {};
	receivePrice: any = {};
	toffers: any = {};
	ttype: any = {};
	lastbid = 0;
	showroyaltyfee: any = {};
	showdeveloperfee: any = {};

	toToken: any = {};
	toTokenId: any = {};
	toTokenABI: any = {};
	token = localStorage.getItem("Game-Token");
	itemId : any;


	constructor(
		private activatedRoute: ActivatedRoute,
		private route: Router,
		public service: DataService, 
		private toasterService: ToasterService, 
		private nftservice: NftService,
		) { 
		}

	ngOnInit() {
		this.init();
	}

	init(){
		this.service.isOverlay = false;
		this.minDateend.setDate(this.minDateend.getDate() - 1);
		this.account = this.service.metaDeatails.account;
		this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');




		this.itemObj.pagetype = this.activatedRoute.snapshot.queryParamMap.get('type');
		console.log('itemObj.pagekey  ',this.itemObj.pagekey);
		var itemId = decodeURIComponent(this.itemObj.pagekey);
		console.log("this.activatedRoute.snapshot.queryParamMap.get('type')this.activatedRoute.snapshot.queryParamMap.get('type')",this.activatedRoute.snapshot.queryParamMap.get('type'))
		this.pageKey = itemId;
		if(this.activatedRoute.snapshot.queryParamMap.get('type') == "0"){
			
		this.getItems(itemId);
		}else{
			
			this.getItems1(itemId);
		//	this.getItems1(itemId);
		}
		this.getItemHistory(itemId);
		this.getItemOffers(itemId);
		this.checkBNBbalance();
		this.getFees();
	}

	public hideModel() {
	    this.closebutton.nativeElement.click();
	    this.closebutton1.nativeElement.click();
	    this.closebutton2.nativeElement.click();
	    this.closebutton3.nativeElement.click();
	}

	getFees() {
		this.service.getRequest("getNFTFees").subscribe((suc: any) => {

			console.log("sucsucsuc",suc)

			if (suc.status) {
				this.developerfee = suc.developerfee;
				this.royaltyfee = suc.roayaltyfee;
				this.showdeveloperfee = this.developerfee.fee/10;
				this.showroyaltyfee = this.royaltyfee.fee/10;
				console.log(this.developerfee, 'developerfee');
				console.log(this.royaltyfee, 'royaltyfee');
			}
		})
	}

	getItems(Id: any) {

		console.log("12333")
		

		if(Id) {
			this.service.postRequest("item-details", {id: Id}).subscribe((suc) => {
				let responseData: any = suc;
				if (responseData.status) {
					this.items = responseData.data;
					this.items.UserId = responseData.data.userId;
					this.items.itemId = responseData.data.itemId;
					this.getMoreItems(this.items.itemId, this.items.UserId);
				}
				else {
					this.toasterService.show(false, 'Invalid Item Details');
					this.route.navigateByUrl('market');		
				}
			});
		} else {
			this.toasterService.show(false, 'Something went wrong');
			this.route.navigateByUrl('market');
		}
	}

		getItems1(Id: any) {
		if(Id) {
			this.service.postRequest("item-details1", {id: Id}).subscribe((suc) => {
				let responseData: any = suc;
				if (responseData.status) {
					this.items = responseData.data;
					this.items.UserId = responseData.data.userId;
					this.items.itemId = responseData.data.itemId;
					this.getMoreItems(this.items.itemId, this.items.UserId);
				}
				else {
					this.toasterService.show(false, 'Invalid Item Details');
					this.route.navigateByUrl('market');		
				}
			});
		} else {
			this.toasterService.show(false, 'Something went wrong');
			this.route.navigateByUrl('market');
		}
	}

	getMoreItems(Id: any, userId: any) {
		if(Id) {
			this.service.postRequest("more-item-details", {id: Id, userId: userId}).subscribe((suc) => {
				let responseData: any = suc;
				if (responseData.status) {
					this.moreitems = responseData.data;
				}
			});
		} else {
			this.toasterService.show(false, 'Something went wrong');
			this.route.navigateByUrl('market');
		}
	}


	onbitSubmit(Items, formData){





		let askedprice = formData.bidsprice	;
		if (!askedprice) {
			this.service.isOverlay = false;
			return this.toasterService.show(false, 'Bid Price is required');
		}

		if (this.lastbid != 0 && Number(this.lastbid) >= Number(askedprice)) {
			console.log('condition true');
			this.service.isOverlay = false;
			return this.toasterService.show(false, 'Bid Price should more than lastbid');
		}
		if (Number(Items.price) >= Number(askedprice)) {
			this.service.isOverlay = false;
			return this.toasterService.show(false, 'Bid Price should more than seller price');
		}
		this.hideModel();
		this.service.isOverlay = true;
		if (Items) {
	        this.service.postRequest("collection/getOrderDetails", { _id: Items._id, edition: Items.supply }).subscribe((suc: any) => {
	            if (suc.status) {
	            	this.makeBid(suc, askedprice);
	            }
	            else {
	            	this.service.isOverlay = false;
	              return this.toasterService.show('error', 'Item not found.');
	            }
	        });
	    }
	}


	onSubmit(Items, formData) {
		console.log(formData, 'formData');
		console.log(Items, 'items');
		let askedprice = formData.offprice; 
		this.service.isOverlay = true;
		if (!askedprice) {
			this.service.isOverlay = false;
			return this.toasterService.show(false, 'Offer Price is required');
		}

		console.log('price', typeof Number(askedprice), typeof Number(Items.price))
		if (Number(Items.price) <= Number(askedprice)) {
			this.service.isOverlay = false;
			return this.toasterService.show(false, 'Offer Price should less than seller price');
		}
		this.hideModel();
		if (Items) {
	        this.service.postRequest("collection/getOrderDetails", { _id: Items._id, edition: Items.supply }).subscribe((suc: any) => {
	            if (suc.status) {
	            	this.makeOffer(suc, askedprice);
	            }
	            else {
	            	this.service.isOverlay = false;
	              return this.toasterService.show(false, 'Item not found.');
	            }
	        });
	    }
	}

	getItemHistory(Id: any) {
		if(Id) {
			this.service.postRequest("item-history", {id: Id}).subscribe((suc) => {
				let responseData: any = suc;
				if (responseData.status) {
					this.itemsHis = responseData.data;
				}
			});
		} else {
			this.service.isOverlay = false;
			this.toasterService.show(false, 'Something went wrong');
			this.route.navigateByUrl('market');
		}
	}

	getItemOffers(Id: any) {
		if(Id) {
			this.service.postRequest("item-offers", {id: Id}).subscribe((suc) => {
				let responseData: any = suc;
				if (responseData.status) {
					this.itemsOffers = responseData.data;
					this.lastbid = responseData.highestbid;
					console.log(this.lastbid, 'lastbid');
				}
				else {
					this.lastbid = 0;
				}
			});
		} else {
			this.service.isOverlay = false;
			this.toasterService.show(false, 'Something went wrong');
			this.route.navigateByUrl('market');
		}
	}

	async checkBNBbalance() {
		let account = this.service.metaDeatails.account;
		if (!account) {
			this.service.isOverlay = false;
			return this.toasterService.show(false, "Please login to continue");
		}
		let bal = await this.nftservice.checkBal(ContractDetails.nft_wbnb, NFT_bnb_Token_ABI, account);
		if (bal.status) {
			this.bnbBalance = (bal.result/1e18);
		}
		console.log(this.bnbBalance, 'bnb balance');
	}

	async approveOffer(offers, type) {
		console.log("approve offers function called");
		console.log("offers",offers, 'type', type);
		this.hideModel();
		this.service.isOverlay = true;
		if(type == 'Bid') {
			console.log('type bid');
			await this.service.postRequest("collection/getOfferInfo", {item_id: offers.offerId}).subscribe((suc: any) => {
				this.approveBuyerBid(suc,offers.price);
			});
		}
		else {
			console.log('type offer');
			await this.service.postRequest("collection/getOfferInfo", {item_id: offers.offerId}).subscribe((suc: any) => {

				
				this.makeSellOffer(suc,offers.price)
				
				//this.makeBuy(suc,offers.price);
			});
		}
	}
	
	async buyCalled(Items, type) {




		if (type == 'buy') {
			this.hideModel();
			this.service.isOverlay = true;
			await this.service.postRequest("collection/getOrderDetails", {_id: Items._id, edition: Items.supply}).subscribe((suc: any) => {



				this.makeBuy(suc,10);
			});	
		}
		else if(type == 'offer') {
			
		}
	}

	beforConfirmOffer(offers, type) {
		this.toffers = offers;
		this.ttype = type;
		this.approvePrice = offers.price;
		var devfeeper = ((offers.price*1e18)*this.developerfee.fee)/100;
		var royalfeeper = ((offers.price*1e18)*this.royaltyfee.fee)/100;
		this.receivePrice = ((offers.price*1e18) - (devfeeper+royalfeeper))/ 1e18;
	}

	async makeBuy(res,oprice) {
		try {
			var userAddr = this.service.metaDeatails.account;
			if (res.status) {

				let datas = res.data;




				if (datas.imported == 1) {
					let cobj = {
	                    "contractid": datas.contractId,
	                }
	                console.log(cobj, 'cobj');
					await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
                      if (reqData.status) {
                        let cdata = reqData.data;
                        console.log(cdata.contract, 'cdata.contract');
                        console.log(cdata.abi, 'cdata.abi');
                        this.apprToken = cdata.contract;
                        this.apprTokenABI = cdata.abi;

                        this.contractMakeBuy(this.apprToken, this.apprTokenABI, datas, oprice);
                      }
                    })
				}
				else { 

					let currency = datas.currency;
					let tocurrency = datas.tocurrency;
					this.apprToken = Sample[0][currency].address;
					this.apprTokenId = Sample[0][currency].tokenid;


					this.toToken = Sample[0][tocurrency].address;
					console.log("toToken");
					if (currency == 'ERC721') {
						this.apprTokenABI = NFT_721_Token_ABI;
					}
					else if(currency == 'WBNB') {
						this.apprTokenABI = NFT_1155_Token_ABI;
					}
					else if(currency == 'ERC20') {
						this.apprTokenABI = NFT_20_Token_ABI;
					}

					if (tocurrency == 'ERC721') {
						this.toTokenABI = NFT_721_Token_ABI;
					}
					else if(tocurrency == 'WBNB') {
						this.toTokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];
					}
					else if(tocurrency == 'ERC20') {
						this.toTokenABI = NFT_20_Token_ABI;
					}


					

					
					this.contractMakeBuy(this.apprToken, this.apprTokenABI, datas, oprice);
				}
			}
		}
		catch(er) {
			if (er) {
				this.service.isOverlay = false;
				this.toasterService.show(false, er);
			}
		}
	}

	async makeOffer(itemData, askedprice) {
		try {  
			console.log('here also called');
			let datas = itemData.data;
			if(Number(askedprice) > Number(datas.price) ){
				this.service.isOverlay = false;
				this.toasterService.show(false,"Offer price less than original price");
				return false;
			}

            var userAddr = this.service.metaDeatails.account;
            console.log("userAddr11",userAddr);
				if (itemData.status) {

					if (datas.imported == 1) {
						let cobj = {
		                    "contractid": datas.contractId,
		                }
		                console.log(cobj, 'cobj');
						await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
	                      if (reqData.status) {
	                        let cdata = reqData.data;
	                        console.log(cdata.contract, 'cdata.contract');
	                        console.log(cdata.abi, 'cdata.abi');
	                        this.apprToken = cdata.contract;
	                        this.apprTokenABI = cdata.abi;
	                        this.contractMakeOffer(this.apprToken, this.apprTokenABI, datas, askedprice);
	                      }
	                    })
					}
					else {
						let currency = datas.currency;
						let tocurrency = datas.tocurrency;
						this.apprToken = Sample[0][currency].address;
						this.apprTokenId = Sample[0][currency].tokenid;


						this.toToken = Sample[0][tocurrency].address;
						if (currency == 'ERC721') {
							this.apprTokenABI = NFT_721_Token_ABI;
						}
						else if(currency == 'WBNB') {
							this.apprTokenABI = NFT_1155_Token_ABI;
						}
						else if(currency == 'ERC20') {
							this.apprTokenABI = NFT_20_Token_ABI;
						}

						if (tocurrency == 'ERC721') {
							console.log("721 called")
							this.toTokenABI = NFT_721_Token_ABI;
						}
						else if(tocurrency == 'WBNB') {
							console.log("wbnb called")
							this.toTokenABI = NFT_1155_Token_ABI;
						}
						else if(tocurrency == 'ERC20') {
							console.log("erc called")
							this.toTokenABI = NFT_20_Token_ABI;
						}
						this.contractMakeOffer(this.apprToken, this.apprTokenABI, datas, askedprice);
					}
			}
        }
        catch (error) {
        	this.service.isOverlay = false;
        	console.log('here catch console called');
            this.toasterService.show(false, error.message);
        }
	}


	async makeBid(itemData, askedprice) {
		try {  

				let datas = itemData.data;

				console.log("datasdatasdatas",datas);
				return false;

					if(askedprice < datas.price ){
						this.service.isOverlay = false;
						this.toasterService.show(false,"Bid price should greater than original price");
						return false;
					}

           

            var userAddr = this.service.metaDeatails.account;
				if (itemData.status) {
					if (datas.imported ==1) {

						let cobj = {
		                    "contractid": datas.contractId,
		                }
		                console.log(cobj, 'cobj');
						await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
	                      if (reqData.status) {
	                        let cdata = reqData.data;
	                        console.log(cdata.contract, 'cdata.contract');
	                        console.log(cdata.abi, 'cdata.abi');
	                        this.apprToken = cdata.contract;
	                        this.apprTokenABI = cdata.abi;
	                        this.contractMakeBid(this.apprToken, this.apprTokenABI, datas, askedprice);
	                      }
	                    })
					}
					else {

						let currency = datas.currency;
						let tocurrency = datas.tocurrency;
						this.apprToken = Sample[0][currency].address;
						this.apprTokenId = Sample[0][currency].tokenid;


						this.toToken = Sample[0][tocurrency].address;
						if (currency == 'ERC721') {
							this.apprTokenABI = NFT_721_Token_ABI;
						}
						else if(currency == 'WBNB') {
							this.apprTokenABI = NFT_1155_Token_ABI;
						}
						else if(currency == 'ERC20') {
							this.apprTokenABI = NFT_20_Token_ABI;
						}

						if (tocurrency == 'ERC721') {
							console.log("721 called")
							this.toTokenABI = NFT_721_Token_ABI;
						}
						else if(tocurrency == 'WBNB') {
							console.log("wbnb called")
							this.toTokenABI = NFT_1155_Token_ABI;
						}
						else if(tocurrency == 'ERC20') {
							console.log("erc called")
							this.toTokenABI = NFT_20_Token_ABI;
						}

						this.contractMakeBid(this.apprToken, this.apprTokenABI, datas, askedprice);
					}
			}
        }
        catch (error) {
        	this.service.isOverlay = false;
            this.toasterService.show(false, error.message);
        }
	}

 	async makeSellOffer(orderDetail,oprice) {
		try {
			var userAddr = this.service.metaDeatails.account;
			if (orderDetail.status) {
				let datas = orderDetail.data;


				if (datas.imported == 1) {
					let cobj = {
		                    "contractid": datas.contractId,
	                }
	                console.log(cobj, 'cobj');
					await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
                      if (reqData.status) {
                        let cdata = reqData.data;
                        console.log(cdata.contract, 'cdata.contract');
                        console.log(cdata.abi, 'cdata.abi');
                        this.apprToken = cdata.contract;
                        this.apprTokenABI = cdata.abi;
                        this.contractApproveOffer(this.apprToken, this.apprTokenABI, datas, oprice);
                      }
                    })
				}
				else {

					let currency = datas.currency;
					let tocurrency = datas.tocurrency;
					this.apprToken = Sample[0][currency].address;
					this.apprTokenId = Sample[0][currency].tokenid;


					this.toToken = Sample[0][tocurrency].address;
					if (currency == 'ERC721') {
						this.apprTokenABI = NFT_721_Token_ABI;
					}
					else if(currency == 'WBNB') {
						this.apprTokenABI = NFT_1155_Token_ABI;
					}
					else if(currency == 'ERC20') {
						this.apprTokenABI = NFT_20_Token_ABI;
					}

					if (tocurrency == 'ERC721') {
						this.toTokenABI = NFT_721_Token_ABI;
					}
					else if(tocurrency == 'WBNB') {
						this.toTokenABI = NFT_1155_Token_ABI;
					}
					else if(tocurrency == 'ERC20') {
						this.toTokenABI = NFT_20_Token_ABI;
					}
					this.contractApproveOffer(this.apprToken, this.apprTokenABI, datas, oprice);
				}
			}
		}
		catch(er) {
			if (er) {
				this.service.isOverlay = false;
				this.toasterService.show(false, er);
			}
		}
	}

	async approveBuyerBid(orderDetail,oprice) {
		console.log(orderDetail, 'orderDetail');
		console.log(oprice, 'oprice');
		var userAddr = this.service.metaDeatails.account;
		if(!userAddr) {
			this.service.isOverlay = false;
			return this.toasterService.show(false, 'Please login to cointinue');
		}
		let orderDetails = orderDetail.data;
		let buyer = orderDetails.buyerAddr;
		console.log(buyer, 'buyer');
		let feeTuple = [this.developerfee.address, this.royaltyfee.address,this.developerfee.fee, this.royaltyfee.fee];
		console.log(feeTuple, 'feeTuple');
		let order = orderDetails.buyorder;
		console.log(order[0], 'order');
		let buyerVRS = order[0].vrs;
		let buyerFeeSignerprivateKey  = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
		let sigOrder = orderDetails.sellorder;
    	let signCreate = await this.nftservice.buyerFeeSign(order[0].order, feeTuple);
    	console.log(signCreate, 'signCreate');
    	let buyerFeeSig = signCreate.result;
    	console.log(buyerFeeSig, 'buyerFeeSig');
    	let sig1 =  await window.web3.eth.accounts.sign(buyerFeeSig, buyerFeeSignerprivateKey); 
		console.log(sig1, 'sig1');
        let buyerFeeSig1 = [sig1.v, sig1.r, sig1.s];
		console.log(buyerFeeSig1, 'buyerFeeSig1');
		// let buyerFeeSig = await this.nftservice.orderHash(order);
		// console.log(buyerFeeSig, 'orderHash');
		let sig = sigOrder[0].vrs;
		console.log(sig, 'sig');
		let buy : any = await this.nftservice.callBid(sigOrder[0].order, sig, buyerVRS, buyerFeeSig1, buyer, (orderDetails.askedprice*1e18).toString(), feeTuple, userAddr);
		console.log(buy, 'buy');
		if (buy.status) {
			let buyresult = buy.result;
			let bidorderObj = {
				'itemId' : orderDetails.itemId,
				'orderId' : orderDetails.orderId,
				'price' : orderDetails.askedprice,
				'ownerId' : orderDetails.buyerId,
				'txid' 	 : buy.result,
				'sold' 	 : "2",
				'status' 	 : "2",
				'buyercontractdata' 	 : { order : order, vrs : [] },
			}
			console.log(bidorderObj, 'bidorderObj');
			this.service.postRequest('collection/bidbuyComplete', bidorderObj).subscribe((res:any) => {
				console.log(res, 'bidbuyComplete');
				if (res.status) {
					let itemObj = {
						salestatus: "0",
						status: "completed",
						ownerId : orderDetails.buyerId,
						itemId: orderDetails.itemId,
					}
					console.log(itemObj, 'itemObj');
					this.service.postRequest('collection/updateItems', itemObj).subscribe((ress:any) => {
						console.log(ress, 'updateItems');
						if (ress.status) {
							this.service.isOverlay = false;
							this.toasterService.show(true, ress.msg);
							this.route.navigateByUrl('/market');
						}
						else {
							this.service.isOverlay = false;
							this.toasterService.show(false, ress.msg);
						}
					})
				}
			})
		}
	}

	async contractMakeOffer(apprToken, apprTokenABI, datas, askedprice) {
		try {
			console.log('contractMakeOffer function called');
			let apprTokenABII = JSON.parse(apprTokenABI);
			var userAddr = this.service.metaDeatails.account;
			let approve = await this.nftservice.approveBuyFun(apprToken, apprTokenABII, (askedprice*1e18), userAddr);
			if (!approve.result || approve.result == undefined || approve.result == null) {
				this.service.isOverlay = false;
				this.toasterService.show(false, 'Something went wrong, Please Try Again.');
				return;
			}

			let sellOrder = datas.sellorder;
			let order = sellOrder[0].order;

			let orderBuyer = [[userAddr,['0xae13d989dac2f0debff460ac112a837c89baa7cd', (askedprice*1e18).toString(), '0'], order[0][1], ],(askedprice*1e18).toString(), (order[1]).toString(),(order[3]).toString(),(order[4]).toString(),(order[5]).toString(),(order[6]).toString()];  
			console.log(orderBuyer, 'orderBuyer');
			let orderHash = await this.nftservice.orderHash(orderBuyer);
	      	let sig1 =  await window.web3.eth.personal.sign(orderHash.result, userAddr,''); 
	      	let r = sig1.slice(0, 66);
	      	let s = '0x' + sig1.slice(66, 130)
	      	let v = '0x' + sig1.slice(130, 132) 
	      	let BuyergetVRS = [v, r, s];
	      	if(orderHash && BuyergetVRS) {          
	            let orderObj = {
					'itemId' : datas.itemId,
					'orderId' : datas.orderId,
					'address': userAddr,
					'price': datas.price,
					'currency': datas.tocurrency,
					'type': 'Offered',
					'offerprice': askedprice,
					'edition': datas.edition,
					'buyercontractdata' 	 : { order : orderBuyer, vrs : BuyergetVRS },
				}
				console.log(orderObj, 'orderObj makeoffer');
				this.service.postRequest('collection/makeOffer', orderObj).subscribe((result:any)=>{
	              	if(result.status){ 
	              		this.service.isOverlay = false;
	                	this.toasterService.show(result.status,result.msg);
	                	this.route.navigateByUrl('/market');
	              	}else{  
	              		this.service.isOverlay = false;     
	                	this.toasterService.show(result.status, result.msg);
	            	}
	            })
	        }
		} 
		catch(e) {
			this.service.isOverlay = false;
		}
	}

	async contractApproveOffer(apprToken, apprTokenABI, datas, oprice) {
		try {
			let apprTokenABII = JSON.parse(apprTokenABI);
			var userAddr = this.service.metaDeatails.account;

			/*let balance = await this.nftservice.checkBal(this.toToken, this.toTokenABI, userAddr);
			if (balance.result == '0' || balance.result == 0) {
				this.toasterService.show(false, 'Sorry Insufficient Fund to Proceed');
				return;
			}*/

			let amount = oprice*1e18; //0.1e18;//should change dynamically
			let approve = await this.nftservice.approveBuyFun(apprToken, apprTokenABII, amount, userAddr);
			if (!approve.result || approve.result == undefined || approve.result == null) {
				this.service.isOverlay = false;
				this.toasterService.show(false, 'Something went wrong, Please Try Again.');
				return;
			}
			console.log(datas, 'datas');
			let buyorder = datas.buyorder;
			let order = buyorder[0].order;
			let BuyerVRS = buyorder[0].vrs;

			let orderBuyer = [[order[0][0],order[0][1],order[0][2], ],(order[1]).toString(),(order[2]).toString(),(order[3]).toString(),(order[4]).toString(),(order[5]).toString(),'2'];  
			/*let orderBuyer = [["0xd3A02594D41076DDfdba93c277551Ff4CCA76833",
			 ["0x76dbb555c3bb4d985e93567670093f68bf12bca8", "6", "1"],
			 ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "1000000000000000000", "0"]
			 ],
			  "12", "1000000000000000000", "40", "262097159535", "1635162974776", "1"];*/

			// let	sample_ordersdata = [["0xc84928f94462F530a83A8D8E8e1FF4851255b335", ["0xd3A02594D41076DDfdba93c277551Ff4CCA76833", "1", "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "2", "2"]], "13", "0", "40", "1300223672072", "1634904186615", "1"];


			let orderHash = await this.nftservice.orderHash(order);


			console.log("orderHash",orderHash);

			let sellorderVRS =  datas.sellorder[0].vrs;
			/*let buyerFeeSignerprivateKey  = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
        	let buyerFeeSigner = await window.web3.eth.accounts.sign(orderHash.result, buyerFeeSignerprivateKey);*/
        	// let fees = this.service.getRequest('/getFees');
        	// let feeTuple = ["0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","1","40"];
        	let feeTuple = [this.developerfee.address, this.royaltyfee.address,this.developerfee.fee, this.royaltyfee.fee];


        	console.log("feeTuple",feeTuple);

        	let buyerFeeSignerprivateKey  = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';

        		console.log("buyerFeeSignerprivateKey",buyerFeeSignerprivateKey);

        	let signCreate = await this.nftservice.buyerFeeSign(order, feeTuple);


        	console.log("signCreatesignCreatesignCreate",signCreate);
        	

        	let feeSigner = signCreate.result;
        	let sig1 =  await window.web3.eth.accounts.sign(feeSigner, buyerFeeSignerprivateKey); 
            var  BuyergetVRS = [sig1.v, sig1.r, sig1.s];
            // var  BuyergetVRS = datas.buyorder[0].vrs;
          //  console.log("BuyergetVRS",BuyergetVRS);return false;

         	// let sample_buyervrs = ["0x2a36a9fcc4b82eb60171ee2ae5950b658c5d9c509e4ebbdda9b8fcfbf9e1661e", "0x453035a8327c6edfa2bb472b6e2185012af920e8b3b5569d5e9e0dbef6ae5754", "0x1c"];
		//	let validate = await this.nftservice.validateBuyerSign(order, feeTuple, BuyergetVRS);

					console.log("feeSigner",feeSigner);
					console.log("datas.price",datas.price);
					console.log("orderBuyer",orderBuyer);
					console.log("sellorderVRS",sellorderVRS);
					console.log("BuyergetVRS",BuyergetVRS);
					console.log("userAddr",userAddr);

			let buy : any = await this.nftservice.callBuy(oprice, order, BuyerVRS, BuyergetVRS, feeTuple,userAddr );

			console.log("buy",buy);


			if (buy.status) {
				let orderObj = {
					'price' : oprice,
					/*'itemId' : datas.itemId,*/
					'orderId': datas.orderId,
					'ownerId' : datas.buyerId,
					'sold' 	 : "2",
					'txid' 	 : buy.result,
					'status' 	 : "2",
					'buyercontractdata' 	 : { order : order, vrs : [] },
				}
				console.log('orderObj', orderObj);
				this.service.postRequest('collection/offerbuyComplete', orderObj).subscribe((res:any) => {
					console.log(res, 'ress');
					if (res.status) {
						let exObj = {
							itemId: datas.itemId,
							orderId: datas.orderId,
							_id: datas._id,
							expire: 1,
						}
						console.log(exObj, 'exObj');
						this.service.postRequest('collection/expireOffer', exObj).subscribe((re:any) => {
							console.log(re, 'exObj re');
							if (re.status) {

								let itemObj = {
									salestatus: "0",
									status: "completed",
									itemId: datas.itemId,
									ownerId : datas.buyerId,
								}
								console.log(itemObj, 'itemObj');
								this.service.postRequest('collection/updateItems', itemObj).subscribe((ress:any) => {
									console.log(ress, 'ress');
									if (ress.status) {
										this.service.isOverlay = false;
										this.toasterService.show(true, ress.msg);
										this.route.navigateByUrl('/market');
									}
									else {
										this.service.isOverlay = false;
										this.toasterService.show(false, ress.msg);
									}
								})
							}
						})
					}
				})
			}
		}
		catch(e) {
			this.service.isOverlay = false;
		}
	}

	async contractMakeBid(apprToken, apprTokenABI, datas, askedprice) {
		try {
			let apprTokenABII = JSON.parse(apprTokenABI);
			var userAddr = this.service.metaDeatails.account;

			let approve = await this.nftservice.approveBuyFun(apprToken, apprTokenABII, (askedprice*1e18).toString(), userAddr);
			if (!approve.result || approve.result == undefined || approve.result == null) {
				this.service.isOverlay = false;
				this.toasterService.show(false, 'Something went wrong, Please Try Again.');
				return;
			}

			let sellOrder = datas.sellorder;
			let order = sellOrder[0].order;

			// let orderBuyer = [[userAddr,order[0][1],order[0][2], ],(order[1]).toString(),(order[2]).toString(),(order[3]).toString(),(order[4]).toString(),(order[5]).toString(),(order[6]).toString()];  
			let orderHash = await this.nftservice.bidOrderHash(order, userAddr, (askedprice*1e18).toString());
			console.log(orderHash, 'bidOrderHash');
          	let sig1 =  await window.web3.eth.personal.sign(orderHash.result, userAddr,''); 
          	let r = sig1.slice(0, 66);
          	let s = '0x' + sig1.slice(66, 130)
          	let v = '0x' + sig1.slice(130, 132) 
          	let BuyergetVRS = [v, r, s];
          	if(orderHash && BuyergetVRS) {          
                let orderObj = {
									'itemId' : datas.itemId,
									'orderId' : datas.orderId,
									'address': userAddr,
									'price': datas.price,
									'type': 'Bid',
									'offerprice': askedprice,
									'edition': datas.edition,
									'buyercontractdata' 	 : { order : order, vrs : BuyergetVRS },
								}
				
				this.service.postRequest('collection/makeOffer', orderObj).subscribe((result:any)=>{
                  	if(result.status){ 
                  		this.service.isOverlay = false;
                    	this.toasterService.show(result.status,result.msg);
                    	this.route.navigateByUrl('/market');
                  	}else{       
                  		this.service.isOverlay = false;
                    	this.toasterService.show(result.status, result.msg);
                	}
                })
            }
		}
		catch(e) {
			this.service.isOverlay = false;
		}
	}

	async contractMakeBuy(apprToken, apprTokenABI, datas, oprice) {


		//try {

		//	let apprTokenABII = JSON.parse(apprTokenABI);
			if(datas.imported == 1){
				var apprTokenABII = JSON.parse(apprTokenABI);
			}else{
					var apprTokenABII = apprTokenABI;
			}
		
			var userAddr = this.service.metaDeatails.account;
			/*let balance = await this.nftservice.checkBal(this.toToken, this.toTokenABI, userAddr);
			if (balance.result == '0' || balance.result == 0) {
				this.toasterService.show(false, 'Sorry Insufficient Fund to Proceed');
				return;
			}*/
			let amount = oprice*1e18;//should change dynamically
		/*	
			let approve = await this.nftservice.approveBuyFun(apprToken, apprTokenABII, amount, userAddr);



			if (!approve.result || approve.result == undefined || approve.result == null) {
				this.service.isOverlay = false;
				this.toasterService.show(false, 'Something went wrong, Please Try Again.');
				return;
			}*/

			let sellOrder = datas.sellorder;
			let order = sellOrder[0].order;

		

			let orderBuyer = [[order[0][0],order[0][1],order[0][2], ],(order[2]).toString(), (order[1]).toString(),(order[3]).toString(),(order[4]).toString(),(order[5]).toString(),(order[6]).toString()];  
			/*let orderBuyer = [["0xd3A02594D41076DDfdba93c277551Ff4CCA76833",
			 ["0x76dbb555c3bb4d985e93567670093f68bf12bca8", "6", "1"],
			 ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "1000000000000000000", "0"]
			 ],
			  "12", "1000000000000000000", "40", "262097159535", "1635162974776", "1"];*/

			// let	sample_ordersdata = [["0xc84928f94462F530a83A8D8E8e1FF4851255b335", ["0xd3A02594D41076DDfdba93c277551Ff4CCA76833", "1", "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "2", "2"]], "13", "0", "40", "1300223672072", "1634904186615", "1"];
			let orderHash = await this.nftservice.orderHash(order);
			let sellorderVRS = sellOrder[0].vrs;
			/*let buyerFeeSignerprivateKey  = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
        	let buyerFeeSigner = await window.web3.eth.accounts.sign(orderHash.result, buyerFeeSignerprivateKey);*/
        	// let fees = this.service.getRequest('/getFees');
        	// let feeTuple = ["0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","1","40"];
        	let feeTuple = [this.developerfee.address, this.royaltyfee.address,this.developerfee.fee, this.royaltyfee.fee];
        	let buyerFeeSignerprivateKey  = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
        	let signCreate = await this.nftservice.buyerFeeSign(order, feeTuple);
        	let feeSigner = signCreate.result;
        	let sig1 =  await window.web3.eth.accounts.sign(feeSigner, buyerFeeSignerprivateKey); 
            let BuyergetVRS = [sig1.v, sig1.r, sig1.s];

         	// let sample_buyervrs = ["0x2a36a9fcc4b82eb60171ee2ae5950b658c5d9c509e4ebbdda9b8fcfbf9e1661e", "0x453035a8327c6edfa2bb472b6e2185012af920e8b3b5569d5e9e0dbef6ae5754", "0x1c"];
			let validate = await this.nftservice.validateBuyerSign(order, feeTuple, BuyergetVRS);


			 console.log("datas.pricedatas.pricedatas.price",datas.price);
			 // return false;

			let buy : any = await this.nftservice.callSell(datas.price, order, sellorderVRS, BuyergetVRS, feeTuple, userAddr);

		

			if (buy.status) {
				let orderObj = {
					/*'itemId' : datas.itemId,*/
					'orderId' : datas.orderId,
					'txid' 	 : buy.result,
					'sold' 	 : "2",
					'status' 	 : "2",
					'buyercontractdata' 	 : { order : order, vrs : [] },
				}
				this.service.postRequest('collection/privatebuyComplete', orderObj).subscribe((res:any) => {
					if (res.status) {
						let itemObj = {
							salestatus: "0",
							status: "completed",
							itemId: datas.itemId,
							ownerId : res.buyerId,
						}
						this.service.postRequest('collection/updateItems', itemObj).subscribe((ress:any) => {
							console.log('updateItems ress', ress);
							if (ress.status) {
								this.service.isOverlay = false;
								this.toasterService.show(true, ress.msg);
								this.route.navigateByUrl('market');
							}
							else {
								this.service.isOverlay = false;
								this.toasterService.show(false, ress.msg);
							}
						})
					}
				})
			}
		/*}
		catch(e) {
			this.service.isOverlay = false;
		}*/
	}

	myFunc(_id: any) {
		this.route.navigate(['/item-details/'], {queryParams:{id: encodeURIComponent(_id)}});
		setTimeout(() => {
			this.init();
		}, 1000);
	}
}
