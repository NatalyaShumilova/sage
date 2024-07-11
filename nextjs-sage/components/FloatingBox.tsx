import React, { ReactNode } from "react"
import styled from "styled-components"
import theme from '../styles/theme.module.scss'


const StyledDiv = styled.div`
    background: ${theme.light}; 
    border-radius: ${theme.radius};
    box-shadow: ${theme.shadow};
    padding: 10px 20px;
    `;

export const FloatingBox: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>  
    )
}