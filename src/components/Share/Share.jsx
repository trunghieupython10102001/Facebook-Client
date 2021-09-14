import { Mood, PhotoLibrary, Videocam } from '@material-ui/icons'
import React, { useContext } from 'react'
import CreatePostContext from '../../contexts/CreatePostContext'
import './Share.css'

const Share = () => {
	const { toggleCreatePostBox } = useContext(CreatePostContext)

	return (
		<div className="Share">
			<div className="ShareTop">
				<img src="/assets/img/avatar.jpeg" alt="avatar" className="ShareAvatar" />
			<div onClick={toggleCreatePostBox} className="ShareInput hover">
				<p className="ShareInputText">Hiếu ơi, bạn đang nghĩ gì thế?</p>
			</div>	
			</div>
			<div className="ShareDown">
				<div className="ShareDownOption hover">
					<Videocam className="ShareDownIcon LiveIcon" />
					<p className="ShareDownText">Video trực tiếp</p>
				</div>
				<div onClick={toggleCreatePostBox} className="ShareDownOption hover">
					<PhotoLibrary id="photo" className="ShareDownIcon" />
					<p className="ShareDownText">Ảnh/Video</p>
				</div>
				<div className="ShareDownOption hover">
					<Mood id="mood" className="ShareDownIcon" />
					<p className="ShareDownText">Cảm xúc/Hoạt động</p>
				</div>
			</div>
		</div>
	)
}

export default Share
