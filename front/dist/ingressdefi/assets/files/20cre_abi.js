export let NFT_20_Token_ABI =  [{"inputs":[{"internalType":"address","name":"buyerfeesigner","type":"address"},{"internalType":"address","name":"wethAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AllowToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBeneficiary","type":"address"}],"name":"Beneficiary","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBuyerFeeSigner","type":"address"}],"name":"BuyerFeeSigner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sellToken","type":"address"},{"indexed":true,"internalType":"uint256","name":"sellTokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"buyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"buyTokenId","type":"uint256"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sellToken","type":"address"},{"indexed":true,"internalType":"uint256","name":"sellTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sellValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"buyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"buyTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"buyValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"orderType","type":"uint256"}],"name":"MatchOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRoyaltyFeeLimit","type":"uint256"}],"name":"RoyaltyFeeLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newMintableStore","type":"address"}],"name":"SetMintableStore","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerSig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"bid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyerFeeSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"completed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"getBidOrderCompletedKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"getCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"getCompletedKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"prepareBidOrderHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"prepareBuyerFeeMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"prepareOrderHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royaltyFeeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"sell","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newBuyerFeeSigner","type":"address"}],"name":"setBuyerFeeSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRoyaltyFeeLimit","type":"uint256"}],"name":"setRoyaltyFeeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setTokenStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"toEthSignedMessageHash","outputs":[{"internalType":"address","name":"signer","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"transferFeeView","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"validateBidOrderSignatureView","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"validateBuyerFeeSigView","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"validateOrderSignatureView","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];