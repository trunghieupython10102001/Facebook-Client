import React from 'react'
import './NavBar.css'
import { AiOutlineSearch, AiFillHome, 
	HiOutlineUserGroup, MdOndemandVideo, RiGamepadFill, 
	CgMenuGridO, FaFacebookMessenger, IoMdNotifications,
	BsFillCaretDownFill, 
} from 'react-icons/all'

const NavBar = () => {
	return (
		<navigator className="NavBar">
			<div className="navLeft col-3 row">
				<div>
					<img src="/assets/img/facebook.png" alt="logo" className="logoIcon" />
				</div>
				<div className="searchInput">
					<AiOutlineSearch className="searchIcon"/>
					<input className="searchBar" type="text" placeholder="Tìm kiếm trên Facebook" />
				</div>
			</div>
			<div className="navCenter col-6 row">
				<div className="navCenterIconWrapper hover">
					<AiFillHome className="navCenterIcon"/>
				</div>
				<div className="navCenterIconWrapper hover">
					<MdOndemandVideo className="navCenterIcon"/>
					<span className="IconBadgeCenter">1</span>
				</div>
				<div className="navCenterIconWrapper hover">
					<HiOutlineUserGroup className="navCenterIcon"/>
					<span className="IconBadgeCenter">15</span>
				</div>
				<div className="navCenterIconWrapper hover">
					<RiGamepadFill className="navCenterIcon"/>
					<span className="IconBadgeCenter">1</span>
				</div>
			</div>
			<div className="navRight col-3 row">
				<div className="navUser hover">
					<img src="/assets/img/avatar.jpeg" alt="avatar" className="userAvatar" />
					<span className="userName">Hieu</span>
				</div>
				<div className="navRightIconWrapper hover">
					<CgMenuGridO className="navRightIcon"/>
					<span className="IconBadge">1</span>
				</div>	
				<div className="navRightIconWrapper hover">
					<FaFacebookMessenger className="navRightIcon"/>
					<span className="IconBadge">1</span>
				</div>	
				<div className="navRightIconWrapper hover">
					<IoMdNotifications className="navRightIcon"/>
					<span className="IconBadge">1</span>
				</div>	
				<div className="navRightIconWrapper hover">
					<BsFillCaretDownFill className="navRightIcon"/>
				</div>	
			</div>
		</navigator>
	)
}

export default NavBar
