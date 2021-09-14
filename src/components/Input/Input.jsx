import React from 'react'
import './Input.css'

const Input = ({ type, placeholder, name }) => {
	return (
		<div className="Input">
			<input className="LoginInput" type={type} placeholder={placeholder} name={name} />
		</div>
	)
}

export default Input
