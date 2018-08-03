import React from 'react';

import VideosList from '../Widgets/VideosList/videos_list';

const Videos = () => {
	return(
		<div>
			<VideosList
				type="card"
				title={false}
				loadmore={true}
				start={0}
				amount={9}
			/>
		</div>
	)
}

export default Videos;