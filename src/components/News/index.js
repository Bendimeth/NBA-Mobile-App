import React from 'react';

import styles from './news.css';
import Slider from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/news_list';

const News = () => {
		return (
			<div className={styles.newsWrapper}>
				<Slider 
					type= "featured"
					start= {0}
					amount= {3}
					settings= {{
						dots:false
					}}
				/>
				<NewsList
					type="main" 
					loadmore={true}
					start={3}
					amount={6}
				/>
		</div>
	);
}

export default News;
