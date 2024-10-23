export const sortByProperty = <T>(
  data: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] => {
  const sorted = [...data].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    const isDateA = !isNaN(Date.parse(valueA as unknown as string));
    const isDateB = !isNaN(Date.parse(valueB as unknown as string));

    if (isDateA && isDateB) {
      const dateA = new Date(valueA as unknown as string);
      const dateB = new Date(valueB as unknown as string);
      return direction === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return direction === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    }

    return 0; 
  });

  return sorted;
};