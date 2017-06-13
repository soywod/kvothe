// @flow

import React from 'react';
import {
  Badge,
  Card,
  CardBlock,
  CardTitle,
  CardText,
  CardSubtitle,
} from 'reactstrap';

import Scale from '../scale/Scale.class';
import label from '../helpers/label';

class ScaleListItem extends React.Component {
  render() {
    return (
      <div style={styles.mode}>
        {this.props.mode.intervals
          .map((degree, index) => (
            <div key={index} style={styles.container}>
              <div style={styles.note}>
                {degree === null
                  ? <span className="text-muted">-</span>
                  : (
                    <Badge color={this.props.color} key={index} style={styles.badge}>
                      {label(this.props.mode.notes[index].name)}
                      <sub>{label(this.props.mode.notes[index].alt)}</sub>
                    </Badge>
                  )
                }
              </div>
              <div className="text-muted" style={styles.note}>
                {label(`degree-${index}`)}
              </div>
            </div>
          ))
        }
      </div>
    );
  } 
}

ScaleListItem.propTypes = {
  mode: React.PropTypes.instanceOf(Scale).isRequired,
  color: React.PropTypes.string,
};

const styles = {
  mode     : {
    display: 'flex',
    width  : '100%'
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
  container: {
    flex         : 1,
    display      : 'flex',
    flexDirection: 'column',
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

