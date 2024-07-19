import styles from '../styles/food.module.scss'

export interface Food
{
    Name: string,
    ServingSize: number,
    ServingsPerCycle: number,
    Icon: string
}

interface FoodProps {
    food: Food
}

export const Food: React.FC<FoodProps> = ({food}) => {

    return(
        <div className={styles.food}>
            <div style={{backgroundImage: `url(${food.Icon})`}}/>
            <p>{food.Name}</p>
            <p>{food.ServingSize * food.ServingsPerCycle}g</p>
        </div>
    )
}