import React, { ReactNode } from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
    background: #ffffff; 
    border-radius: 5px;
    box-shadow: 1px 4px 8px 0 #89BF8F33;
    padding: 10px 20px;
    `;

export const FloatingBox: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>  
    )
}