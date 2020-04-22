import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/19315-test-animation-for-ae.json';

const LottieComponent = (props) => {
	const initState = { url: '', heigth: 100, width: 100 };
	const [state, setLottieSate] = useState(initState);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: props.url,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	useEffect(() => {
		setLottieSate({
			url: props.url,
			height: props.height,
			width: props.width,
		});
	}, [props.url]);
	return (
		<div className={'lottie-container'}>
			<h1>Lottie Test </h1>
			<Lottie options={defaultOptions} height={300} width={300} />
		</div>
	);
};

export default LottieComponent;
