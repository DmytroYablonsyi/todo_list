import styles from "./style.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img src='https://cdn-icons-png.flaticon.com/128/8625/8625364.png' alt='todo icon'></img>
            <h1>Todolist</h1>
        </div>
    )
}

export default Header