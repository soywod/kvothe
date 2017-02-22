import React from 'react';

import { tone } from '../shared/style';
import { modes } from '../../../../types/Tone';

export class ModeSelection extends React.Component {
    componentWillMount() {
        this.setState({
            mode: null,
        });
    }

    onClick(mode) {
        this.props.onSelectMode(mode);
        this.setState({mode});
    }

    modesTpl() {
        return modes.map(mode => {
            return (
                <button key={mode.id}
                        type="button"
                        className={'btn btn-secondary' + (this.state.mode && this.state.mode.id === mode.id ? ' active' : '')}
                        style={tone.button}
                        onClick={this.onClick.bind(this, mode)}>
                    {mode.label}
                </button>
            );
        })
    }

    render() {
        return (
            <div className={tone.className.column}>
                <div className="btn-group" style={tone.buttonGroup}>
                    {this.modesTpl()}
                </div>
            </div>
        );
    }
}

ModeSelection.propTypes = {
    onSelectMode: React.PropTypes.func
};
