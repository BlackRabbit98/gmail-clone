import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function EmailRow({ id, title, subject, description, time }) {
	return (
		<div className="emailRow">
			<div className="emailRow_options">
				<Checkbox />
				<IconButton>
					<StarBorderIcon />
				</IconButton>
				<IconButton>
					<LabelImportantIcon />
				</IconButton>
			</div>
			<h3 className="emailRow_title">{title}</h3>
			<div className="emailRow_message">
				<h4>
					{subject}
					<span className="emailRow_description">{description}</span>
				</h4>
			</div>
			<div className="emailRow_description">{time}</div>
		</div>
	);
}

export default EmailRow;
