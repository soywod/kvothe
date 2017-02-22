import React from 'react';

import { tone } from '../shared/style';
import { alterations } from '../../../../types/Tone';

export class AlterationSelection extends React.Component {
    componentWillMount() {
        this.setState({
            alteration: null,
        });
    }

    onClick(alteration) {
        this.props.onSelectAlteration(alteration);
        this.setState({alteration});
    }

    alterationsTpl() {
        return alterations.map(alteration => {
            return (
                <button key={alteration.id}
                        type="button"
                        className={'btn btn-secondary' + (this.state.alteration && this.state.alteration.id === alteration.id ? ' active' : '')}
                        style={tone.button}
                        onClick={this.onClick.bind(this, alteration)}>
                    {alteration.label}
                </button>
            );
        })
    }

    render() {
        return (
            <div className={tone.className.column}>
                <div className="btn-group" style={tone.buttonGroup}>
                    {this.alterationsTpl()}
                </div>
            </div>
        );
    }
}

AlterationSelection.propTypes = {
    onSelectAlteration: React.PropTypes.func
};
