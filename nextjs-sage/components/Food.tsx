
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
            <img src={food.Icon}/>
            {food.Name}
            {food.ServingSize * food.ServingsPerCycle}g
        </div>
    )
}