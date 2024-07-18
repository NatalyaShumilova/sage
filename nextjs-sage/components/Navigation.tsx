import React from "react"
import '../styles/navigation.module.scss'
import theme from '../styles/theme.module.scss'
import { HomeIcon} from './HomeIcon'


interface NavigationProps {
    current: string;
    setCurrent: (c: string) => void;
    screens: string[];
}
export const Navigation: React.FC<NavigationProps> = ({current, setCurrent, screens}) => {
    const index = screens.indexOf(current);
    return (
        <>
            <div className="navContainer">
                <div>
                    <div 
                    onClick={() => setCurrent(screens[(index+2)%3])} 
                    className={screens[(index+2)%3] === "Home" ? "homeIndicator" : "indicator"}
                    >
                        {screens[(index+2)%3] === "Home" && <HomeIcon color={theme.purple75}/>}
                    </div>
                    <div className={current === "Home" ? "homeIndicator" : "indicator current"}>
                        {current === "Home" && <HomeIcon color={theme.purple}/>}
                    </div>
                    <div 
                    onClick={() => setCurrent(screens[(index+1)%3])} 
                    className={screens[(index+1)%3] === "Home" ? "homeIndicator" : "indicator"}
                    >
                        {screens[(index+1)%3] === "Home" && <HomeIcon color={theme.purple75}/>}
                    </div>
                </div>
                {current}
            </div>
        </>
    )
}