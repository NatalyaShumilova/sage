import { AddFood } from './AddFood';
import { Food } from './Food';
import styles from '../styles/foodgroup.module.scss';

interface FoodGroupProps {
    group: {
        foods: Food[];
        name: string;
    }
}

export const FoodGroup: React.FC<FoodGroupProps> = ({group}) => {

    return (
        <div>
            <h2>{group.name}</h2>
            <div className={styles.scrollable}>
                {group.foods.map(f => <Food food={f} />)}
                <AddFood/>
            </div>
        </div>
    )
}