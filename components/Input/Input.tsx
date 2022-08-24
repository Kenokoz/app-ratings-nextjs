import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input: FC<InputProps> = ({ className, ...props }) => (
	<input className={clsx(styles.input, className)} {...props} />
);
