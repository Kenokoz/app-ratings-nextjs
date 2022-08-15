/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Fragment, KeyboardEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';

export const Rating: FC<RatingProps> = ({
	rating,
	setRating,
	isEditable = false,
	className,
	...props
}) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const changeDisplay = (rateNum: number) => {
		if (!isEditable) {
			return;
		}

		constructRating(rateNum);
	};

	const onStarClick = (rateNum: number) => {
		if (!isEditable || !setRating) {
			return;
		}

		setRating(rateNum);
	};

	const onStartSelectBySpace = (e: KeyboardEvent<SVGAElement>, rateNum: number) => {
		if (!isEditable || e.code != 'Space' || !setRating) {
			return;
		}

		setRating(rateNum);
	};

	const constructRating = (currentRating: number) => {
		const updatedArr = ratingArray.map((item, i) => (
			<span
				className={clsx(styles.star, className, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isEditable,
				})}
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => onStarClick(i + 1)}
			>
				<StarIcon
					onKeyDown={(e) => onStartSelectBySpace(e, i + 1)}
					tabIndex={isEditable ? 0 : -1}
				/>
			</span>
		));

		setRatingArray(updatedArr);
	};

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	return (
		<div {...props}>
			{ratingArray.map((rate, i) => (
				<Fragment key={i}>{rate}</Fragment>
			))}
		</div>
	);
};
