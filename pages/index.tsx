import type { NextPage } from 'next';
import { Button, Htag, Paragraph, Tag } from '../components';

const Home: NextPage = () => {
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
		</>
	);
};

export default Home;
