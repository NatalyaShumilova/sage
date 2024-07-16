import styled from "styled-components"
import theme from '../styles/theme.module.scss'


const ImageContainer = styled.div.attrs<{$image: string}>(props => props)`
    width: 70px;
    margin: 5px;
    & div {
        box-shadow: inset 1px 4px 8px 0 ${theme.dark}1F;
        border-radius: ${theme.radius};
        width: 60px;
        height: 60px;
        background-image: url(${props => props.$image});
        background-size: cover;
        margin: auto;
    };
    & p {
        font-size: 12px;
        font-weight: lighter;
        text-align: center;
    }
    
`

interface FoodProps {
    food: {
        Name: string,
        ServingSize: number,
        ServingsPerCycle: number,
        Icon: string
    }
}

export const Food: React.FC<FoodProps> = ({food}) => {

    return(
        
            <ImageContainer $image={food.Icon}>
                <div/>
                <p>{food.Name}</p>
                <p>{food.ServingSize * food.ServingsPerCycle}g</p>
            </ImageContainer>
            
    )
}