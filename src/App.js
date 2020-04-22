import React from 'react';
import { useEffect, useState } from 'react';
import LottieComponent from './components/lottie.comp';

import './App.css';

function App() {
	const [date, setDate] = useState(null);

	const url1 = 'https://assets9.lottiefiles.com/packages/lf20_6cLkFc.json';
	const url2 = 'https://assets9.lottiefiles.com/packages/lf20_UVDY7k.json';
	const width = 400;
	const height = 400;

	useEffect(() => {
		async function getDate() {
			const res = await fetch('/api/date');
			const newDate = await res.text();
			setDate(newDate);
		}
		getDate();
	}, []);
	return (
		<main>
			<h1>Create React App + Go API</h1>
			<LottieComponent url={url1} height={height} width={width} />
			<LottieComponent url={url2} />
			<LottieComponent url={'https://assets9.lottiefiles.com/packages/lf20_QY9umH.json'} />

			<h2>
				Deployed with{' '}
				<a
					href="https://vercel.com/docs"
					target="_blank"
					rel="noreferrer noopener"
				>
					Vercel
				</a>
				!
			</h2>
			<p>
				<a
					href="https://github.com/zeit/now/tree/master/examples/create-react-app"
					target="_blank"
					rel="noreferrer noopener"
				>
					This project
				</a>{' '}
				was bootstrapped with{' '}
				<a href="https://facebook.github.io/create-react-app/">
					Create React App
				</a>{' '}
				and contains three directories, <code>/public</code> for static
				assets, <code>/src</code> for components and content, and{' '}
				<code>/api</code> which contains a serverless{' '}
				<a href="https://golang.org/">Go</a> function. See{' '}
				<a href="/api/date">
					<code>api/date</code> for the Date API with Go
				</a>
				.
			</p>
			<br />
			<h2>The date according to Go is:</h2>
			<p>{date ? date : 'Loading date...'}</p>
		</main>
	);
}

export default App;
