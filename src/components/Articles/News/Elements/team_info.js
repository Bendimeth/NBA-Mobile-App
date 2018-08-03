import React from 'react';

import styles from '../../articles.css';

const TeamNfo = (props) => {
	console.log(props.team.stats[0])
	return(
		<div className={styles.articleTeamHeader}>
			<div className={styles.left}
				style={{
					background:`url('/images/teams/${props.team.logo}')`
				}}
			>
			</div>
			<div className={styles.right}>
				<div>
					<span>{props.team.city} {props.team.name}</span>
				</div>
				<div>
					<strong>
						W{props.team.stats[0].wins}-{props.team.stats[0].defeats}
					</strong>
				</div>
			</div>
		</div>
	);
}

export default TeamNfo;