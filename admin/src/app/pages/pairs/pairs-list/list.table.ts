export const DisplayedDatas: any = [
  {
    coloumnName: 'sno',
    coloumnDisplay: 'Position',
  },
  {
    coloumnName: 'pair',
    coloumnDisplay: 'Pairs',
  },
  // {
  //   coloumnName: 'fee',
  //   coloumnDisplay: 'Fee',
  // },
  {
    coloumnName: 'pair_status',
    coloumnDisplay: 'Status',
  },
  {
    coloumnName: 'contract_add_status',
    coloumnDisplay: 'Stake Status',
    coloumnType: 'bollean',
  },
  {
    coloumnName: 'pair_address',
    coloumnDisplay: 'Pair Address',
    type: 'txId',
    isLink: true,
    isCopy: true,
    link: 'address',
  },
  {
    coloumnName: 'action',
    coloumnDisplay: 'Action',
    isAction: true,
    actions: [
      {
        icon: 'edit_note',
        isMeta: true,
        functionName: 'stakeAdd',
        tool: 'Add Staking',
        condtionObj: 'pair_address',
      },
    ],
  },
];

export const DisplayedColumns = DisplayedDatas.map((item: any, index: any) => {
  return item.coloumnName;
});
