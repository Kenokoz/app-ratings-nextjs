import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { withLayout } from '../../Layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

const Type: NextPage<TypeProps> = ({ menu, firstCategory }) => {
	return <>Type: {firstCategory}</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map((m) => `/${m.route}`),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{ firstCategory: firstCategoryItem.id }
	);

	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id,
		},
	};
};
