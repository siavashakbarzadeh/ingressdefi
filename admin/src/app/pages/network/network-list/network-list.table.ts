export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
  },
  {
    coloumnName: 'networkName',
    coloumnDisplay: 'Network Type',
  },
  {
    coloumnName: 'currencySymbol',
    coloumnDisplay: 'Currency',
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
        link: 'network_edit',
        isLink: true,
        id: '_id',
      },
    ],
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
