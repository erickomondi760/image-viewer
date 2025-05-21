import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useGlobalContext } from "./AppContext";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=`;

const Gallery = () => {
  const { search } = useGlobalContext();

  const { data, error, isLoading } = useQuery({
    queryKey: ["images", search],
    queryFn: async () => {
      const result = await axios.get(url + `${search}`);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (error) {
    return (
      <section className="image-container">
        <h4>An error occurred</h4>
      </section>
    );
  }
  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        return (
          <img
            key={item.id}
            src={item?.urls?.regular}
            alt={item?.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
