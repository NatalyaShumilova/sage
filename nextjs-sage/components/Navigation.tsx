import React from "react"
import styles from '../styles/navigation.module.scss'
import theme from '../styles/theme.module.scss'
import { HomeIcon} from './HomeIcon'


interface NavigationProps {
    current: string;
    setCurrent: (c: string) => void;
    screens: string[];
}

const getClassName = (s: string, current: string) => {
    if (s === "Home") {
        return styles.homeIndicator;
    }
    if (s === current) {
        return styles.indicator + " " + styles.current;
    }
    return styles.indicator;
    
}
export const Navigation: React.FC<NavigationProps> = ({current, setCurrent, screens}) => {
    return (
            <div className={styles.navContainer}>
                <div>
                    {screens.map(s => <div 
                    onClick={() => setCurrent(s)} 
                    className={getClassName(s, current)}
                    >
                        {s === "Home" && <HomeIcon color={s=== current ? theme.purple : theme.purple75}/>}
                    </div>)}
                </div>
                {current}
            </div>
    )
}