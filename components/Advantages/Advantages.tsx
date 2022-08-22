import React, { FC } from 'react';
import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './check.svg';

export const Advantages: FC<AdvantagesProps> = ({ advantages }) => (
	<>
		{advantages.map((a) => (
			<div key={a._id} className={styles.advantage}>
				{a.title && (
					<>
						<CheckIcon />
						<div className={styles.title}>{a.title}</div>
					</>
				)}
				{a.description && (
					<>
						<div className={styles.verticalLine} />
						<div>{a.description}</div>
					</>
				)}
			</div>
		))}
	</>
);
