import React from "react";
import { Formik, Field } from "formik";
import emailjs from "emailjs-com";

import { Grid, List } from "semantic-ui-react";

const Contact = () => {
  return (
    <div>
      <h2 className="ui left aligned header">Contact</h2>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <p>
              It's my goal to be available to everyone. If you have a question,
              want to reach out about a cool project, or just want to say hello,
              please feel free to send me an email, add me on LinkedIn, etc.
            </p>
          </Grid.Column>
          <Grid.Column>
            <List divided relaxed>
              <List.Item>
                <List.Icon
                  name="mail outline"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="p">
                    Email: <a>mcooper628@gmail.com</a>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="p">
                    Github:
                    <a href="https://github.com/MichaelDCooper" target="_blank">
                      {" "}
                      MichaelDCooper
                    </a>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="linkedin"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="p">
                    LinkedIn:
                    <a
                      href="https://www.linkedin.com/in/michaelcooper51/"
                      target="_blank"
                    >
                      {" "}
                      MichaelCooper51
                    </a>
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Formik initialValues={{ email: "", name: "", message: "" }}>
        <Field type="email" name="email"></Field>
        {/* <Field type="text" name="name"></Field> */}
        {/* <Field as="textarea" type="text" name="message"></Field> */}
      </Formik>
    </div>
  );
};

export default Contact;
