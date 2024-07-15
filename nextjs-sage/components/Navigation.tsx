import React from "react"
import styled from "styled-components"
import theme from '../styles/theme.module.scss'
import { HomeIcon} from './HomeIcon'
 

const NavContainer = styled.div`
    & > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    };
    color: ${theme.purple};
    width: 100%;
    font-size: 16px;
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: 0;
`;
const NavIndicator = styled.div.attrs<{$current?: boolean, $home: boolean}>(props => props)`
    width: ${props => props.$home ? "14px" : "7px"};
    height: ${props => props.$home ? "15px" : "7px"};
    ${props => !props.$home && "border-radius: 6px; margin: 8px; background-color: " + theme.purple + (props.$current ? "" : "B5")};
    ${props => props.$home && "color: " + theme.purple + (props.$current ? "" : "B5")}


`;


interface NavigationProps {
    current: string;
    setCurrent: (c: string) => void;
    screens: string[];
}
export const Navigation: React.FC<NavigationProps> = ({current, setCurrent, screens}) => {
    const index = screens.indexOf(current);
    return (
        <>
            <NavContainer>
                <div>
                    <NavIndicator onClick={() => setCurrent(screens[(index+2)%3])} $home={screens[(index+2)%3] === "Home"}>{screens[(index+2)%3] === "Home" && <HomeIcon color={theme.purple + "B5"}/>}</NavIndicator>
                    <NavIndicator $current  $home={current === "Home"}>{current === "Home" && <HomeIcon color={theme.purple}/>}</NavIndicator>
                    <NavIndicator onClick={() => setCurrent(screens[(index+1)%3])} $home={screens[(index+1)%3] === "Home"}>{screens[(index+1)%3] === "Home" && <HomeIcon color={theme.purple + "B5"}/>}</NavIndicator>
                </div>
                {current}
            </NavContainer>
        </>
    )
}