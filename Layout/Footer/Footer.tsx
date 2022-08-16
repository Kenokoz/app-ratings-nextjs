import React, { FC } from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<footer className={clsx(styles.footer, className)} {...props}>
			<div className={styles.reserved}>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};
