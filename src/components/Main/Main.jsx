import { useState, useEffect } from 'react';
import BlockLecture from '../BlockLecture/BlockLecture';
import BlockSession from '../BlockSession/BlockSession';
import Title from '../Title/Title';
import Gallery from '../Gallery/Gallery';
import Carousel from '../Carousel/Carousel';
import CardChessPlayer from '../CardChessPlayer/CardChessPlayer';
import GridGallery from '../GridGallery/GridGallery';
import { chessplayers } from '../../constants/constants';

import './Main.scss';


function Main({ width }) {	

	return (
		<main className="main">
			<BlockLecture width={width} />
			<BlockSession width={width} />
			<Title
				title="Этапы преображения Васюков " span="Будущие источники обогащения васюкинцев" />

			{width <= 1000 ?
				<Gallery width={width} />
				:
				<GridGallery />
			}

			<Carousel width={width}>
				{
					chessplayers.map((item) => {
						return (
							<CardChessPlayer
								key={item.id}
								image={item.img}
								title={item.title}
								subtitle={item.subtitle} />
						)
					})
				}
			</Carousel>
		</main>
	);
}

export default Main;