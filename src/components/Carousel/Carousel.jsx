import { Children, useEffect, useState, cloneElement } from 'react';
import Navigation from '../Navigation/Navigation';
import Title from '../Title/Title';

import './Carousel.scss';

const Carousel = ({ children }) => {
	const width = window.innerWidth
	const [pages, setPages] = useState([])
	const [offset, setOffset] = useState(0)
	const [disabledButtonLeft, setDisabledButtonLeft] = useState('disabled')
	const [disabledButtonRight, setDisabledButtonRight] = useState('')
	const [slideWidth, setSlideWidth] = useState(0)
	const [countMaxSlider, setCountMaxSlider] = useState(3)
	const [countMediumSlider, setCountMediumSlider] = useState(2)
	const [countSmallSlider, setCountSmallSlider] = useState(1)
	const maxOffsetMax = -(slideWidth * (pages.length - 3))
	const maxOffsetMedium = -(slideWidth * (pages.length - 2))
	const maxOffsetSmall = -(slideWidth * (pages.length - 1))

	let count = width <= 375 ? countSmallSlider : width <= 626 ? countMediumSlider : countMaxSlider

	useEffect(() => {
		if (width <= 375) {
			setSlideWidth(100)
		} else if (width <= 626) {
			setSlideWidth(50)
		} else {
			setSlideWidth(100 / 3)
		}
	}, [width])

	useEffect(() => {
		offset < 0 ? setDisabledButtonLeft('') : setDisabledButtonLeft('disabled')
	}, [offset])

	useEffect(() => {
		count == 6 ? setDisabledButtonRight('disabled') : setDisabledButtonRight('')
	}, [count])

	const handleClickLeftButton = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + slideWidth;
			return Math.min(newOffset, 0)
		})
		setCountMaxSlider((currentCount) => {
			const newCount = currentCount - 1
			return Math.min(newCount, 6)
		})
		setCountSmallSlider((currentCount) => {
			const newCount = currentCount - 1
			return Math.min(newCount, 6)
		})
		setCountMediumSlider((currentCount) => {
			const newCount = currentCount - 1
			return Math.min(newCount, 6)
		})
	}

	const handleClickRightButton = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - slideWidth;
			const maxOffset = width <= 375 ? maxOffsetSmall : width <= 626 ? maxOffsetMedium : maxOffsetMax
			maxOffset === newOffset ? setDisabledButtonRight('disabled') : setDisabledButtonRight('')
			return Math.max(newOffset, maxOffset)
		})
		setCountMaxSlider((currentCount) => {
			const newCount = currentCount + 1
			return Math.min(newCount, 6)
		})
		setCountSmallSlider((currentCount) => {
			const newCount = currentCount + 1
			return Math.min(newCount, 6)
		})
		setCountMediumSlider((currentCount) => {
			const newCount = currentCount + 1
			return Math.min(newCount, 6)
		})
	}

	useEffect(() => {
		setPages(
			Children.map(children, (child) => {
				return cloneElement(child, {})
			})
		)
	}, [])

	return (
		<>
			<div className="carousel container">
				<div className="carousel__header">
					<Title title="Участники турнира" />
					{width > 1000 && (<Navigation
						counter={true}
						width={width}
						clickLeft={handleClickLeftButton}
						clickRight={handleClickRightButton}
						disabledButtonLeft={disabledButtonLeft}
						disabledButtonRight={disabledButtonRight}
						countMaxSlider={countMaxSlider}
						countMediumSlider={countMediumSlider}
						countSmallSlider={countSmallSlider}
						className="navigation__slider" />
					)}
				</div>
				<div className="carousel__window">
					<div className="carousel__items-container"
						style={{
							transform: `translateX(${offset}%)`
						}}
					>
						{pages}
					</div>
				</div>
			</div>
			{
				width <= 1000 && (
					<Navigation
						disabledButtonLeft={disabledButtonLeft}
						disabledButtonRight={disabledButtonRight}
						width={width}
						clickLeft={handleClickLeftButton}
						clickRight={handleClickRightButton}
						counter={true}
						countMaxSlider={countMaxSlider}
						countMediumSlider={countMediumSlider}
						countSmallSlider={countSmallSlider}
						className="navigation__bottom"
					/>
				)
			}
		</>
	);
}

export default Carousel;