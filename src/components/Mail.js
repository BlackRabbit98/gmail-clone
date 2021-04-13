import { IconButton } from '@material-ui/core';
import {
	CheckCircle,
	ExitToApp,
	LabelImportant,
	MoreVert,
	MoveToInbox,
	UnfoldMore,
} from '@material-ui/icons';
import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { useHistory } from 'react-router';
import PrintIcon from '@material-ui/icons/Print';

function Mail() {
	const history = useHistory();

	return (
		<div className="mail">
			<div className="mail_tools">
				<div className="mail_toolsLeft">
					<IconButton onClick={() => history.push('/')}>
						<ArrowBackIcon />
					</IconButton>

					<IconButton>
						<MoveToInbox />
					</IconButton>

					<IconButton>
						<ErrorIcon />
					</IconButton>

					<IconButton>
						<DeleteIcon />
					</IconButton>

					<IconButton>
						<EmailIcon />
					</IconButton>

					<IconButton>
						<WatchLaterIcon />
					</IconButton>

					<IconButton>
						<CheckCircle />
					</IconButton>

					<IconButton>
						<LabelImportant />
					</IconButton>

					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className="mail_toolsRight">
					<IconButton>
						<UnfoldMore />
					</IconButton>

					<IconButton>
						<PrintIcon />
					</IconButton>

					<IconButton>
						<ExitToApp />
					</IconButton>
				</div>
			</div>

			<div className="mail_body">
				<div className="mail_bodyHeader">
					<h2>subject</h2>
					<LabelImportant className="mail_important" />
					<p>title</p>
					<p className="mail_time">10pm</p>
				</div>

				<div className="mail_message">
					<p>this is a message</p>
				</div>
			</div>
		</div>
	);
}

export default Mail;
