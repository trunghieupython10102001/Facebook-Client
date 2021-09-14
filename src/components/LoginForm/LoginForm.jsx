import React from "react"
import axios from "axios"
import "./LoginForm.css"
import { useForm } from "react-hook-form"
import Button from "../Button/Button"

const AuthenForm = () => {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data) => {
		axios({
			method: "POST",
			url: "/authen/login",
			headers: {
				"Content-Type": "application/json",
			},
			baseURL: "http://localhost:4000",
			data: JSON.stringify(data),
		}).then((res) => console.log(res.data))
	}
	// const onSubmit = (data) => {
	// 	console.log(data)
	// }
	return (
		<div className="AuthenForm">
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<div className="Input">
					<input
						type="text"
						{...register("email", {
							required: true,
							pattern:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
						placeholder="Email hoặc số điện thoại"
						className="LoginInput"
					/>
				</div>
				<div className="Input">
					<input
						type="password"
						{...register("password")}
						placeholder="Mật khẩu"
						className="LoginInput"
					/>
				</div>
				<Button
					height={48}
					text={"Đăng nhập"}
					clName={"login"}
					fontsize={20}
				/>
			</form>
			<div className="forgot-password">
				<span>Quên mật khẩu?</span>
			</div>
			<div className="separate-line"></div>
			<Button
				height={48}
				text={"Tạo tài khoản mới"}
				clName={"register"}
				fontsize={17}
			/>
		</div>
	)
}

export default AuthenForm
