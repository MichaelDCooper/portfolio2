import React, { useState, useEffect } from "react";
import { List } from "semantic-ui-react";
import axios from "axios";

// export default axios.create({
//   baseURL: "https://api.github.com",
//   timeout: 1000
// });

const GithubActivity = () => {
  //const [data, setData] = useState({ hits: [] });
  const [git, setGit] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const git = await axios(
        "https://api.github.com/users/MichaelDCooper/events/public"
      );
      // const result = await axios(
      //   "https://hn.algolia.com/api/v1/search?query=linux"
      // );

      console.log(git.data);
      setGit(git);
      //setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <List divided relaxed>
        {git.data.map(item => (
          <List.Item key={item.id}>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header
                as="a"
                href={"https://github.com/" + item.repo.name}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.repo.name}
              </List.Header>
              <List.Description as="a">
                {item.type + " Updated: " + item.created_at}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default GithubActivity;

// {/* <ul>
// {/* {console.log(data.hits)} */}
// {data.hits.map(item => (
//   <li key={item.objectID}>
//     <a href={item.url}>{item.title}</a>
//   </li>
// ))}
// </ul>
// <ul> */}
