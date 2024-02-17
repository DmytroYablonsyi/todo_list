import styles from "./style.module.css"

const Item = ( {id, title, done, makeTodoDone, deleteTodoItem} ) => {


	return (
		<li>
			<div className={`${styles.description} ${done ? styles.completed : ""}`}>{title}</div>
			<div className={styles.buttons}>
				<div onClick={() => makeTodoDone(id)}><img src= {done ? "https://cdn-icons-png.flaticon.com/128/4225/4225683.png" : 'https://cdn-icons-png.flaticon.com/128/665/665939.png'} alt='check'></img></div>
				<div onClick={() => deleteTodoItem(id)}><img src='https://cdn-icons-png.flaticon.com/128/399/399274.png' alt='cancel'></img></div>
			</div>
		</li>
	)
}

export default Item