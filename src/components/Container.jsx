import React from 'react';

import { Nav } from './navigation/Nav';

export const Container = props => (
    <div>
        <Nav />

        <div className="container">
            {props.children}
        </div>
    </div>
);
