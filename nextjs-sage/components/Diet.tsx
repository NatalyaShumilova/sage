import { FloatingBox } from "./FloatingBox";
import { FoodGroup } from "./FoodGroup";

interface DietProps {
    identity: any;
}

export const Diet: React.FC<DietProps> = ({identity}) => {
    return (
        <div>
            <h1>
                My Diet
            </h1>
        <FloatingBox>
            <h2>Meat</h2>
            <FoodGroup 
            group={{
                name: "Fish", 
                foods: [
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2},
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2},
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2},
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2}]}} 
            />
            <FoodGroup group={{
                name: "Fish", 
                foods: [
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2},
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2},
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2},
                    {Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2}]}} 
                />
        </FloatingBox>
        </div>
    )
}