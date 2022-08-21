import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { withLayout } from '../../Layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}

const Course: NextPage<CourseProps> = ({ menu, page, products }) => {
	return <>{products && products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];

	for (const m of firstLevelMenu) {
		const { data: menu } = await axios.post<MenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{ firstCategory: m.id }
		);

		paths = [
			...paths,
			...menu.flatMap((item) => item.pages.map((page) => `/${m.route}/${page.alias}`)),
		];
	}

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }) => {
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

	try {
		const { data: menu } = await axios.post<MenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{ firstCategory: firstCategoryItem.id }
		);

		if (menu.length === 0) {
			return {
				notFound: true,
			};
		}

		const { data: page } = await axios.get<TopPageModel>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
		);
		const { data: products } = await axios.post<ProductModel[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
			{
				category: page.category,
				limit: 10,
			}
		);

		return {
			props: {
				menu,
				page,
				products,
				firstCategory: firstCategoryItem.id,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
