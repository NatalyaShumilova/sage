import { useState } from "react"
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

const screens = ["Dashboard", "My Diet", "My Nutrition"]

export const Navigation = () => {
    const [current, setCurrent] = useState("Dashboard");

    return (
        <>
            <NavContainer>
                <div>
                    	{screens.map(s => <NavIndicator onClick={() => setCurrent(s)} $current={s === current} $home={s === "Dashboard"} />)}
                </div>
                {current}
            </NavContainer>
        </>
    )
}