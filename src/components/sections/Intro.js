/** @jsxImportSource @emotion/react */

import React from 'react';

import { css, keyframes } from '@emotion/react';

import image1 from '../../images/headshot_3.png'

function Intro(props) {

    const bodyStyles = css`
        display: flex;
        height: 100vh;
        font-family: 'Titillium Web', sans-serif;
    `;

    const leftStyles = css`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const leftWrapperStyles = css`
        padding: 50px;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;

    const introStyles = css`
        font-size: 2em;
        font-weight: 300;
    `;

    const nameStyles = css`
        font-size: 4em;
    `;

    const titleStyles = css`
        height: 50px;
        overflow: hidden;
    `;

    const titleAnimationKeyframes = keyframes`
        25%{
            transform: translateY(-50px);
        }
        50%{
            transform: translateY(-100px);
        }
        75%{
            transform: translateY(-150px);
        }
        100%{
            transform: translateY(-200px);
        }
    `;


    const titleAnimationStyles = css`
        height: 100%;
        animation: ${titleAnimationKeyframes} 10s ease-in-out infinite alternate;
    `;


    const titleItemStyles = css`
        display: flex;
        align-items: center;
        font-size: 2em;
        font-weight: bold;
        color: green;
        height: 50px;
    `;

    const descriptionStyles = css`

    `;






    const rightStyles = css`
        display: flex;
        flex: 1;
        position: relative;
        justify-content: end;
    `;

    const imageStyles = css`
        height: 100%;
        object-fit: cover;
        justify-self: end;
    `;
    const shapeStyles = css`
        /* https://bennettfeely.com/clippy/ */
        clip-path: polygon(100% 0%, 100% 48%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
        background-color: #121b26;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    `;

    const scrollStyles = css`
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 20px;
    `;

    return (
        <div css={bodyStyles}>
            <div css={leftStyles}>
                <div css={leftWrapperStyles}>
                    <h2 css={introStyles} >Hello, my name is </h2>
                    <h1 css={nameStyles} >Matthew Hawkins</h1>
                    <div css={titleStyles}>
                        <div css={titleAnimationStyles}>
                            <div css={titleItemStyles}>Web Developer</div>
                            <div css={titleItemStyles}>UI/UX Designer</div>
                            <div css={titleItemStyles}>OSU Alum</div>
                            <div css={titleItemStyles}>Teacher</div>
                            <div css={titleItemStyles}>Musician</div>
                        </div>
                    </div>
                    <p>
                    I'm a fourth-year computer science student at Oregon State University 
                    specializing in application development and computer science education.
                    </p>
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
            <div css={rightStyles}>
                <div css={shapeStyles}></div>
                {/* <img src={image1} css={imageStyles}></img> */}
            </div>
            
        </div>
    );
}

export default Intro;