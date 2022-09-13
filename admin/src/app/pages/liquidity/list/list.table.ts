export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
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
    coloumnName: 'pair',
    coloumnDisplay: 'Pair',
  },
  {
    coloumnName: 'from_amount',
    coloumnDisplay: 'From Amount',
  },
  {
    coloumnName: 'to_amount',
    coloumnDisplay: 'To Amount',
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
    coloumnName: 'status',
    coloumnDisplay: 'Status',
    isStatus: true,
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
