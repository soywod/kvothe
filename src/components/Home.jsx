import React from 'react';
import { Link } from 'react-router';
import { Badge, Button, Col, Row } from 'reactstrap';

const Home = props => (
  <div>
    <h1>
      <i className="fa fa-magic icon-left text-info"/>
      The composer assistant
    </h1>

    <p className="lead">
      Kvothe (pronounce « quote ») is a web app that tries to help composers.
      For now, it provides you only one tool : a <Link to="/harmonizer">Harmonizer</Link>.
      Many more tools will soon be available :)
    </p>

    <p className="lead">
      The project is open source, feel free to contribute either by{' '}
      <a href="https://github.com/soywod/kvothe" target="_blank">GitHub</a> or by{' '}
      <a href="mailto:clement.douin@gmail.com">contacting me</a>.
      If you find some bug, report <a href="https://github.com/soywod/kvothe/issues" target="_blank">here</a>.
    </p>

    <hr className="my-3"/>

    <Row>
      <Col md="6" sm="12">
        <Button to="/harmonizer" tag={Link} style={styles.tool}>
          <h3>
            <i className="fa fa-soundcloud icon-left text-warning"/>
            Harmonizer
          </h3>
        </Button>
      </Col>

      <Col md="6" sm="12">
        <Button to="/" disabled tag={Link} style={styles.tool}>
          <h3>
            <span>
              <i className="fa fa-random icon-left text-danger"/>
              Randomizer{' '}
            </span>
            <span className="text-muted">(soon)</span>
          </h3>
        </Button>
      </Col>
    </Row>

    <hr className="my-3"/>

    <h5>New content :</h5>

    <ul>
      <li>
        Optimized the <Link to="/harmonizer">Harmonizer tool</Link> + added animations
      </li>
    </ul>

    <hr className="my-3"/>

    <h5>Coming soon :</h5>

    <ul>
      <li>An random note generator</li>
      <li>Possibility to create a custom scale in the Harmonizer</li>
      <li>Integrate a scale / chord player</li>
    </ul>
  </div>
);

const styles = {
  tool: {
    width: '100%',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default Home;
