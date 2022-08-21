import React, { FC } from 'react';
import clsx from 'clsx';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';

export const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
	return (
		<div className={clsx(styles.sidebar, className)} {...props}>
			<Logo className={styles.logo} />
			<div>Поиск</div>
			<Menu />
		</div>
	);
};
