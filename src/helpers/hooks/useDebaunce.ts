import { useEffect, useState } from 'react';

export const useDebaunce = (value: string, delay: number) => {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debauncedValue;
};
