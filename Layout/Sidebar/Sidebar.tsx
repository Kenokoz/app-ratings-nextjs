import React, { FC } from 'react';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar: FC<SidebarProps> = ({ ...props }) => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};
