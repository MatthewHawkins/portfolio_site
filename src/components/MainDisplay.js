/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

import Intro from './sections/Intro';
import About from './sections/About';
import Contact from './sections/Contact';


function MainDisplay(props) {

    const bodyStyles = css`
        margin-left: 300px;

        @media screen and (max-width: 480px) {
            margin-left: 0px;
        }
    `;

    return (
        <div css={bodyStyles}>
            <Intro />
            <About />
            <Contact />
        </div>
    );
}

export default MainDisplay;