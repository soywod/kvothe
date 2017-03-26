import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash/fp';
import {
  Badge,
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import Scale from '../../model/Scale.class';
import label from '../../helpers/label';

const Mode = props => (
  <Card style={styles.card} color="secondary">
    <CardBlock>
      <CardTitle>
        {label(props.mode.note.name)}
        <sub>{label(props.mode.note.alt)}</sub>{' '}
        {label(props.mode.getName()) || '... ?'}
        <span className="float-right">
          {props.mode.notes
            .map((note, index) => (
              <Badge color="primary" key={index} style={styles.badge}>
              {label(note.name)}
                <sub>{label(note.alt)}</sub>{' '}
            </Badge>
            ))
          }
        </span>
      </CardTitle>
      <CardSubtitle className="text-muted">
        Mode {props.index}
      </CardSubtitle>
    </CardBlock>
    <ListGroup flush>
      <ListGroupItem>
        {props.mode.intervals
          .map((degree, index) => (
            <Badge key={index} style={styles.badge}>
              {label(`degree-${degree}`)}
            </Badge>
          ))
        }
      </ListGroupItem>
      <ListGroupItem>
        {_
          .concat(props.mode.intervals, props.mode.lastDegree)
          .reduce((intervals, degree, index) => {
            if (index === 0) return [];
            intervals.push(`step-${degree - props.mode.intervals[index - 1]}`);
            return intervals;
          }, [])
          .map((step, index) => (
            <Badge key={index} style={styles.badge}>
              {label(step)}
            </Badge>
          ))
        }
      </ListGroupItem>
    </ListGroup>
  </Card>
);

Mode.propTypes = {
  mode : React.PropTypes.instanceOf(Scale).isRequired,
  index: React.PropTypes.number.isRequired
};

const styles = {
  badge    : {
    marginRight: 2
  },
  card     : {
    marginBottom: 30
  },
  cardBlock: {
    width    : '100%',
    textAlign: 'left',
    boxSizing: 'border-box'
  }
};

export default Mode;
