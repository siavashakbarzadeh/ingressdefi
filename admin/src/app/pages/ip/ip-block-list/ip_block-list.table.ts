export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
  },
  {
    coloumnName: 'user_ip',
    coloumnDisplay: 'User Ip',
  },
  {
    coloumnName: 'status',
    coloumnDisplay: 'Status',
    isStatus: true,
  },
  {
    coloumnName: 'action',
    coloumnDisplay: 'Action',
    isAction: true,
    actions: [
      {
        icon: 'edit_note',
        link: 'ip_block_edit',
        isLink: true,
        id: '_id',
      },
    ],
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
