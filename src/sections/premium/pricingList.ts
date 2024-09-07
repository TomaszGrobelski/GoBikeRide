export const pricingList = {
  standard: {
    id: 1,
    title: 'Standardowy',
    price: 0,
    features: [
      { id: '1', description: 'Dostęp do standardowych tras' },
      { id: '2', description: 'Jeden rower w rowerowni' },
      { id: '3', description: 'Dostęp do standardowych tras' },
      { id: '4', description: 'Jeden rower w rowerowni' },
    ],
    buttonContent: 'Aktualna darmowa wersja',
  },
  premium: {
    id: 2,
    title: 'Premium',
    price: 10,
    features: [
      { id: '5', description: 'Dostęp do wszystkich tras' },
      { id: '6', description: 'Trzy rowery w rowerowni' },
      {
        id: '7',
        description: 'Priorytetowa pomoc przez dział techniczny GoBikeRide',
      },
      { id: '8', description: 'Odznaka użytkownika premium' },
      {
        id: '9',
        description:
          'Udział w konkursach organizowanych przez twórców aplikacji',
      },
      {
        id: '10',
        description: 'Dostęp beta do nowych funkcjonalności aplikacji',
      },
    ],
    buttonContent: 'Kup Pakiet Premium',
  },
};
