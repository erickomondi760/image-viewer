import { useGlobalContext } from "./AppContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button
        className="dark-toggle"
        onClick={() => toggleDarkTheme(!isDarkTheme)}
      >
        {isDarkTheme ? <FaMoon /> : <FaSun />}
      </button>
    </section>
  );
};
export default ThemeToggle;
