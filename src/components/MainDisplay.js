/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

import Intro from './sections/Intro';
import About from './sections/About';


function MainDisplay(props) {

    const bodyStyles = css`
        margin-left: 300px;
    `;

    return (
        <div css={bodyStyles}>
            <Intro />
            <About />
        </div>
    );
}

export default MainDisplay;