import type { NextPage } from 'next';
import { Button, Htag } from '../components';

const Home: NextPage = () => {
	return (
		<>
			<Htag tag="h1">Hello</Htag>
			<Button appearance="primary" className="ds" arrow="right">
				Button
			</Button>
			<Button appearance="ghost" arrow="down">
				Button
			</Button>
		</>
	);
};

export default Home;
