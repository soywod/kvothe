import React from 'react';
import { Link } from 'react-router';
import { Badge, Button } from 'reactstrap';

import Scale from '../../model/Scale.class';
import label from '../../helpers/label';

const Mode = props => (
  <Button
    tag={Link}
    to={`/harmonizer/${props.mode.note.name}/${props.mode.note.alt}/${props.mode.getName() || props.mode.formula}`}
    style={styles.button}>
    <div>
      {props.mode.notes
        .map((note, index) => (
          <Badge key={index} color="primary" style={styles.badge}>
            {label(note.name)}
            <sub>{label(note.alt)}</sub>
          </Badge>
        ))
      }

      <Badge color="default" className="float-right">
        {label(props.mode.note.name)}
        <sub>{label(props.mode.note.alt)}</sub>
        {' '}
        {label(props.mode.getName()) || '... ?'}
      </Badge>
    </div>
  </Button>
);

Mode.propTypes = {
  mode: React.PropTypes.instanceOf(Scale).isRequired,
};

const styles = {
  badge : {
    marginRight: 2
  },
  button: {
    width    : '100%',
    height   : 40,
    textAlign: 'left',
    boxSizing: 'border-box',
    padding  : '10px 15px',
    margin   : 2
  }
};

export default Mode;
