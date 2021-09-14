import { Close, Help } from "@material-ui/icons"
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames"
import axios from "axios"
import * as yup from "yup"
import "./RegisterForm.css"

const SignupSchema = yup.object().shape({
	lastname: yup.string().required(),
	firstname: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
	day: yup.number().required(),
	month: yup.number().required(),
	year: yup.number().required(),
	gender: yup.string().required(),
})

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		axios({
			method: "POST",
			url: "/authen/register",
			baseURL: "http://localhost:4000",
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify(data),
		})
			.then(res => console.log(res.data))
			.catch(err => {
				console.log(err)
				console.log("Email này đã tồnt tại")
			}
			)
	}

	return (
		<div className="RegisterForm">
			<div className="RegisterFromContainer">
				<div className="RegisterFormHeader">
					<h2 className="RegisterFormHeaderTitle">Đăng ký</h2>
					<p className="RegisterFormHeaderText">
						Nhanh chóng và dễ dàng.
					</p>
					<Close className="RegisterFormClose" />
				</div>
				<div className="RegisterSeparator"></div>
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="RegisterFormWrapper"
						action=""
					>
						<div className="FormGroup FormNameGroup">
							<input
								type="text"
								{...register("lastname", {
									required: true,
								})}
								className={classNames("RegisterFormInput", {
									dangerForm: errors.lastname,
								})}
								placeholder="Họ"
							/>
							<input
								type="text"
								{...register("firstname", {
									required: true,
								})}
								className={classNames("RegisterFormInput", {
									dangerForm: errors.firstname,
								})}
								placeholder="Tên"
							/>
						</div>
						<div className="FormGroup FormEmailGroup">
							<input
								type="text"
								{...register("email", {
									required: true,
									pattern:
										/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
								className={classNames("RegisterFormInput", {
									dangerForm: errors.email,
								})}
								placeholder="Số di động hoặc email"
							></input>
						</div>
						<div className="FormGroup FormPasswordGroup ">
							<input
								type="password"
								className={classNames("RegisterFormInput", {
									dangerForm: errors.password,
								})}
								{...register("password", {
									required: true,
									minLength: 8,
								})}
								placeholder="Mật khẩu mới"
							/>
						</div>
						<div className="FormLabel">
							Ngày sinh
							<Help className="BirthdayLabelIcon" />
						</div>
						<div className="FormBirthdayGroup">
							<select
								{...register("day", { required: true })}
								id="day"
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
							</select>
							<select
								{...register("month", {
									required: true,
								})}
								id="month"
							>
								<option value="1">Tháng 1</option>
								<option value="2">Tháng 2</option>
								<option value="3">Tháng 3</option>
								<option value="4">Tháng 4</option>
								<option value="5">Tháng 5</option>
								<option value="6">Tháng 6</option>
								<option value="7">Tháng 7</option>
								<option value="8">Tháng 8</option>
								<option value="9">Tháng 9</option>
								<option value="10">Tháng 10</option>
								<option value="11">Tháng 11</option>
								<option value="12">Tháng 12</option>
							</select>
							<select
								{...register("year", {
									required: true,
								})}
								id="year"
							>
								<option value="2021">2021</option>
								<option value="2020">2020</option>
								<option value="2019">2019</option>
								<option value="2018">2018</option>
								<option value="2017">2017</option>
								<option value="2016">2016</option>
								<option value="2015">2015</option>
								<option value="2014">2014</option>
								<option value="2013">2013</option>
								<option value="2012">2012</option>
								<option value="2011">2011</option>
								<option value="2010">2010</option>
								<option value="2009">2009</option>
								<option value="2008">2008</option>
								<option value="2007">2007</option>
								<option value="2006">2006</option>
								<option value="2005">2005</option>
								<option value="2004">2004</option>
								<option value="2003">2003</option>
								<option value="2002">2002</option>
								<option value="2001">2001</option>
								<option value="191@-">2000</option>
								<option value="192@-">1999</option>
								<option value="193@-">1998</option>
								<option value="194@-">1997</option>
								<option value="195@-">1996</option>
								<option value="196@-">1995</option>
								<option value="197@-">1994</option>
								<option value="198@-">1993</option>
								<option value="199@-">1992</option>
								<option value="1910@-">1991</option>
								<option value="1911@-">1990</option>
								<option value="1912@-">1989</option>
								<option value="1913@-">1988</option>
								<option value="1914@-">1987</option>
								<option value="1915@-">1986</option>
								<option value="1916@-">1985</option>
								<option value="1917@-">1984</option>
								<option value="1918@-">1983</option>
								<option value="1919@-">1982</option>
								<option value="1920@-">1981</option>
								<option value="1921@-">1980</option>
								<option value="1922@-">1979</option>
								<option value="1923@-">1978</option>
								<option value="1924@-">1977</option>
								<option value="1925@-">1976</option>
								<option value="1926@-">1975</option>
								<option value="1927@-">1974</option>
								<option value="1928@-">1973</option>
								<option value="1929@-">1972</option>
								<option value="1930@-">1971</option>
								<option value="1931@-">1970</option>
								<option value="1932@-">1969</option>
								<option value="1933@-">1968</option>
								<option value="1934@-">1967</option>
								<option value="1935@-">1966</option>
								<option value="1936@-">1965</option>
								<option value="1937@-">1964</option>
								<option value="1938@-">1963</option>
								<option value="1939@-">1962</option>
								<option value="1940@-">1961</option>
								<option value="1941@-">1960</option>
								<option value="1942@-">1959</option>
								<option value="1943@-">1958</option>
								<option value="1944@-">1957</option>
								<option value="1945@-">1956</option>
								<option value="1946@-">1955</option>
								<option value="1947@-">1954</option>
								<option value="1948@-">1953</option>
								<option value="1949@-">1952</option>
								<option value="1950@-">1951</option>
								<option value="1951@-">1950</option>
								<option value="1952@-">1949</option>
								<option value="1953@-">1948</option>
								<option value="1954@-">1947</option>
								<option value="1955@-">1946</option>
								<option value="1956@-">1945</option>
								<option value="1957@-">1944</option>
								<option value="1958@-">1943</option>
								<option value="1959@-">1942</option>
								<option value="1960@-">1941</option>
								<option value="1961@-">1940</option>
								<option value="1962@-">1939</option>
								<option value="1963@-">1938</option>
								<option value="1964@-">1937</option>
								<option value="1965@-">1936</option>
								<option value="1966@-">1935</option>
								<option value="1967@-">1934</option>
								<option value="1968@-">1933</option>
								<option value="1969@-">1932</option>
								<option value="1970@-">1931</option>
								<option value="1971@-">1930</option>
								<option value="1972@-">1929</option>
								<option value="1973@-">1928</option>
								<option value="1974@-">1927</option>
								<option value="1975@-">1926</option>
								<option value="1976@-">1925</option>
								<option value="1977@-">1924</option>
								<option value="1978@-">1923</option>
								<option value="1979@-">1922</option>
								<option value="1980@-">1921</option>
								<option value="1981@-">1920</option>
								<option value="1982@-">1919</option>
								<option value="1983@-">1918</option>
								<option value="1984@-">1917</option>
								<option value="1985@-">1916</option>
								<option value="1986@-">1915</option>
								<option value="1987@-">1914</option>
								<option value="1988@-">1913</option>
								<option value="1989@-">1912</option>
								<option value="1990@-">1911</option>
								<option value="1991@-">1910</option>
								<option value="1992@-">1909</option>
								<option value="1993@-">1908</option>
								<option value="1994@-">1907</option>
								<option value="1995@-">1906</option>
								<option value="1996@-">1905</option>
							</select>
						</div>
						<div className="FormLabel">
							Giới tính
							<Help className="BirthdayLabelIcon" />
						</div>
						<div className="FormGenderGroup">
							<span
								className={classNames("GenderGroup", {
									dangerForm: errors.gender,
								})}
							>
								<label
									className="FormGenderLabel"
									htmlFor="female"
								>
									Nữ
								</label>
								<input
									type="radio"
									{...register("gender", {
										required: true,
									})}
									id="female"
									value="female"
								/>
							</span>
							<span
								className={classNames("GenderGroup", {
									dangerForm: errors.gender,
								})}
							>
								<label
									className="FormGenderLabel"
									htmlFor="male"
								>
									Nam
								</label>
								<input
									type="radio"
									{...register("gender", {
										required: true,
									})}
									id="male"
									value="male"
								/>
							</span>
							<span
								className={classNames("GenderGroup", {
									dangerForm: errors.gender,
								})}
							>
								<label
									className="FormGenderLabel"
									htmlFor="optional"
								>
									Tùy chỉnh
								</label>
								<input
									type="radio"
									{...register("gender", {
										required: true,
									})}
									id="optional"
									value="optional"
								/>
							</span>
						</div>
						<div className="FormPolicyGroup">
							Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
							<a href="/" className="policies">
								Điều khoản, Chính sách dữ liệu
							</a>{" "}
							và{" "}
							<a href="/" className="policies">
								{" "}
								Chính sách cookie
							</a>{" "}
							của chúng tôi. Bạn có thể nhận được thông báo của
							chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
						</div>
						<div className="FormSubmitGroup"></div>
						<button className="FormSubmitButton">Đăng ký</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegisterForm
