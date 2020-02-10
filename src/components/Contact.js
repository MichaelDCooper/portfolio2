import React from "react";
import { Formik, Form, Field } from "formik";
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
      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "", message: "" }}
        onSubmit={(values, actions) => {
          sendEmail(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        <Form className="ui form">
          <div className="equal width fields">
            <div className="field">
              <label>Email:</label>
              <Field
                className="ui fluid input"
                type="email"
                name="email"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <label>First Name:</label>
              <Field
                className="ui fluid input"
                type="text"
                name="firstName"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <label>Last Name:</label>
              <Field
                className="ui fluid input"
                type="text"
                name="lastName"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="field">
            <label>Message:</label>
            <Field
              className="ui fluid input"
              rows="17"
              as="textarea"
              multiline="true"
              name="message"
            />
            <div className="field">
              <button className="ui button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const sendEmail = ({ email, firstName, lastName, message }) => {
  let template_params = {
    from_name: firstName + " " + lastName,
    from_email: email,
    user_message: message
  };

  emailjs
    .send(
      "gmail",
      "portfolio_site_template",
      template_params,
      "user_dVffXz8WGqtAVC99WwBni"
    )
    .then(
      result => {
        alert("Message Sent!");
      },
      error => {
        console.log(error.text);
      }
    );
};

export default Contact;
