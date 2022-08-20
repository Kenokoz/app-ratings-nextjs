import React, { useContext } from 'react';
import clsx from 'clsx';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () =>
		firstLevelMenu.map((menuItem) => (
			<div key={menuItem.id}>
				<a href={`/${menuItem.route}`}>
					<div
						className={clsx(styles.firstLevel, {
							[styles.firstLevelActive]: menuItem.id === firstCategory,
						})}
					>
						{menuItem.icon}
						<span>{menuItem.name}</span>
					</div>
				</a>
				{menuItem.id === firstCategory && buildSecondLevel(menuItem)}
			</div>
		));

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => (
		<div className={styles.secondBlock}>
			{menu.map((m) => (
				<div key={m._id.secondCategory}>
					<div className={styles.secondLevel}>{m._id.secondCategory}</div>
					<div
						className={clsx(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpen]: m.isOpen,
						})}
					>
						{buildThirdLevel(m.pages, menuItem.route)}
					</div>
				</div>
			))}
		</div>
	);

	const buildThirdLevel = (pages: PageItem[], route: string) =>
		pages.map((page) => (
			<a
				key={page._id}
				href={`/${route}/${page.alias}`}
				className={clsx(styles.thirdLevel, {
					[styles.thirdLevelActive]: false,
				})}
			>
				{page.category}
			</a>
		));

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
