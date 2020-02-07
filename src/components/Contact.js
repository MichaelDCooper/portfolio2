import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2 className="ui left aligned header">Contact</h2>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <p>
              It's my goal to be available for everyone. If you have a question,
              want to reach out about a cool project, or just want to say hello,
              please feel free to send me an email.
            </p>
          </Grid.Column>
          <Grid.Column>
            FIX This
            <div className="">
              <p>Email: mcooper628@gmail.com</p>
              <p>
                Github: <Link>Github.com/MichaelDCooper</Link>
              </p>
              <p>LinkedIn: LinkedIn.con/IN/MCooper51</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Contact;
