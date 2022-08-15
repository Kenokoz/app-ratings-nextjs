import React, { FC } from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export const Header: FC<HeaderProps> = ({ ...props }) => {
	return <div {...props}>Header</div>;
};
