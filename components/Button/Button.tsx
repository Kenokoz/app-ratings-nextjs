import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

export const Button: FC<ButtonProps> = ({
	appearance,
	arrow = 'none',
	children,
	className,
	...props
}) => {
	return (
		<button
			className={clsx(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={clsx(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
