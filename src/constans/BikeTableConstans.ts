export const tableHeaders = [
  {
    name: 'Nazwa',
    value: 'name',
    align: 'left' as const,
    sortable: true
  },
  {
    name: 'Data konserwacji',
    value: 'lastMaintenanceDate',
    align: 'right' as const,
    sortable: true
  },
  {
    name: 'Aktualny stan',
    value: 'condition',
    align: 'right' as const,
    sortable: false
  },
  {
    name: 'Aktualny przebieg [km]',
    value: 'mileage',
    align: 'right' as const,
    sortable: true
  },
  {
    name: 'Koszt konserwacji',
    value: 'maintenanceCost',
    align: 'right' as const,
    sortable: true
  },
  {
    name: 'Edytuj',
    value: 'edit',
    align: 'right' as const,
    sortable: false
  }
];
