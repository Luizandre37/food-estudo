import React from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import {LinkArea, LinkIcon } from './styled';

export default ({icon,link}) => {
    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link;

     const handleLinClick = (e) => {
     e.preventDefault();
     history.push(link)
    }

    return(
        <LinkArea active={isActive} href={link} onClick={handleLinClick}>
        <LinkIcon src={icon} />
        </LinkArea>


    );
}