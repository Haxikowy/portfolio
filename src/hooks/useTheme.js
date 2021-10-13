import { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState(false)
  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: light)').matches);
  }, []);

  const currentTheme = theme ? 'light-theme' : 'dark-theme';
  return [currentTheme, theme, setTheme]
}

export default useTheme
