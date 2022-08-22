import { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { Button, Htag, Paragraph, Tag, Rating } from '../components';
import { withLayout } from '../Layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps {
	menu: MenuItem[];
	firstCategory: number;
}

const Home: NextPage<HomeProps> = ({ menu, firstCategory }) => {
	const [rating, setRating] = useState(4);

	return (
		<>
			<Htag tag="h1">Hello</Htag>
			<Button appearance="primary" className="ds" arrow="right">
				Button
			</Button>
			<Paragraph size="small">
				Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно
				успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с
				нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным
				считается вдохновение, поэтому дизайнеры ищут его в разных местах.
			</Paragraph>
			<Tag size="small" color="green">
				Small
			</Tag>
			<Rating rating={rating} setRating={setRating} isEditable />
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
