import styles from '../styles/ratiobar.module.scss'

const getWidth = (current: number, idealMax: number, idealMin: number) => {
    if (current > idealMax) {
        const percentage = (current - idealMax) / idealMax 
        return `${50 + Math.round(percentage*50)}%`
    }
    if (current < idealMin) {
        const percentage = (current - idealMin/2) / (idealMin/2) 
        return `${Math.round(percentage*50)}%`
    }
    return "50%";
    
}

interface RatioBarProps {
    ratio: {
        min: number;
        max: number
        item1: {
            name: string;
            color: string;
        }
        item2: {
            name: string;
            color: string;
        }
    };
    current: number;
}

export const RatioBar: React.FC<RatioBarProps> = ({ratio, current}) => {

    return (
        <div>
            <div className={styles.bar} style={{background: ratio.item2.color}} >
                <div data-testid="bar" style={{width: getWidth(current, ratio.max, ratio.min), background: ratio.item1.color}}/>
            </div>
            <div className={styles.labels}>
                <p>{ratio.item1.name}</p>
                <p>{ratio.item2.name}</p>
            </div>
        </div>
    )
}