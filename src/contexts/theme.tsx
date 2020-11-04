import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext<ThemeContextValue>(undefined)
// const ThemeUpdateContext = React.createContext<ThemeContextValue>(undefined)

type Props = {
  children: React.ReactNode,
  initialValue?: false
}

// type ThemeUpdateContextType = {
//   darkTheme: boolean;
//   toggleTheme: () => void;
// };

type ThemeContextValue =
  | [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  | undefined

export function useTheme() {
  return useContext(ThemeContext)
}

// export function useUpdateTheme() {
//   return useContext(ThemeUpdateContext)
// }

export function ThemeProvider({ children, initialValue = false } : Props) {
  const [darkTheme, setDarkTheme] = useState(false);

  // const toggleTheme = () => {
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
