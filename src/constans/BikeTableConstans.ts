export const tableHeaders = [
  {
    name: 'Nazwa',
    value: 'name',
    align: 'left' as const,
    icon: 'mingcute:arrow-up-fill',
    sortable: true
  },
  {
    name: 'Data konserwacji podzespołu',
    value: 'lastMaintenanceDate',
    align: 'right' as const,
    icon: 'mingcute:arrow-up-fill',
    sortable: true
  },
  {
    name: 'Aktualny stan',
    value: 'condition',
    align: 'right' as const,
    icon: '',
    sortable: false
  },
  {
    name: 'Aktualny przebieg [km]',
    value: 'mileage',
    align: 'right' as const,
    icon: 'mingcute:arrow-up-fill',
    sortable: true
  },
  {
    name: 'Koszt konserwacji',
    value: 'maintenanceCost',
    align: 'right' as const,
    icon: 'mingcute:arrow-up-fill',
    sortable: true
  },
  {
    name: 'Edytuj',
    value: 'edit',
    align: 'right' as const,
    icon: '',
    sortable: false
  },
  {
    name: 'Usuń',
    value: 'delete',
    align: 'right' as const,
    icon: '',
    sortable: false
  }
];
