import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { withLayout } from '../../Layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

const firstCategory = 0;

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
	page: TopPageModel;
	products: ProductModel[];
}

const Course: NextPage<CourseProps> = ({ menu, page, products }) => {
	return <>{products && products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{ firstCategory }
	);

	return {
		paths: menu.flatMap((item) => item.pages.map((page) => `/courses/${page.alias}`)),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{ firstCategory }
	);

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
			firstCategory,
		},
	};
};
