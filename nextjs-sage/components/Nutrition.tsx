import { FloatingBox } from "./FloatingBox";
import { RatioBar } from "./RatioBar";
import theme from '../styles/theme.module.scss'

interface NutritionProps {
    identity: any;
}

export const Nutrition: React.FC<NutritionProps> = ({identity}) => {
    return (
        <div>
            <h1>
                My Nutrition
            </h1>
            <FloatingBox>
                <RatioBar ratio={{
                    item1: {name: "Sodium", color: theme.green }, 
                    item2: {name: "Potassium", color: theme.purple}, 
                    min: 0.6, 
                    max: 0.8
                }} current={1} />
            </FloatingBox>
        </div>
    )
}