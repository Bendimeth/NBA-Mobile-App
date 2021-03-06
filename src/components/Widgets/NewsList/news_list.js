import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config'

import styles from './news_list.css';
import Button from '../Button/button';
import CardInfo from '../CardInfo/card_info';

class NewsList extends Component {
	state = {
		teams: [],
		items: [],
		start: this.props.start,
		end: this.props.start + this.props.amount,
		amount: this.props.amount
	}

	componentWillMount(){
		this.request(this.state.start,this.state.end)
	}

	request = (start,end) => {
		if(this.state.teams.length < 1){
			axios.get(`${URL}/teams`)
			.then( response => {
				this.setState({
					teams: response.data
				})
			})
		}

		axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
		.then( response => {
			this.setState({
				items:[...this.state.items,...response.data],
				start,
				end
			});
		})
	}

	renderNews = (type) => {
		let template = null;

		switch(type){
			case('card'):
				template = this.state.items.map((item,i) => (
					<CSSTransition
						classNames={{
							enter: styles.newslist_wrapper,
							enterActive: styles.newslist_wrapper_enter
						}}
						timeout={500}
						key={i}
					>
						<div>
							<div className={styles.newslist_item}>
								<Link to={`/articles/${item.id}`}>
									<CardInfo teams={this.state.teams} teamID={item.team} date={item.date}/>
									<h2>{item.title}</h2>
								</Link>
							</div>
						</div>
					</CSSTransition>
				))
				break;
			case('main'):
				template = this.state.items.map((item,i) => (
					<CSSTransition
						classNames={{
							enter: styles.newslist_wrapper,
							enterActive: styles.newslist_wrapper_enter
						}}
						timeout={500}
						key={i}
				 	>
						<div>
							<Link to={`/articles/${item.id}`}>
								<div className={styles.mainListItem_wrapper}>
									<div className={styles.mainLeft}
										style = {{
											background:`url(../images/articles/${item.image})`
										}}
								>
									<div></div>
									</div>
									<div className={styles.mainRight}>
										<CardInfo teams={this.state.teams} teamID={item.team} date={item.date}/>
										<h2>{item.title}</h2>
									</div>
								</div>
							</Link>
						</div>
					</CSSTransition>
				))
				break;
			default:
				template = null;
		}

		return template;
	}

	loadMore = () => {
		let end = this.state.end + this.state.amount
		this.request(this.state.end,end)
	}

	render() {
		return (
			<div>
				<TransitionGroup
					component='div'
					className='list'
				>
					{this.renderNews( this.props.type )}
				</TransitionGroup>
				{this.props.loadmore ? (
					<Button
					type="loadmore"
					loadmore={()=>this.loadMore()}
					cta="Load more news"
				/>
				):null}
			</div>
		);
	}
}

export default NewsList;