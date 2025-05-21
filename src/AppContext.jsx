import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const colorTheme = () => {
  const savedTheme = localStorage.getItem("darkTheme") === "true";
  console.log(savedTheme);

  return savedTheme || window.matchMedia("(prefers-color-scheme:dark)").matches;
};

const Context = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(colorTheme());
  const [search, setSearch] = useState("man");

  const toggleDarkTheme = () => {
    console.log(isDarkTheme);
    const myTheme = !isDarkTheme;

    setIsDarkTheme(myTheme);
    console.log(myTheme);

    localStorage.setItem("darkTheme", myTheme);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default Context;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
