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
            name: props.name,
			height: props.height,
			width: props.width,
		});
	}, [props.url]);
	return (
		<div className={'lottie-container'}>
			<h3>{state.name}</h3>
			<Lottie options={defaultOptions} height={state.height} width={state.width} />
		</div>
	);
};

export default LottieComponent;
