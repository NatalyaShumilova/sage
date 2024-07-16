import { FloatingBox } from "./FloatingBox";
import { Food } from "./Food";

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
            <Food food={{Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2}} />
            <Food food={{Name: "Salmon", Icon: "/Salmon.png", ServingSize: 200, ServingsPerCycle: 2}} />

        </FloatingBox>
        </div>
    )
}