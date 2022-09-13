export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
  },
  {
    coloumnName: 'title',
    coloumnDisplay: 'Title',
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
        link: 'cms_edit',
        isLink: true,
        id: 'pagekey',
      },
    ],
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
