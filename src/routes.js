import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Videos/Video/index';
import News from './components/News/index';
import Videos from './components/Videos/index';

class Routes extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/news" exact component={News} />
					<Route path="/videos" exact component={Videos} />
					<Route path="/articles/:id" exact component={NewsArticle} />
					<Route path="/videos/:id" exact component={VideoArticle} />
				</Switch>
			</Layout>
		);
	}
}

export default Routes;
