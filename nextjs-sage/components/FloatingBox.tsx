import React, { ReactNode } from "react"
import styles from '../styles/floatingbox.module.scss'

export const FloatingBox: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className={styles.floatingbox}>
            {children}
        </div>  
    )
}