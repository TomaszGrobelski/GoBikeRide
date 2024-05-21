export const rows = [
  {
    name: 'Łańcuch',
    lastMaintenanceDate: new Date('2024-04-10'),
    condition: 'Dobry',
    mileage: 1000,
    maintenanceCost: 50
  },
  {
    name: 'Koło przednie',
    lastMaintenanceDate: new Date('2024-02-14'),
    condition: 'Bardzo dobry',
    mileage: 800,
    maintenanceCost: 80
  },
  {
    name: 'Koło tylne',
    lastMaintenanceDate: new Date('2024-01-18'),
    condition: 'Bardzo dobry',
    mileage: 800,
    maintenanceCost: 80
  },
  {
    name: 'Przerzutka tylna',
    lastMaintenanceDate: new Date('2024-12-03'),
    condition: 'Dobry',
    mileage: 600,
    maintenanceCost: 60
  },
  {
    name: 'Przerzutka przednia',
    lastMaintenanceDate: new Date('2024-04-25'),
    condition: 'Dobry',
    mileage: 600,
    maintenanceCost: 60
  },
  {
    name: 'Hamulce',
    lastMaintenanceDate: new Date('2024-08-14'),
    condition: 'Bardzo dobry',
    mileage: 500,
    maintenanceCost: 70
  }
];

function randomDate(startDate: Date, endDate: Date) {
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
}

// Tworzenie mock danych dla podzespołów dla różnych rodzajów rowerów Gravel
export const gravelBikes = {
  standard: {
    category: 'szosa',
    parts: Array.from({ length: 7 }, (_, index) => ({
      bikeName: 'Szosa',
      name: `Podzespół ${index + 1}`,
      lastMaintenanceDate: randomDate(new Date('2023-01-01'), new Date()),
      condition: index % 2 === 0 ? 'Dobry' : 'Bardzo dobry',
      mileage: Math.floor(Math.random() * 1000) + 500,
      maintenanceCost: Math.floor(Math.random() * 100) + 50
    }))
  },
  premium: {
    category: 'gravel',
    parts: Array.from({ length: 7 }, (_, index) => ({
      bikeName: 'Gravel',
      name: `Podzespół ${index + 1}`,
      lastMaintenanceDate: randomDate(new Date('2023-01-01'), new Date()),
      condition: index % 2 === 0 ? 'Dobry' : 'Bardzo dobry',
      mileage: Math.floor(Math.random() * 1000) + 500,
      maintenanceCost: Math.floor(Math.random() * 100) + 50
    }))
  },
  premium2: {
    category: 'góral',
    parts: Array.from({ length: 7 }, (_, index) => ({
      bikeName: 'Góral',
      name: `Podzespół ${index + 1}`,
      lastMaintenanceDate: randomDate(new Date('2023-01-01'), new Date()),
      condition: index % 2 === 0 ? 'Dobry' : 'Bardzo dobry',
      mileage: Math.floor(Math.random() * 1000) + 500,
      maintenanceCost: Math.floor(Math.random() * 100) + 50
    }))
  }
};
