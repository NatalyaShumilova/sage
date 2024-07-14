import { FloatingBox } from "./FloatingBox";

interface NutritionProps {
    identity: any;
}

export const Nutrition: React.FC<NutritionProps> = ({identity}) => {
    return (
        <div>
            <h1>
                My Nutrition
            </h1>
            <p>
                {identity.userDetails}
            </p>
        <FloatingBox>{identity.userId}</FloatingBox>
        </div>
    )
}