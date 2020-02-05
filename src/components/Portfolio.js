import React, { useState } from "react";
import { Divider } from "semantic-ui-react";
import github from "../github";

// const getGithub = async () => {
//   const response = await github.get("/users/MichaelDCooper/events/public");

//   updateGit(response.data);

//   //TODO this is filtering the events recieved from github. Make this better
//   // for (let i = 0; i < 5; i++) {
//   //   const data = response.data[i];
//   //   console.log(data);
//   //   //this will filter commits
//   //   // if (data.payload.commits) {
//   //   //   console.log(data.payload.commits[0].message);
//   //   // } else if (data.repo.name) {
//   //   //   console.log(data);
//   //   // }

//   //   // if (!data.commits) {
//   //   //   console.log(data);
//   //   // }

//   //   //console.log(response.data[i].payload.commits[i].message);
//   //   //console.log(data);
//   // }
// };

// {
//   /* <h4>Action</h4>
// <h3>Repo:</h3>
// <p>Some Info about what I did</p> */
// }

const Projects = () => {
  const [defaultGit, updateGit] = useState("Loading...");

  const getGithub = async () => {
    const gitResponse = await github.get("/users/MichaelDCooper/events/public");
    console.log(gitResponse.data);
    // updateGit(["nesting", "some", "data"]);
  };

  getGithub();

  return (
    <div>
      <h2 className="ui left aligned header">Projects and Repositories</h2>
      <p>
        Here you can find a few projects that are in constant devlopment, as
        well as a feed of my Github activity, so you can keep up to date with
        what I'm currently working on:
      </p>
      <Divider />
      <h2 className="ui left aligned header">Github Activity:</h2>
      <div>{defaultGit}</div>
    </div>
  );
};

export default Projects;
