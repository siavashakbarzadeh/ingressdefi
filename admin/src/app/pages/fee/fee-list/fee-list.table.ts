export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
  },
  {
    coloumnName: 'fee_type',
    coloumnDisplay: 'Fee type',
  },
  {
    coloumnName: 'address',
    coloumnDisplay: 'Address',
  },
  {
    coloumnName: 'fee',
    coloumnDisplay: 'Fee value',
    // isStatus: true,
  },
  {
    coloumnName: 'action',
    coloumnDisplay: 'Action',
    isAction: true,
    actions: [
      {
        icon: 'edit_note',
        link: 'fee_edit',
        isLink: true,
        id: '_id',
      },
    ],
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
