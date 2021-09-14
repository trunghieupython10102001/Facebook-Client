import React from 'react'
import './Logo.css'

const Logo = () => {
	return (
		<div className="LogoWrapper">
			<div className="LogoImgWrapper">
				<img className="LogoImg" src="/assets/img/facebook-logo.svg" alt="logo" />
			</div>
			<div className="LogoSloganWrapper">
				<h2 className="LogoSlogan">Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
			</div>
		</div>			
	)
}

export default Logo
