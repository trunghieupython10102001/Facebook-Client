import React from "react"
import "./Authen.css"
import AccountItem from "../../components/AccountItem/AccountItem"
import AuthenForm from "../../components/LoginForm/LoginForm"
import Logo from "../../components/Logo/Logo"
import Footer from "../../components/Footer/Footer"
import Register from "../../components/Register/Register"

const Authen = () => {
	return (
		<>
			<div className="Authen">
				<div className="AuthenContainer">
					<Logo />
					<div className="RightSide">
						<AuthenForm />
						<div className="registerPage">
							<a href="/" className="registerPageLink">
								Tạo trang{" "}
							</a>
							dành cho người nổi tiếng, nhãn hiệu hoặc doanh
							nghiệp.
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<Register />
		</>
	)
}

export default Authen
