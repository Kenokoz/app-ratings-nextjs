import React, { FC } from 'react';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar: FC<SidebarProps> = ({ ...props }) => {
	return <div {...props}>Sidebar</div>;
};
