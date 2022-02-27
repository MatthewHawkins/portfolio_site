/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

import { Image } from 'react-bootstrap';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { grey } from '@mui/material/colors';

function Sidebar(props) {

    const bodyStyles = css`
        display: flex;
        flex-direction: column;
        font-family: 'Titillium Web', sans-serif;
        position: fixed;
        background-color: rgb(4,11,20);
        height: 100vh;
        width: 300px;

        @media screen and (max-width: 480px) {
            display: none;
        }
    `;

    const headerStyles = css`
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;

    const titleStyles = css`
        font-weight: bold;
        font-size: 1.5em;
        color: white;
        margin-bottom: 2vh;
    `;

    const imageStyles = css`
        height: 150px;
        width: 150px;
        border: 10px solid #2C2F3F;
        margin-top: 2.5vh;
        margin-bottom: 2vh;
    `;

    const iconContainerStyles = css`
        display: flex;
        flex-direction: row;        
    `;

    const iconStyles = css`
        background: #212431;
        padding: 5px;
        border-radius: 50%;
        margin-left: 5px;
        margin-right: 5px;
        transition:background .25s;
        &:hover{
            background: #109DDD;
        }
    `;

    const menuStyles = css`
        display: flex;
        flex-direction: column;
        flex: 2;
        margin-top: 35px;

    `;

    const menuItemStyles = css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4vh;
        color: grey;
        transition:color .25s;
        &:hover{
            color: white;
            .icon{
                color: #109DDD;
            }
        }
        text-decoration: none;
    `;
    
    const menuIconStyles = css`
        color: grey;
        transition: color .25s;
        &:hover{
            color: #109DDD;
        }
    `;
        
    const menuTextStyles = css`
        list-style-type: none;
        margin-left: 10px;
    `;

    const footerStyles = css`
        margin-top: auto;
        color: white;
        margin-left: 20px;
        margin-right: 20px;
        font-size: .85em;
        a{
            color: white;
        }
    `;

    return (
        <div css={bodyStyles}>
            <div css={headerStyles}>
                <Image css={imageStyles} roundedCircle src='https://media-exp1.licdn.com/dms/image/C4E03AQFljoM_H1quFw/profile-displayphoto-shrink_800_800/0/1580784421375?e=1651104000&v=beta&t=9JEXlUFEl88DH6I6i_DsNm4E5JsnGmW3OeW1TKrOeO0'/>
                <p css={titleStyles}>Matthew Hawkins</p>
                <div css={iconContainerStyles}>
                    <div css={iconStyles}>
                        <a href='https://www.facebook.com/matthew.hawkins.121' target="_blank"><FacebookIcon style={{color: "white"}} /></a>
                    </div>
                    <div css={iconStyles}>
                        <a href='https://www.instagram.com/mhawkins1115/' target="_blank"><InstagramIcon  style={{color: "white"}} /></a>
                    </div>
                    <div css={iconStyles}>
                        <a href='https://www.linkedin.com/in/matthew-hawkins-4272001a1/' target="_blank"><LinkedInIcon  style={{color: "white"}} /></a>
                    </div>
                    <div css={iconStyles}>
                        <a href='https://github.com/MatthewHawkins' target="_blank"><GitHubIcon  style={{color: "white"}} /></a>
                    </div>
                </div>
            </div>
            <ul css={menuStyles}>
                <a href='#home' css={menuItemStyles}>
                    <HomeOutlinedIcon className='icon' css={menuIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Home</li>
                </a>
                <a href='#about' css={menuItemStyles}>
                    <PersonOutlineOutlinedIcon className='icon' css={menuIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>About</li>
                </a>
                <a href='#resume' css={menuItemStyles}>
                    <FeedOutlinedIcon className='icon' css={menuIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Resume</li>
                </a>
                <a href='#contact' css={menuItemStyles}>
                    <EmailOutlinedIcon className='icon' css={menuIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Contact</li>
                </a>
            </ul>
            <p css={footerStyles}>Powered by <a href='https://reactjs.org/'>React</a><br></br> Styled with <a href='https://emotion.sh/docs/introduction'>Emotion</a><br></br>Source code on <a href="https://github.com/MatthewHawkins/portfolio_site">Github</a></p>
        </div>
    );
}

export default Sidebar;