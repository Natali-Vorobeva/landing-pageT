import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import FlexItems from '../FlexItems/FlexItems';
import Dots from '../Dots/Dots';
import { flexElements } from '../../constants/constants'
import plane from '../../assets/images/plane-640.webp'

import './Gallery.scss';

function Gallery({ width }) {
	const [slideWidth, setSlideWidth] = useState(0)
	const [offset, setOffset] = useState(0)
	const [disabledButtonLeft, setDisabledButtonLeft] = useState('disabled')
	const [disabledButtonRight, setDisabledButtonRight] = useState('')
	const maxOffsetMax = -(slideWidth * 3)
	const maxOffsetSmall = -(slideWidth * 4)
	const [index, setIndex] = useState(0)
	const [indexDouble, setIndexDouble] = useState(index + 1)

	useEffect(() => {
		setIndexDouble(Math.ceil(index + 1))
	}, [index])

	useEffect(() => {
		if (width > 673) {
			setSlideWidth(50)
		} else if (width <= 673) {
			setSlideWidth(100)
		}
	}, [width])

	useEffect(() => {
		offset < 0 ? setDisabledButtonLeft('') : setDisabledButtonLeft('disabled')
	}, [offset])

	const handleClickLeftButton = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + slideWidth;
			setIndex((prevIndex) =>
				prevIndex === 6 ? 0 : prevIndex - .5
			)
			offset >= 0 ? setDisabledButtonRight('disabled') : setDisabledButtonRight('')
			return Math.min(newOffset, 0)
		})
	}

	const handleClickRightButton = () => {
		setOffset((currentOffset) => {
			setIndex((prevIndex) =>
				prevIndex === 6 ? 0 : prevIndex + .5
			)
			const newOffset = currentOffset - slideWidth;
			const maxOffset = width <= 673 ? maxOffsetSmall : maxOffsetMax
			newOffset == maxOffset ? setDisabledButtonRight('disabled') : setDisabledButtonRight('')
			return Math.max(newOffset, maxOffset)
		})
	}

	return (
		<div className="gallery">
			<div className="gallery__plane">
				<img className="gallery__image" src={plane} alt="Самолёт" />
			</div>
			<div className="container">
				<div className="gallery__content"
				>
					<FlexItems offset={offset} flexElements={flexElements} />
				</div>
			</div>

			<Navigation
				navigation={true}
				width={width}
				clickLeft={handleClickLeftButton}
				clickRight={handleClickRightButton}
				disabledButtonLeft={disabledButtonLeft}
				disabledButtonRight={disabledButtonRight}
				className="navigation__position">

				{
					flexElements.map(((_, idx) => {
						return (
							<Dots
								key={idx}
								idx={idx}
								width={width}
								index={index} 
								indexDouble={indexDouble}
								/>
						)
					}))
				}
			</Navigation >
		</div >
	)
}

export default Gallery;