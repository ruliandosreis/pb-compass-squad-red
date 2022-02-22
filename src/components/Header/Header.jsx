import React from 'react';
import { Clock } from '../Clock/Clock';
import { Weather } from '../Weather/Weather';

export const NavBar = () => {
    return (
        <>
            <div>
                <Weather/>
                <Clock/>
            </div>
        </>
    );
};
