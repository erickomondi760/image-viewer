import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import Gallery from "./Gallery";
import { useGlobalContext } from "./AppContext";

const App = () => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
