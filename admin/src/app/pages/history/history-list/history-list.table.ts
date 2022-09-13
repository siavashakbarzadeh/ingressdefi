export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
    isSort: true,
  },
  {
    coloumnName: 'currency',
    coloumnDisplay: 'Token Name',
    isSort: true,
  },
  {
    coloumnName: 'name',
    coloumnDisplay: 'Name',
    isSort: true,
  },
  {
    coloumnName: 'txid',
    coloumnDisplay: 'Hash',
    isSort: false,
    isLink: true,
    isCopy: true,
    link: 'tx',
  },
  {
    coloumnName: 'from',
    coloumnDisplay: 'From',
    isSort: true,
  },
  {
    coloumnName: 'to',
    coloumnDisplay: 'To',
    isSort: true,
  },
  {
    coloumnName: 'price',
    coloumnDisplay: 'BNBAmount',
    isSort: true,
  },
  {
    coloumnName: 'type',
    coloumnDisplay: 'Type',
    isSort: true,
  },
  {
    coloumnName: 'date',
    coloumnDisplay: 'Date',
    isSort: true,
    isDate: true,
  },
  
  {
    coloumnName: 'status',
    coloumnDisplay: 'Status',
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
