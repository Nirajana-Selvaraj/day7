import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from API
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        setPosts(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false); // Set loading to false even in case of an error
      });
  }, []);

  return (
    <section>
      <h1>Fetching Data from JSON Placeholder API</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <>
          <h2>Posts:</h2>
          <ol>
            {posts.map((data) => (
              <li key={data.id}>{data.title}</li>
            ))}
          </ol>
        </>
      )}
    </section>
  );
};

export default UseEffect;
