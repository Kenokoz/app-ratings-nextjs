import React, { FC } from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer: FC<FooterProps> = ({ ...props }) => {
	return <div {...props}>Footer</div>;
};
