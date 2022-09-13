export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
    isSort: true,
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
    coloumnName: 'tx_id',
    coloumnDisplay: 'Transaction Hash ',
    type: 'txId',
    isLink: true,
    isCopy: true,
    link: 'tx',
  },
  {
    coloumnName: 'vote',
    coloumnDisplay: 'Vote',
    bollean : true
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
