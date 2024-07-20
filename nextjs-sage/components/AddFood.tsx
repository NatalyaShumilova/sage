import styles from '../styles/addfood.module.scss'

export const AddFood = () => {
    return (
        <div className={styles.addFood} onClick={() => console.log('call assembly!')}>
            <div>
                <img src="/Add.png"/>
            </div>
            <p>Add Food</p>
        </div>
    )
}