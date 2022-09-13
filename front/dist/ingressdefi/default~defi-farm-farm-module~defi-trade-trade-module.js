(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~defi-farm-farm-module~defi-trade-trade-module"],{

/***/ "./src/app/common/services/metamask/swap/swap.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/services/metamask/swap/swap.service.ts ***!
  \***************************************************************/
/*! exports provided: SwapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapService", function() { return SwapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/router_abi */ "./src/assets/files/router_abi.ts");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_assets_files_token_abi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/files/token_abi */ "./src/assets/files/token_abi.ts");
/* harmony import */ var src_assets_files_pair_abi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/files/pair_abi */ "./src/assets/files/pair_abi.ts");
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/data.service */ "./src/app/common/services/api/data.service.ts");








class SwapService {
    constructor(dataService) {
        this.dataService = dataService;
        if (window.ethereum === undefined) {
            // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
        }
        else {
            window.web3 = window.web3.currentProvider;
            window.web3 = new window.Web3(window.ethereum);
        }
    }
    // get equalamount
    // getAmountsIn
    getAmountsIn(AmountOut, Path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('getAmountsIn called');
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].router_contract;
            let Abi_array = src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_2__["RouterAbi"];
            console.log(AmountOut, "___________________ AmountOut");
            console.log(Path, "___________________ Path");
            // let Path = [
            //   PairAddress,
            //   ToContract ? ToContract : ContractDetails.WBNB_contract,
            // ];
            console.log("here in");
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("typeof window.web3", typeof window.web3);
                if (typeof window.web3 !== "undefined") {
                    console.log("Contract", Contract);
                    console.log("params", AmountOut, Path);
                    let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield pair_contract.methods
                        .getAmountsIn(AmountOut, Path)
                        .call((err, getamountsInresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log('err getamountsInresult', err);
                        console.log('getamountsInresult getAmountsOut', getamountsInresult);
                        if (getamountsInresult) {
                            const sucMsg = {
                                status: true,
                                message: "GetamountsInresult Result",
                                resultamount: getamountsInresult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            console.log('got error getAmountsIn');
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // getAmountsOut
    getAmountsOut(AmountIn, Path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("here out");
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].router_contract;
            let Abi_array = src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_2__["RouterAbi"];
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield pair_contract.methods
                        .getAmountsOut(AmountIn, Path)
                        .call((err, getamountsOutresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log('err getAmountsOut', err);
                        console.log('getamountsOutresult getAmountsOut', getamountsOutresult);
                        if (getamountsOutresult) {
                            const sucMsg = {
                                status: true,
                                message: "getamountsOutresult Result",
                                resultamount: getamountsOutresult,
                            };
                            console.log('getamountsOutresult', getamountsOutresult);
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            console.log('getamountsOut error');
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // approve section
    ApproveFunction(Contract, Amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Abi_array = src_assets_files_token_abi__WEBPACK_IMPORTED_MODULE_4__["TokenAbi"];
            let SpenderAddress = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].router_contract;
            let UserAddress = this.dataService.metaDeatails.account;
            console.log("into approve function ------>");
            console.log("Contract ------>", Contract);
            console.log("SpenderAddress ------>", SpenderAddress);
            console.log("Amount ------>", Amount);
            console.log("UserAddress ------>", UserAddress);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    // allowance section
                    yield contract.methods
                        .allowance(UserAddress, SpenderAddress)
                        .call({ from: UserAddress }, (err, getAllowanceResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (getAllowanceResult) {
                            console.log("getAllowanceResult ----->", getAllowanceResult);
                            console.log("Amount ----->", Amount);
                            if (+getAllowanceResult > +Amount) {
                                const sucMsg = {
                                    status: true,
                                    message: "Successfully approved",
                                    result: "No need to approve",
                                };
                                yield resolve(sucMsg);
                            }
                            else {
                                // approve section
                                Amount = +Amount + 100000000000000000000;
                                console.log("Amount ----->", Amount);
                                yield contract.methods
                                    .approve(SpenderAddress, Amount.toString())
                                    .send({ from: UserAddress })
                                    .on("transactionHash", (hash) => {
                                    console.log("a ------>", hash);
                                })
                                    .on("receipt", (approveresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    const sucMsg = {
                                        status: true,
                                        message: "Successfully approved",
                                        result: approveresult,
                                    };
                                    resolve(sucMsg);
                                }))
                                    .on("confirmation", (confirmationNumber, approveresult) => { })
                                    .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    let message = error.message ==
                                        "MetaMask Tx Signature: User denied transaction signature"
                                        ? "Transaction Rejected !"
                                        : "Something went wrong try after Sometime";
                                    const sucMsg = {
                                        status: false,
                                        message: error.message,
                                        data: err,
                                    };
                                    yield resolve(sucMsg);
                                }));
                                // approve section
                            }
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                    // allowance section
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // token_to_coin section
    swapExactTokensForETH(AmountIn, AmountOutMin, contractAddress, Path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("into swapExactTokensForETH function ------>");
            // console.log("contractAddress ------>", contractAddress);
            console.log("AmountIn ------>", AmountIn);
            console.log("AmountOutMin ------>", AmountOutMin);
            let date = new Date();
            let timestamp = date.getTime();
            let Deadline = timestamp + 1000;
            let Abi_array = src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_2__["RouterAbi"];
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].router_contract;
            let UserAddress = this.dataService.metaDeatails.account;
            let To = this.dataService.metaDeatails.account;
            console.log(Path, "-------------------> Path");
            console.log(To, "-------------------> To");
            console.log(Deadline, "-------------------> Deadline");
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield contract.methods
                        .swapExactTokensForETH(AmountIn, AmountOutMin, Path, To, Deadline)
                        .send({ from: To })
                        .on("transactionHash", (hash) => {
                        console.log("a ------>", hash);
                    })
                        .on("receipt", (approveresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const sucMsg = {
                            status: true,
                            message: "Successfully swap",
                            result: approveresult,
                        };
                        resolve(sucMsg);
                    }))
                        .on("confirmation", (confirmationNumber, approveresult) => { })
                        .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let message = error.message ==
                            "MetaMask Tx Signature: User denied transaction signature"
                            ? "Transaction Rejected !"
                            : "Something went wrong try after Sometime";
                        const sucMsg = {
                            status: false,
                            message: error.message,
                            data: error,
                        };
                        yield resolve(sucMsg);
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // coin_to_token section
    swapExactETHForTokens(swapExactETHForTokens, AmountOut, contractAddress, Path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("into swapExactETHForTokens function ------>");
            let date = new Date();
            let timestamp = date.getTime();
            let Deadline = timestamp + 1000;
            let Abi_array = src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_2__["RouterAbi"];
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].router_contract;
            let UserAddress = this.dataService.metaDeatails.account;
            let To = this.dataService.metaDeatails.account;
            console.log("Contract ------>", Contract);
            console.log("swapExactETHForTokens ------>", swapExactETHForTokens);
            console.log("AmountOut ------>", AmountOut);
            console.log("Path ------>", Path);
            console.log("To ------>", To);
            console.log("Deadline ------>", Deadline);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield contract.methods
                        .swapExactETHForTokens(AmountOut, Path, To, Deadline)
                        .send({ from: To, value: swapExactETHForTokens })
                        .on("transactionHash", (hash) => {
                        console.log("a ------>", hash);
                    })
                        .on("receipt", (approveresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const sucMsg = {
                            status: true,
                            message: "Successfully swap",
                            result: approveresult,
                        };
                        resolve(sucMsg);
                    }))
                        .on("confirmation", (confirmationNumber, approveresult) => { })
                        .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let message = error.message ==
                            "MetaMask Tx Signature: User denied transaction signature"
                            ? "Transaction Rejected !"
                            : "Something went wrong try after Sometime";
                        const sucMsg = {
                            status: false,
                            message: error.message,
                            data: error,
                        };
                        yield resolve(sucMsg);
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // token_to_token section
    swapExactTokensForTokens(AmountIn, AmountOutMin, contractAddress, Path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let date = new Date();
            let timestamp = date.getTime();
            let Deadline = timestamp + 1000;
            let Abi_array = src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_2__["RouterAbi"];
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].router_contract;
            let To = this.dataService.metaDeatails.account;
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield contract.methods
                        .swapExactTokensForTokens(AmountIn, AmountOutMin, Path, To, Deadline)
                        .send({ from: To })
                        .on("transactionHash", (hash) => {
                        console.log("a ------>", hash);
                    })
                        .on("receipt", (approveresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const sucMsg = {
                            status: true,
                            message: "Successfully swap",
                            result: approveresult,
                        };
                        resolve(sucMsg);
                    }))
                        .on("confirmation", (confirmationNumber, approveresult) => { })
                        .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let message = error.message ==
                            "MetaMask Tx Signature: User denied transaction signature"
                            ? "Transaction Rejected !"
                            : "Something went wrong try after Sometime";
                        const sucMsg = {
                            status: false,
                            message: error.message,
                            data: error,
                        };
                        yield resolve(sucMsg);
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    getAmountsInOld(Contract, Abi_array, AmountOut, Path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield pair_contract.methods
                        .getAmountsIn(AmountOut, Path)
                        .call((err, getamountsInresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (getamountsInresult) {
                            const sucMsg = {
                                status: true,
                                message: "GetamountsInresult Result",
                                resultamount: getamountsInresult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // getAmountsOut
    getAmountsOutOld(Contract, Abi_array, AmountIn, Path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    console.log('getAmountsOutOld called', Abi_array, Contract);
                    let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield pair_contract.methods
                        .getAmountsOut(AmountIn, Path)
                        .call((err, getamountsOutresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (getamountsOutresult) {
                            const sucMsg = {
                                status: true,
                                message: "getamountsOutresult Result",
                                resultamount: getamountsOutresult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    GetReserves(pairAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Contract = pairAddress;
            let Abi_array = src_assets_files_pair_abi__WEBPACK_IMPORTED_MODULE_5__["PairAbi"];
            console.log("here in", Contract);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield pair_contract.methods.getReserves().call((err, result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (result) {
                            const sucMsg = {
                                status: true,
                                message: "getReserves Result",
                                resultamount: result,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
}
SwapService.ɵfac = function SwapService_Factory(t) { return new (t || SwapService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"])); };
SwapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SwapService, factory: SwapService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/files/router_abi.ts":
/*!****************************************!*\
  !*** ./src/assets/files/router_abi.ts ***!
  \****************************************/
/*! exports provided: RouterAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterAbi", function() { return RouterAbi; });
let RouterAbi = [{ "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WETH", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];


/***/ })

}]);
//# sourceMappingURL=default~defi-farm-farm-module~defi-trade-trade-module.js.map