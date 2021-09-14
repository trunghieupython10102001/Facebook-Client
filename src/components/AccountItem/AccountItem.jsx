import { Close } from '@material-ui/icons'
import React from 'react'
import './AccountItem.css'

const AccountItem = () => {
	return (
		<div className="AccountItem" >
			<div className="AccountItemImg">
				<img src="/assets/img/avatar.jpeg" alt="avatar" className="ItemImage" />
			</div>
			<span className="AccountItemName">Hieu</span>
			<div className="AccountItemRemove">
				<Close className="ItemRemoveIcon" />
			</div>
		</div>
	)
}

export default AccountItem
