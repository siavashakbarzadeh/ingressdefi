export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
    isSort: true,
  },
  {
    coloumnName: 'currencyName',
    coloumnDisplay: 'Name',
    isSort: true,
  },
  {
    coloumnName: 'currencySymbol',
    coloumnDisplay: 'Symbol',
    isSort: true,
  },
  {
    coloumnName: 'contract_address',
    coloumnDisplay: 'Address',
    isSort: false,
    isLink: true,
    isCopy: true,
    link: 'token',
  },
  
  {
    coloumnName: 'status',
    coloumnDisplay: 'Status',
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
