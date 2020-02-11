import React, { useState, useEffect } from "react";
import axios from "axios";

// export default axios.create({
//   baseURL: "https://api.github.com",
//   timeout: 1000
// });

const GithubActivity = () => {
  const [data, setData] = useState({ hits: [] });
  const [git, setGit] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const git = await axios(
        "https://api.github.com/users/MichaelDCooper/events/public"
      );
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=linux"
      );

      //console.log(git.data, result.data.hits);
      setGit(git);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {/* {console.log(data.hits)} */}
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

      <ul>
        {git.data.map(item => (
          <li key={item.id}>{item.type}</li>
        ))}
        {console.log(git.data)}
        <li>fuck</li>
      </ul>
    </div>
  );
};

export default GithubActivity;
