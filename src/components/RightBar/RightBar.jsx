import React from 'react'
import './RightBar.css'
import { MoreHoriz, Search, VideoCall } from '@material-ui/icons'
import OnlineFriend from '../OnlineFriend/OnlineFriend'

const RightBar = () => {
	return (
		<div className="RightBar col-3">
			<div className="RightBarHeader">
				<span className="RightBarHeaderText">Người liên hệ</span>
				<div className="RightBarIconWrapper">
					<div className="boxWrapper hover">
						<VideoCall className="RightBarHeaderIcon" />
					</div>
					<div className="boxWrapper hover">
						<Search className="RightBarHeaderIcon" /> 
					</div>
					<div className="boxWrapper hover">
						<MoreHoriz className="RightBarHeaderIcon" />
					</div>
				</div>
			</div>
			<ul className="OnlineFriendList">
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
				<OnlineFriend name={'Trung Hieu'} src={"/assets/img/avatar.jpeg"} />
			</ul>
		</div>
	)
}

export default RightBar
