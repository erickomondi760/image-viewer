import { useState } from "react";
import { useGlobalContext } from "./AppContext";

const SearchForm = () => {
  const [name, setName] = useState("");
  const { setSearch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(name);
    setName("");
  };
  return (
    <section className="form-input">
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cat"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input search-input"
        />
        <button type="submit" className="c">
          Submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
