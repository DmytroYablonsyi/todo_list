import { useEffect, useState } from 'react'
import styles from "./style.module.css"
import Item from '../item'

import uniqid from 'uniqid';

const Input = () => {
	const [name, setName] = useState("")
	const [array, setArray] = useState(JSON.parse(localStorage.getItem("taskArr")) || [])

	const deleteTodoItem = (id) => {
		const filteredArray = array.filter((element) => element.id !== id)
		setArray(filteredArray)
	}

	const makeTodoDone = (id) => {
  	const indexOfElemnt = array.findIndex((el) => el.id ===id);
		const newArray = [...array];
		newArray[indexOfElemnt].done = !newArray[indexOfElemnt].done
		setArray(newArray)
	}

	useEffect(() => {
		localStorage.setItem("taskArr", JSON.stringify(array))
	},[array])

	const handleInputTask = (el) => {
		setName(el.target.value)
	}

	const setTask = (e) => {
		e.preventDefault()
		if (name) {
			const todoObj = {
				title: name.trim(),
				id: uniqid(),
				done: false
			}
			setArray([...array, todoObj])
			setName('')
		}
	}
	console.log(array)
	return (
		<>
			<form>
				<input value={name} onChange={(el) => handleInputTask(el)} type='text' placeholder="What's up ? ..." />
				<button onClick={(e) => setTask(e)} className={styles.addButton}>+</button>
			</form>
			<ul>
				{
					array.map((value) => {
						return <Item deleteTodoItem={deleteTodoItem} makeTodoDone={makeTodoDone} key={uniqid()} {...value} />
					})
				}
			</ul>

		</>
	)
}

export default Input