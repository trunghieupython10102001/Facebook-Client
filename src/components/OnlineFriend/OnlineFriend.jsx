import React from 'react'
import './OnlineFriend.css'

const OnlineFriend = ({src, name}) => {
	return (
		<li className="OnlineFriend hover">
			<img src={src} alt="avatar" className="OnlineFriendAvatar" />
			<span className="OnlineFriendName">{name}</span>
			<div className="OnlineNotation"></div>
		</li>
	)
}

export default OnlineFriend
