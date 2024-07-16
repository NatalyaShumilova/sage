import styled from "styled-components"
import theme from '../styles/theme.module.scss'


const ImageContainer = styled.div.attrs<{$image: string}>(props => props)`
    box-shadow: inset 1px 4px 8px 0 ${theme.dark}1F;
    border-radius: ${theme.radius};
    width: 60px;
    height: 60px;
    background-image: url(${props => props.$image});
    background-size: fill;
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
        <div>
            <ImageContainer $image={food.Icon}/>
            {food.Name}
            {food.ServingSize * food.ServingsPerCycle}g
        </div>
    )
}