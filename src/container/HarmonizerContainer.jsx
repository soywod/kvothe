// @flow

import React from 'react';

class HarmonizerComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <i className="fa fa-soundcloud icon-left text-warning"/>
          Harmonizer
        </h1>

        {this.props.children}
      </div>
    );
  }
}

export default HarmonizerComponent;
