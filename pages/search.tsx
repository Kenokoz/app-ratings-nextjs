import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { withLayout } from '../Layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

interface SearchProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

const Search: NextPage<SearchProps> = ({ menu, firstCategory }) => {
	return <>Search</>;
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{ firstCategory }
	);

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};
