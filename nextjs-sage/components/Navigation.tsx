import React from "react"
import styles from '../styles/navigation.module.scss'
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
            <div className={styles.navContainer}>
                <div>
                    <div 
                    onClick={() => setCurrent(screens[(index+2)%3])} 
                    className={screens[(index+2)%3] === "Home" ? styles.homeIndicator : styles.indicator}
                    >
                        {screens[(index+2)%3] === "Home" && <HomeIcon color={theme.purple75}/>}
                    </div>
                    <div className={current === "Home" ? styles.homeIndicator : (styles.indicator +" "+ styles.current)}>
                        {current === "Home" && <HomeIcon color={theme.purple}/>}
                    </div>
                    <div 
                    onClick={() => setCurrent(screens[(index+1)%3])} 
                    className={screens[(index+1)%3] === "Home" ? styles.homeIndicator : styles.indicator}
                    >
                        {screens[(index+1)%3] === "Home" && <HomeIcon color={theme.purple75}/>}
                    </div>
                </div>
                {current}
            </div>
    )
}