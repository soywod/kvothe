import React from 'react';
import { Link } from 'react-router';

const style = {
    nav: {
        marginBottom: '45px'
    }
};

export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-sm navbar-light bg-faded" style={style.nav}>
                <Link className="navbar-brand" to="/">Achord</Link>

                <div className="navbar-collapse collapse">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/about">About</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
