import React from 'react';
import styles from './videos_list.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/card_info';

const VideosListTemplate = (props) => {
	return props.data.map( (item,i)=> {
		return <Link to={`/videos/${item.id}`} key={i}>
			<div className={styles.videoListItem_wrapper}>
				<div className={styles.left} 
					style={{
						background: `url(../images/videos/${item.image})`
					}}
				>
					<div></div>
				</div>
				<div className={styles.right}>
					<CardInfo teams={props.teams} teamID={item.team} date={item.date}/>
					<h2>{item.title}</h2>
				</div>
			</div>
		</Link>
	})
}

export default VideosListTemplate;