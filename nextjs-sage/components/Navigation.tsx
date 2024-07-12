import { useState } from "react"
import styled from "styled-components"
import theme from '../styles/theme.module.scss'
 

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const NavIndicator = styled.div.attrs<{$current: boolean, $home: boolean}>(props => props)`
    width: ${props => props.$current ? "6px" : "4px"};
    height: ${props => props.$current ? "6px" : "4px"};
    border-radius: 3px;
    background: ${theme.purple};

`;

const screens = ["Dashboard", "My Diet", "My Nutrition"]

export const Navigation = () => {
    const [current, setCurrent] = useState("Dashboard");

    return (
        <NavContainer>
            {screens.map(s => <NavIndicator onClick={() => setCurrent(s)} $current={s === current} $home={s === "Dashboard"} />)}
            {current}
        </NavContainer>
    )
}