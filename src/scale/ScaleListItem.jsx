// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Button,
  Card,
  CardBlock,
  CardTitle,
  CardText,
  CardSubtitle,
} from 'reactstrap';

import Scale from '../scale/Scale.class';
import label from '../helpers/label';

type State = {
  isItemOpen: boolean;
};

type Props = {
  mode: Scale;
  color?: string;
};

class ScaleListItem extends React.Component {
  state: State = {
    isItemOpen: false,
  };

  toggleScale: (event: Event) => void;

  constructor(props: Props) {
    super(props);

    this.toggleScale = this.toggleScale.bind(this);
  }

  toggleScale(event: Event) {
    event.preventDefault();
    this.setState(({isItemOpen}) => ({isItemOpen: !isItemOpen}));
  }

  render() {
    return (
      <div style={styles.modeContainer}>
        <a href="#" className={`text-left no-underline text-${this.props.color || 'default'}`} onClick={this.toggleScale} style={styles.link}>
          <i className={`fa fa-caret-${this.state.isItemOpen ? 'down' : 'right'} icon-left`} style={styles.caret}/> 
          {label(this.props.mode.tone.name)}
          <sub>{label(this.props.mode.tone.alt)}</sub>{' '}
          {label(this.props.mode.formula)}
        </a>
        {this.state.isItemOpen ?
          <div style={styles.mode}>
            {this.props.mode.intervals
              .map((degree, index) => (
                <div key={index} style={styles.noteContainer}>
                  <div style={styles.note}>
                    {degree === null ?
                      <span className="text-muted">-</span>
                      :
                      <Badge color={this.props.color} key={index} style={styles.badge}>
                        {label(this.props.mode.notes[index].name)}
                        <sub>{label(this.props.mode.notes[index].alt)}</sub>
                      </Badge>
                    }
                  </div>
                  <div className="text-muted" style={styles.note}>
                    {label(`degree-${index}`)}
                  </div>
                </div>
              ))
            }
          </div> : null
        }
      </div>
    );
  } 
}

ScaleListItem.propTypes = {
  mode: PropTypes.instanceOf(Scale).isRequired,
  color: PropTypes.string,
};

const styles = {
  link: {
    padding: '5px 0',
  },
  caret: {
    width: 10,
  },
  modeContainer: {
    display: 'flex',
    flexDirection: 'column',
    width  : '100%'
  },
  mode     : {
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
  }
};

export default ScaleListItem;
