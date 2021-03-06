/** @jsxImportSource @emotion/react */

import React from 'react';

import { css, keyframes } from '@emotion/react';

import AnimatedButton from '../AnimatedButton';

import img1 from '../../images/OSU_Weatherford_3.jpg'
import img2 from '../../images/0001.jpg'
import resume from '../../images/Updated_Resume.pdf'



function About(props) {

    const bodyStyles = css`
        display: flex;
        height: 100vh;
        align-items: center;
        font-family: 'Titillium Web', sans-serif;
        position: relative;

        @media screen and (max-width:480px) {
            flex-direction: column;
            text-align: center;
            margin-top: 50px;
        }
    `;

    const leftStyles = css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        position: relative;
        height: 100%;

        @media screen and (max-width:480px) {
            width: 100%;
        }

    `;

    const imageBackgroundStyles = css`
        position: absolute;
        top: 50px;
        left: 50px;
        background-color: gray;
        width: 50%;
        height: 60vh;
        border-radius: 30px;

        @media screen and (max-width:480px) {
            display: none;
        }

    
    `;

    const imageContainerStyles = css`
        width: 50%;
        height: 60vh;
        position: relative;

        @media screen and (max-width:480px) {
            display: flex;
            justify-content: end;
            margin-top: 100px;
            height: 30vh;
        }
    `;

    const imageStyles = css`
        width: 100%;
        height: 100%;
        margin-left: -80px;
        margin-top: -60px;
        border-radius: 30px;
        object-fit: cover;

        @media screen and (max-width:480px) {
            margin-left: 0px;
            margin-top: -100px;
        }
    `;







    const rightStyles = css`
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        height: 100%;
        flex: 1;
        position: relative;

        @media screen and (max-width:480px) {
            margin-top: -150px;
            padding: 20px;
        }        
    `;


    const aboutWrapperStyles = css`
        height: 70%;
    `;

    const aboutTitleStyles = css`
        margin-bottom: 50px;
        font-weight: bold;
        @media screen and (max-width:480px) {
            display: none;
        } 
    `;

    const aboutTextStyles = css`
        margin-bottom: 30px;
    
    `;

    const resumeContainerStyles = css`
        display: flex;
        justify-content: space-between;
    `;


    const resumePreviewStyles = css`
        width: 120px;
        height: 120px;
        border: 1px solid lightgrey;
        margin-top: 20px;
    `;

    const resumeTextContainerStyles = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 75%;
        margin-top: 20px;
    `;

    const resumeTitleStyles = css`
        font-weight: bold;
        color: gray;
    `;

    const buttonStyles = css`
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-left: -20%;
    `;



    const scrollStyles = css`
        margin-left: 50%;
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 20px;

        @media screen and (max-width:480px) {
            display: none;
        } 
    `;


    return (
        <div id='about' css={bodyStyles}>
            <div css={leftStyles}>
                <div css={imageBackgroundStyles}></div>
                <div css={imageContainerStyles}>
                    <img 
                        css={imageStyles}
                        src={img1}
                    ></img> 
                </div>
            </div>
            <div css={rightStyles}>
                <div css={aboutWrapperStyles}>
                    <h1 css={aboutTitleStyles} > About Me</h1>
                    <p css={aboutTextStyles} >
                        Currently, I'm finishing up school and working as a TA and undergraduate research 
                        assistant. As a TA, I teach labs and create instructional material for introductory collegiate CS
                        courses. When not studying or teaching directly, I work with a computer science education research 
                        team headed by Jennifer Parham-Mocello, focusing on creation and implementation of middle school 
                        computer science curriculum. 
                    </p>
                    <p css={aboutTextStyles} >
                        Outside of work and school, I enjoy exploring the Pacific Northwest (even when it's raining),  
                        staying active, and playing music, and planning my next trip to a new place.
                    </p>
                    <div id='resume' css={resumeContainerStyles} >
                        <img src={img2} css={resumePreviewStyles}></img>
                        <div css={resumeTextContainerStyles}>
                            <h4 css={resumeTitleStyles} >Resume</h4>
                            <p>For a more in-depth set of job descriptions, language proficiencies and educational qualifications, feel free to download my resume! </p>
                            <a href={resume} download css={buttonStyles}>
                                <AnimatedButton text='DOWNLOAD'  />
                            </a>
                        </div>
                    </div>
                </div>
                <svg css={scrollStyles}
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                        fill="none"
                        stroke="black"
                        className="i-scroll"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="scroll">
                            <path
                            id="Vector"
                            d="M40.5 15L34.5 9L28.5 15"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            id="Vector_2"
                            d="M28.5 24L34.5 30L40.5 24"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <g id="Group">
                            <path
                                id="Vector_3"
                                d="M9 37.5H60"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            </g>
                            <path
                            id="Vector_4"
                            d="M34.5 27V9"
                            stroke-width="2.9895"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <g id="Group_2">
                            <path
                                id="Vector_5"
                                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            </g>
                        </g>
                </svg>
            </div>
        </div>
    );
}

export default About;