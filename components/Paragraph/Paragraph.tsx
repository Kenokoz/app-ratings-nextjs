import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
	size = 'medium',
	className,
	children,
	...props
}) => (
	<p className={clsx(styles.p, styles[size], className)} {...props}>
		{children}
	</p>
);
