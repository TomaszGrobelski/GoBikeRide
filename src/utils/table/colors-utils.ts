export enum CurrentStateColors {
    BardzoDobry = '#4CAF50',
    Dobry = '#8BC34A',
    Sredni = '#FFEB3B',
    Zly = '#FF9800',
    BardzoZly = '#F44336',
  }
  

export const getCurrentBackgroundColor = (state: string): string => {
  switch (state) {
    case 'Bardzo Dobry':
      return CurrentStateColors.BardzoDobry;
    case 'Dobry':
      return CurrentStateColors.Dobry;
    case 'Sredni':
      return CurrentStateColors.Sredni;
    case 'Zły':
      return CurrentStateColors.Zly;
    case 'Bardzo Zły':
      return CurrentStateColors.BardzoZly;
    default:
      return '#FFFFFF';
  }
};
