import * as React from 'react';
import {
  Container,
  Jumbotron,
  Media
} from 'reactstrap';

export default class AboutPage extends React.Component {

  render() {
    return (
      <Jumbotron fluid>
        <Container fluid>
          <Media>
            <img className="d-flex align-self-center rounded mr-3"
              alt="kornicameister gravatar" src="https://s.gravatar.com/avatar/140db4c0a9767838be5a5289ad78eca6?s=120" />
            <Media body>
              <h5 className="mt-0">About me</h5>
              <div className="lead">
                <p>What to tell...I am a guy whose work is his pride.</p>
                <p>
                  I am always trying to push myself and others to try and see all
                    variables of the equation as for me there's no ideal solution.
                    There is no such thing as closed door that I wouldn't
                    try to open, the only problem is the time I need to unlock it.
                  </p>
                <p>
                  I am a person who believes in all the things he can touch, smell and see.
                    Raised to think for himself and to always fight for his beliefes.
                    Never to back down, because nobody will give me what I desire.
                  </p>
                <p>
                  There are few things that I consider most important in my life,
                    yet my wife and daughter happiness is one of those things.
                    Everything I ever accomplished and will accomplish is dedicated to them.
                  </p>
              </div>
            </Media>
          </Media>
        </Container>
      </Jumbotron>
    )
  }

}
