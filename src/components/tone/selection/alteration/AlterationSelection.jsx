import React from 'react';

import { style } from '../shared/style';
import { Alteration } from '../../../../types/Alteration';

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
        return Object.keys(Alteration).map(key => {
            return (
                <button key={key}
                        type="button"
                        className={'btn btn-secondary' + (this.state.alteration && this.state.alteration === key ? ' active' : '')}
                        style={style.button}
                        onClick={this.onClick.bind(this, key)}>
                    {Alteration[key]}
                </button>
            );
        })
    }

    render() {
        return (
            <div className={style.className.column}>
                <div className="btn-group" style={style.buttonGroup}>
                    {this.alterationsTpl()}
                </div>
            </div>
        );
    }
}

AlterationSelection.propTypes = {
    onSelectAlteration: React.PropTypes.func
};
