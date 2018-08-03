import React, { Component } from 'react';
import styles from './videos_list.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Button/button';
import VideosListTemplate from './videos_list_template';

class VideosList extends Component {
	state = {
		teams: [],
		videos: [],
		start: this.props.start,
		end: this.props.start + this.props.amount,
		amount: this.props.amount
	}

	componentWillMount() {
		this.request(this.state.start, this.state.end);
	}

	request = (start,end) => {
		if(this.state.teams.length < 1){
			axios.get(`${URL}/teams`)
			.then( response => {
				this.setState({
					teams: response.data
				});
			})
		}

		axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
		.then( response => {
			this.setState({
				videos:[...this.state.videos,...response.data],
				start,
				end
			});
		})
	}

	renderVideos = () => {
		let template = null;

		if (!(this.state.videos.length && this.state.teams.length)) {
    		return; // <-- return if state not yet ready
  		}

		switch(this.props.type){
			case('card'):
				template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
				break;
			default:
				template = null
		}
		return template;
	}

	loadMore = () => {
		let end = this.state.end + this.state.amount
		this.request(this.state.end, end)
	}

	rednerTitle = (title) => {
		return title ? 
		<h3><strong>NBA</strong> Videos</h3>
		: null
	}

	renderButton = () => {
		return this.props.loadmore ?
		<Button 
			type="loadmore" 
			cta="Load more videos"
			loadmore={()=> this.loadMore()}
		/>
		: 
		<Button 
			type="linkTo"
			cta="More videos"
			linkTo="/videos"	
		/>
	}

	render() {
		return (
			<div className={styles.videosList_wrapper}>
				{ this.rednerTitle(this.props.title) }
				{ this.renderVideos() } 
				{ this.renderButton() }
			</div>
		);
	}
}

export default VideosList;