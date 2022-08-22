import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';

export const Sort: FC<SortProps> = ({ sort, setSort, className, ...props }) => (
	<div className={clsx(styles.sort, className)} {...props}>
		<span
			className={clsx({
				[styles.active]: sort === SortEnum.Rating,
			})}
			onClick={() => setSort(SortEnum.Rating)}
		>
			<SortIcon className={styles.sortIcon} />
			По рейтингу
		</span>
		<span
			className={clsx({
				[styles.active]: sort === SortEnum.Price,
			})}
			onClick={() => setSort(SortEnum.Price)}
		>
			<SortIcon className={styles.sortIcon} />
			По цене
		</span>
	</div>
);
