import React from 'react'
import './SideBar.css'
import { Group, Bookmark, Person, SportsEsports, Storefront, 
	Flag, Restore, Cloud, LiveTv, Star, Code, MovieCreation, AccountBalance, Settings, GitHub } 
	from '@material-ui/icons'

const SideBar = () => {
	return (
		<div className="SideBar col-3">
			<ul className="features">
				<li className="featuresItem hover">
					<img src="/assets/img/avatar.jpeg" alt="avatar" className="featuresItemAvatar" />
					<span className="featuresItemText">Trung Hieu</span>
				</li>
				<li className="featuresItem hover">
					<Person className="featuresItemImg" />
					<span className="featuresItemText">Bạn bè</span>
				</li>
				<li className="featuresItem hover">
					<Bookmark className="featuresItemImg" />
					<span className="featuresItemText">Đã lưu</span>
				</li>
				<li className="featuresItem hover">
					<Group className="featuresItemImg" />
					<span className="featuresItemText">Nhóm</span>
				</li>
				<li className="featuresItem hover">
					<SportsEsports className="featuresItemImg" />
					<span className="featuresItemText">Chơi game</span>
				</li>
				<li className="featuresItem hover">
					<Storefront className="featuresItemImg" />
					<span className="featuresItemText">Marketplace</span>
				</li>
				<li className="featuresItem hover">
					<Flag className="featuresItemImg" />
					<span className="featuresItemText">Trang</span>
				</li>
				<li className="featuresItem hover">
					<Restore className="featuresItemImg" />
					<span className="featuresItemText">Kỷ niệm</span>
				</li>
				<li className="featuresItem hover">
					<Cloud className="featuresItemImg" />
					<span className="featuresItemText">Thời tiết</span>
				</li>
				<li className="featuresItem hover">
					<LiveTv className="featuresItemImg" />
					<span className="featuresItemText">Trực tiếp</span>
				</li>
				<li className="featuresItem hover">
					<Star className="featuresItemImg" />
					<span className="featuresItemText">Yêu thích</span>
				</li>
				<li className="featuresItem hover">
					<Code className="featuresItemImg" />
					<span className="featuresItemText">Nhà phát triền</span>
				</li>
				<li className="featuresItem hover">
					<MovieCreation className="featuresItemImg" />
					<span className="featuresItemText">Tạo video</span>
				</li>
				<li className="featuresItem hover">
					<AccountBalance className="featuresItemImg" />
					<span className="featuresItemText">Ngân hàng</span>
				</li>
				<li className="featuresItem hover">
					<GitHub className="featuresItemImg" />
					<span className="featuresItemText">Github</span>
				</li>
				<li className="featuresItem hover">
					<Settings className="featuresItemImg" />
					<span className="featuresItemText">Cài đặt</span>
				</li>
			</ul>
		</div>
	)
}

export default SideBar
