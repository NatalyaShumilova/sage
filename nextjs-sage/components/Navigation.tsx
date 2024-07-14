import React from "react"
import styled from "styled-components"
import theme from '../styles/theme.module.scss'
 

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
    position: absolute:
    bottom: 10px;
    left: 0;
`;
const NavIndicator = styled.div.attrs<{$current: boolean, $home: boolean}>(props => props)`
    width: ${props => props.$current ? "12px" : "8px"};
    height: ${props => props.$current ? "12px" : "8px"};
    margin: 8px;
    ${props => !props.$home && "border-radius: 6px; background-color: " + theme.purple};
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