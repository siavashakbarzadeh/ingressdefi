import { AppRoutes } from 'src/app/common/routes/app-url';

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
    coloumnName: 'start_tx_id',
    coloumnDisplay: 'Transaction Hash ',
    type: 'txId',
    isLink: true,
    isCopy: true,
    link: 'tx',
  },
  {
    coloumnName: 'contest_id',
    coloumnDisplay: 'Contest Id',
    isSort: true,
  },
  {
    coloumnName: 'created_date',
    coloumnDisplay: 'created Date',
    isDate: true,
  },
  {
    coloumnName: 'expired_date',
    coloumnDisplay: 'Expired Date',
    isDate: true,
  },

  {
    coloumnName: 'status',
    coloumnDisplay: 'Status',
  },
  {
    coloumnName: 'actions',
    coloumnDisplay: 'Actions',
    isAction: true,
    actions: [
      {
        icon: 'visibility',
        link: 'lottery_list',
        isLink: true,
        id: 'contest_id',
      },
    ],
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
