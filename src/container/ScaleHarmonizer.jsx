// @flow

import React from 'react';

class ScaleHarmonizerContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <i className="fa fa-soundcloud icon-left text-warning"/>
          Scale harmonizer
        </h1>

        {this.props.children}
      </div>
    );
  }
}

export default ScaleHarmonizerContainer;

