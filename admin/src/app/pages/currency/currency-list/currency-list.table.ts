export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
  },
  {
    coloumnName: 'currencyName',
    coloumnDisplay: 'Currency Name',
  },
  {
    coloumnName: 'currencySymbol',
    coloumnDisplay: 'Currency Symbol',
  },
  {
    coloumnName: 'status',
    coloumnDisplay: 'Status',
    // isStatus: true,
  },
  {
    coloumnName: 'action',
    coloumnDisplay: 'Action',
    isAction: true,
    actions: [
      {
        icon: 'edit_note',
        link: 'currency_edit',
        isLink: true,
        id: '_id',
      },
    ],
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
