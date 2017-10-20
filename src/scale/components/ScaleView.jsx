// @flow

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Badge,
  Button,
  Card,
  CardBlock,
  CardTitle,
  CardText,
  CardSubtitle,
} from 'reactstrap'

import Scale from '../model/Scale'
import Formula from '../../formula/model/Formula'
import label from '../../utils/label'

type State = {
  expanded: boolean;
};

type Props = {
  scale: Scale;
  color?: string;
  expanded?: boolean;
};

class ScaleView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      expanded: !! props.expanded,
    }
  }

  toggleScale = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }))
  }

  render() {
    const {scale, color} = this.props
    const {expanded} = this.state

    return (
      <div style={styles.scaleContainer}>
        <a href="#" className={`text-left no-underline text-${color || 'default'}`} onClick={this.toggleScale} style={styles.link}>
          <i className={`fa fa-caret-${expanded ? 'down' : 'right'} mr-2`} style={styles.caret}/> 
          {label(scale.tone.name)}
          <sub>{label(scale.tone.alt)}</sub>
          {' '}
          {label(scale.formula.id)}
        </a>

        {this.state.expanded &&
          <div style={styles.scale}>
            {scale.intervals.map((note, index) => (
              <div key={index} style={styles.noteContainer}>
                <div style={styles.note}>
                  {note
                    ? <Badge color={color} key={index} style={styles.badge}>
                      {label(note.name)}
                      <sub>{label(note.alt)}</sub>
                    </Badge>
                    : <span className="text-muted">-</span>
                  }
                </div>
                <div className="text-muted" style={styles.note}>
                  {label(`degree-${index}`)}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    )
  } 
}

const styles = {
  link: {
    padding: '5px 0',
  },
  caret: {
    width: 10,
  },
  scaleContainer: {
    display: 'flex',
    flexDirection: 'column',
    width  : '100%',
  },
  scale     : {
    display: 'flex',
    width  : '100%',
  },
  note     : {
    flex          : 1,
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    fontSize      : 12,
    marginTop     : 10,
  },
  degree   : {
    flex: 1
  },
  noteContainer: {
    flex         : 1,
    display      : 'flex',
    flexDirection: 'column',
    margin: '15px 0',
  },
  badge    : {
    width         : 32,
    height        : 32,
    borderRadius  : '50%',
    boxSizing     : 'border-box',
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    fontSize      : 16,
  },
}

export default ScaleView
