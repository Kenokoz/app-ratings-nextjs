import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag: FC<TagProps> = ({
	size = 'medium',
	color = 'ghost',
	href,
	className,
	children,
	...props
}) => (
	<div className={clsx(styles.tag, styles[size], styles[color], className)} {...props}>
		{href ? <a href={href}>{children}</a> : children}
	</div>
);
