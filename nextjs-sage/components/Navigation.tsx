import React, { useState } from "react"
import styled from "styled-components"
import theme from '../styles/theme.module.scss'
 

const NavContainer = styled.div`
    display: flex;
    & > div {
        flex-direction: row;
    };
    color: ${theme.purple};
    width: 100%;
    font-size: 16px;
`;
const NavIndicator = styled.div.attrs<{$current: boolean, $home: boolean}>(props => props)`
    width: ${props => props.$current ? "12px" : "8px"};
    height: ${props => props.$current ? "12px" : "8px"};
    border-radius: 6px;
    margin: 8px;
    ${props => !props.$home && "background-color: " + theme.purple};
    ${props => props.$home && "background-image: url(HomeIcon.svg); background-size: contain;"}


`;


interface NavigationProps {
    current: string;
    setCurrent: (c: string) => void;
    screens: string[];
}
export const Navigation: React.FC<NavigationProps> = ({current, setCurrent, screens}) => {

    return (
        <>
            <NavContainer>
                <div>
                    	{screens.map(s => <NavIndicator onClick={() => setCurrent(s)} $current={s === current} $home={s === "Home"} />)}
                </div>
                {current}
            </NavContainer>
        </>
    )
}