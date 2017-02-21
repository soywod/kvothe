import React from 'react';

const style = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '7.5px'
    },
    btnTone: {
        flex: 1,
    },
    btnHarmonize: {
        marginTop: '45px',
    }
};

export class ToneSelection extends React.Component {
    render() {
        return (
            <div>
                <div className="btn-group" style={style.container}>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>A</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>B</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>C</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>D</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>E</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>F</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>G</button>
                </div>

                <div className="btn-group" style={style.container}>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>&#9837;</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>&#9838;</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>&#9839;</button>
                </div>

                <div className="btn-group" style={style.container}>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>minor</button>
                    <button type="button" className="btn btn-secondary" style={style.btnTone}>major</button>
                </div>

                <div style={style.container}>
                    <button className="btn btn-lg btn-primary" style={style.btnHarmonize}>Let's harmonize &#9836;</button>
                </div>
            </div>
        );
    }
}
