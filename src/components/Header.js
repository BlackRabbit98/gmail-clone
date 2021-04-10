import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
	return (
		<div className="header">
			<div className="header_left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					src="https://i.pinimg.com/originals/d7/4e/60/d74e6036cb5b6e80d87b0a3fc77176c0.png"
					alt="gmail logo"
				/>
			</div>

			<div className="header_center">
				<SearchIcon />
				<input placeholder="Search mail" type="text" />
				<ArrowDropDownIcon className="header_inputCaret" />
			</div>

			<div className="header_right">
				<IconButton>
					<AppsIcon />
				</IconButton>

				<IconButton>
					<NotificationsIcon />
				</IconButton>

				<Avatar />
			</div>
		</div>
	);
}

export default Header;
