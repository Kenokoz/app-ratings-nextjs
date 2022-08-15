import type { NextPage } from 'next';
import { Htag } from '../components';

const Home: NextPage = () => {
	return (
		<>
			<Htag tag="h1">Hello</Htag>
			<Htag tag="h2">Hello</Htag>
			<Htag tag="h3">Hello</Htag>
		</>
	);
};

export default Home;
