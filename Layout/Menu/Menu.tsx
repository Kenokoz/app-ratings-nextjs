import React, { useContext } from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';

export const Menu = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	return (
		<div>
			<ul>
				{menu.map((item) => (
					<li key={item._id.secondCategory}>{item._id.secondCategory}</li>
				))}
			</ul>
		</div>
	);
};
