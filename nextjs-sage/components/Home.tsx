import { FloatingBox } from "./FloatingBox";

interface HomeProps {
    identity: any;
}

export const Home: React.FC<HomeProps> = ({identity}) => {
    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <p>
                {identity.userDetails}
            </p>
        <FloatingBox>{identity.userId}</FloatingBox>
        </div>
    )
}