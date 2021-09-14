import React from 'react'
import './Button.css'

const Button = ({ height, text, clName, fontsize }) => {
	const style = {
		height: height,
		fontSize: fontsize
	}
	return (
		<div className="ButtonWrapper">
			<button style={style} className={"Button " + clName}>
				{text}
			</button>
		</div>
	)
}

export default Button
