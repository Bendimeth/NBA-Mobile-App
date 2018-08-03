import React from 'react';
import TeamNfo from '../../Articles/News/Elements/team_info';

const Header = (props) => {
	const teamInfo = (team) => {
		return team ? (
			<TeamNfo team={team}/>
		):null;
	}

	return(
		<div>
			{teamInfo(props.teamData)}
		</div>
	)
}

export default Header;