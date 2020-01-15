import React from "react";
import { Divider } from "semantic-ui-react";
import github from "../github";

const getGithub = async () => {
  const response = await github.get("/users/MichaelDCooper/events/public");
  console.log(response);
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
      <h2>Github Feed:</h2>
    </div>
  );
};

export default Projects;
