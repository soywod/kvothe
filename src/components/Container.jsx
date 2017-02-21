import React from 'react';
import { Nav } from './navigation/Nav';

export class Container extends React.Component {
    render() {
        return (
            <div>
                <Nav />

                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
