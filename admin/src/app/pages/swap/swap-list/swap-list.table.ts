export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
    isSort: true,
  },
  {
    coloumnName: 'userAddress',
    coloumnDisplay: 'User Address',
    isSort: false,
    isLink: true,
    isCopy: true,
    link: 'address',
  },
  {
    coloumnName: 'pair',
    coloumnDisplay: 'Pair',
    isSort: true,
  },
  {
    coloumnName: 'amountETH',
    coloumnDisplay: 'From Amount',
    isSort: true,
  },
  {
    coloumnName: 'amountToken',
    coloumnDisplay: 'To Amount',
    isSort: true,
  },
  {
    coloumnName: 'txId',
    coloumnDisplay: 'Transaction Hash ',
    type: 'txId',
    isLink: true,
    isCopy: true,
    link: 'tx',
  },
  {
    coloumnName: 'status',
    coloumnDisplay: 'Status',
    isStatus: true,
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
