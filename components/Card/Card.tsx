import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

export const Card: FC<CardProps> = ({ color = 'white', className, children, ...props }) => (
	<div
		className={clsx(styles.card, className, {
			[styles.blue]: color === 'blue',
		})}
		{...props}
	>
		{children}
	</div>
);
