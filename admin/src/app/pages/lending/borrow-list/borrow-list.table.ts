export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
    isSort: true,
  },
  {
    coloumnName: 'asset_name',
    coloumnDisplay: 'Asset Name',
    isSort: true,
  },
  {
    coloumnName: 'asset_address',
    coloumnDisplay: 'Asset Address',
    isSort: false,
    isLink: true,
    isCopy: true,
    link: 'address',
  },
  {
    coloumnName: 'user_address',
    coloumnDisplay: 'User Address',
    isSort: false,
    isLink: true,
    isCopy: true,
    link: 'address',
  },

  {
    coloumnName: 'amount',
    coloumnDisplay: 'Amount',
    isSort: true,
  },
  {
    coloumnName: 'tx_id',
    coloumnDisplay: 'Transaction Hash ',
    type: 'txId',
    isLink: true,
    isCopy: true,
    link: 'tx',
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
