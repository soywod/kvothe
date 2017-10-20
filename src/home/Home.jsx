// @flow

import React from 'react'
import {Link} from 'react-router'
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

function Home() {
  return (
    <div>
      <h1>The composer assistant</h1>

      <p className="lead">
        Kvothe (pronounce « quote ») is a web app that tries to help composers.
        For now, it provides you only one tool : a <Link to="/scale-harmonizer">scale harmonizer</Link>.
        Many more tools will soon be available :)
      </p>

      <p className="lead mb-5">
        The project is open source, feel free to contribute either by{' '}
        <a href="https://github.com/soywod/kvothe" target="_blank">GitHub</a> or by{' '}
        <a href="mailto:clement.douin@gmail.com">contacting me</a>.
        If you find some bug, report <a href="https://github.com/soywod/kvothe/issues" target="_blank">here</a>.
      </p>

      <ListGroup>
        <ListGroupItem
          className="p-4 text-warning"
          tag={Link}
          to="/scale-harmonizer"
          style={styles.item}
        >
          <i className="fa fa-soundcloud mr-3" />
          Scale harmonizer
        </ListGroupItem>

        <ListGroupItem
          disabled
          className="p-4"
          tag={Link}
          to="/chord-harmonizer"
          style={styles.item}
        >
          <span style={styles.disabled}>
            <i className="fa fa-soundcloud mr-3" />
            Chord harmonizer (soon)
          </span>
        </ListGroupItem>

        <ListGroupItem
          disabled
          className="p-4"
          tag={Link}
          to="/randomizer"
          style={styles.item}
        >
          <span style={styles.disabled}>
            <i className="fa fa-random mr-3" />
            Randomizer (soon)
          </span>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

const styles = {
  item: {
    fontSize: "1.5em",
    fontWeight: 200,
  },
  disabled: {
    opacity: .35,
  },
}

export default Home
