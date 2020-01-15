import React from "react";
import { Divider } from "semantic-ui-react";
import github from "../github";

const getGithub = async () => {
  const response = await github.get("/users/MichaelDCooper/events/public");

  //TODO this is filtering the events recieved from github. Make this better
  for (let i = 0; i < 15; i++) {
    const data = response.data[i];
    //this will filter commits
    if (data.payload.commits) {
      console.log(data.payload.commits[0].message);
    } else if (data.repo.name) {
      console.log(data);
    }

    if (!data.commits) {
      console.log(data);
    }

    //console.log(response.data[i].payload.commits[i].message);
    //console.log(data);
  }
};

const Projects = () => {
  getGithub();
  return (
    <div>
      <h2>Projects and Repositories</h2>
      <p>
        Below I've highlighted a few ongoing projects that are in constant
        development, as well as a live feed of my Github
      </p>
      <Divider />
      <h2>Github Activity:</h2>
    </div>
  );
};

export default Projects;
