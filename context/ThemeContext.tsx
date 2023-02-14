  import  React, { createContext, useState} from 'react'
  import styles from '../styles/gallery.module.scss'
  
  interface Props {
    children: React.ReactNode;
  }
  

  export const ThemeContext = createContext<any>({ theme : styles.light, undefined});

  export const ThemeProvider: React.FC<Props> = ({children}) => {
    const [theme, setTheme] = useState(styles.light);

    return  <ThemeContext.Provider value={{theme, setTheme }}>
    {children}
    </ThemeContext.Provider>
  }