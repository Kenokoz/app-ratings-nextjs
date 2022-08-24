import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import clsx from 'clsx';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/router';

export const Search: FC<SearchProps> = ({ className, ...props }) => {
	const router = useRouter();
	const [search, setSearch] = useState('');

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const onGoToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search,
			},
		});
	};

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onGoToSearch();
		}
	};

	return (
		<div className={clsx(styles.search, className)} {...props}>
			<Input
				className={styles.input}
				value={search}
				onChange={onInputChange}
				placeholder="Поиск..."
				onKeyDown={onKeyDown}
			/>
			<Button className={styles.button} appearance="primary" onClick={onGoToSearch}>
				<GlassIcon />
			</Button>
		</div>
	);
};
