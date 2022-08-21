import React, { useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondCategory) {
						m.isOpen = !m.isOpen;
					}
					return m;
				})
			);
	};

	const buildFirstLevel = () =>
		firstLevelMenu.map((menuItem) => (
			<div key={menuItem.id}>
				<Link href={`/${menuItem.route}`}>
					<a>
						<div
							className={clsx(styles.firstLevel, {
								[styles.firstLevelActive]: menuItem.id === firstCategory,
							})}
						>
							{menuItem.icon}
							<span>{menuItem.name}</span>
						</div>
					</a>
				</Link>
				{menuItem.id === firstCategory && buildSecondLevel(menuItem)}
			</div>
		));

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => (
		<div className={styles.secondBlock}>
			{menu.map((m) => {
				if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
					m.isOpen = true;
				}

				return (
					<div key={m._id.secondCategory}>
						<div
							className={styles.secondLevel}
							onClick={() => openSecondLevel(m._id.secondCategory)}
						>
							{m._id.secondCategory}
						</div>
						<div
							className={clsx(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpen]: m.isOpen,
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				);
			})}
		</div>
	);

	const buildThirdLevel = (pages: PageItem[], route: string) =>
		pages.map((page) => (
			<Link key={page._id} href={`/${route}/${page.alias}`}>
				<a
					className={clsx(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
					})}
				>
					{page.category}
				</a>
			</Link>
		));

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
