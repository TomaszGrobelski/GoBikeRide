export const sortByProperty = <T>(
  data: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] => {
  const sorted = [...data].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    // Handle sorting for strings
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return direction === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    
    // Handle sorting for numbers
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    }

    // Handle sorting for dates
    if (valueA instanceof Date && valueB instanceof Date) {
      return direction === 'asc'
        ? valueA.getTime() - valueB.getTime()
        : valueB.getTime() - valueA.getTime();
    }

    // Handle cases where types may not match or are not comparable
    return 0; // This keeps the original order for incomparable types
  });

  return sorted;
};