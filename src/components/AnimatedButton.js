/** @jsxImportSource @emotion/react */

import React from 'react';

import { css, keyframes } from '@emotion/react';


function AnimatedButton(props) {

    const text = "TEST"
    
    const containerStyles = css`
        span{
            position: relative;
            display: inline-flex;
            width: 150px;
            height: 50px;
            perspective: 1000px;
        }

        span p{
            font-size: 1em;
            letter-spacing: 1px;
            transform-style: preserve-3d;
            transform: translateZ(-25px);
            transition: transform .25s;
        }

        span p:before,
        span p:after{
            position: absolute;
            content: attr(text);
            height: 50px;
            width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 5px solid black;
            box-sizing: border-box;
            border-radius: 5px;
        }

        span p:before{

            @media screen and (min-width: 480px) {
                transform: rotateY(0deg) translateZ(25px);
            }
            color: #fff;
            background: #000;
        }

        span p:after{

            @media screen and (min-width: 480px) {
                color: #000;
                transform: rotateX(90deg) translateZ(25px);
            }
        }

        span p:hover{
            @media screen and (min-width: 480px) {
                transform: translateZ(-25px) rotateX(-90deg);
            }
        }
    `;
    
    return (
        <div css={containerStyles}>
            <span><p text={props.text}></p></span>
        </div>
    );
}

export default AnimatedButton;