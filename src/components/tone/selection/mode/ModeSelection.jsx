import React from 'react';

import { style } from '../shared/style';
import { Mode } from '../../../../types/Mode';

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
        return Object.keys(Mode).map(key => {
            return (
                <button key={key}
                        type="button"
                        className={'btn btn-secondary' + (this.state.mode && this.state.mode === key ? ' active' : '')}
                        style={style.button}
                        onClick={this.onClick.bind(this, key)}>
                    {Mode[key]}
                </button>
            );
        })
    }

    render() {
        return (
            <div className={style.className.column}>
                <div className="btn-group" style={style.buttonGroup}>
                    {this.modesTpl()}
                </div>
            </div>
        );
    }
}

ModeSelection.propTypes = {
    onSelectMode: React.PropTypes.func
};
