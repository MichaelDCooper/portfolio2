import React, { useState } from "react";
import { Divider, Grid, Header, List } from "semantic-ui-react";
import GithubActivity from "./GithubActivity";
import github from "../github";

const Projects = () => {
  const [defaultGit, updateGit] = useState("Loading...");

  const getGithub = async () => {
    const gitResponse = await github.get("/users/MichaelDCooper/events/public");
    console.log(gitResponse.data);
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
      <Grid stackable columns={2}>
        <Grid.Column textAlign="left">
          <Header textAlign="left" as="h3">
            Portfolio Site (Meta):
          </Header>
          <List as="ol">
            <List.Item as="li" value="-">
              React App using only functional components (Hooks, Context)
            </List.Item>
            <List.Item as="li" value="-">
              Implemented Axios to fetch Github data from Github API
            </List.Item>
            <List.Item as="li" value="-">
              Implemented EmailJs to allow for fully functional Contact Form
            </List.Item>
            <List.Item as="li" value="-">
              Used Sematic UI React, Google Font Libary, and Custom CSS to allow
              for consistent styling
            </List.Item>
            <List.Item as="li" value="-">
              Deployment/CI from Zeit using Now CLI
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column textAlign="left">
          <Header textAlign="left" as="h3">
            My Budget:
            <a href="https://my-budge-client.now.sh/" target="_blank">
              {" "}
              Link
            </a>
          </Header>
          <List as="ol">
            <List.Item as="li" value="-">
              React App using only functional components (Hooks, Context)
            </List.Item>
            <List.Item as="li" value="-">
              Used ChartJs for reactive data visualizations.
            </List.Item>
            <List.Item as="li" value="-">
              Implemented Formik to handle over 20 user-generated data points.
            </List.Item>
            <List.Item as="li" value="-">
              Custom form input validation, and data formatting.
            </List.Item>
            <List.Item as="li" value="-">
              Deployment/CI from Zeit using Now CLI
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>

      <Divider />
      <h2 className="ui left aligned header">Github Activity:</h2>
      <GithubActivity />
      <div>{defaultGit}</div>
    </div>
  );
};

export default Projects;
