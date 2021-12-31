import { Web3ReactProvider } from "@web3-react/core";
import { useEffect } from "react";

import Demo, { getLibrary } from "../components/Demo";
import useLocalStorage from "../hooks/useLocalStorage";

export default function () {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      document.documentElement.setAttribute("data-theme", prevTheme === "dark" ? "light" : "dark");
      return prevTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <>
      <div className="fixed top-0 right-0 mt-2 mr-4">
        <button type="button" className="btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="container min-h-screen mx-auto">
          <Demo />
        </div>
      </Web3ReactProvider>
    </>
  );
}
