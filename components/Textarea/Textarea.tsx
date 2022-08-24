import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea: FC<TextareaProps> = ({ className, ...props }) => (
	<textarea className={clsx(styles.textarea, className)} {...props} />
);
