import { FloatingBox } from "./FloatingBox";

interface DietProps {
    identity: any;
}

export const Diet: React.FC<DietProps> = ({identity}) => {
    return (
        <div>
            <h1>
                My Diet
            </h1>
            <p>
                {identity.userDetails}
            </p>
        <FloatingBox>{identity.userId}</FloatingBox>
        </div>
    )
}