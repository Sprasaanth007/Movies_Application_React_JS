import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        process.env.REACT_APP_API_KEY
      }&page=${page.toString()}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <h2 className="page-title">Trending</h2>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              rating={c.vote_average}
            />
          ))}
        <CustomPagination setPage={setPage} NumOfPages={10} />
      </div>
    </div>
  );
};

export default Trending;
