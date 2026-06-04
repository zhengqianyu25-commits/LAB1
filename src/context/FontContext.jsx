import { createContext, useContext, useState, useEffect } from 'react';

const FontContext = createContext();

const sizes = { small: 0.9, medium: 1, large: 1.15 };

export function FontProvider({ children }) {
  const [size, setSize] = useState(() => {
    return localStorage.getItem('fontSize') || 'medium';
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${17 * sizes[size]}px`;
    localStorage.setItem('fontSize', size);
  }, [size]);

  const cycle = () => {
    setSize(s => s === 'small' ? 'medium' : s === 'medium' ? 'large' : 'small');
  };

  const label = size === 'small' ? 'A⁻' : size === 'large' ? 'A⁺' : 'A';

  return (
    <FontContext.Provider value={{ size, cycle, label }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFontSize() {
  return useContext(FontContext);
}
