import { useState, useEffect } from 'react';
import Marquee from '../Marquee/Marquee';
import BlockLecture from '../BlockLecture/BlockLecture';
import BlockSession from '../BlockSession/BlockSession';
import Title from '../Title/Title';
import Gallery from '../Gallery/Gallery';
import Carousel from '../Carousel/Carousel';
import CardChessPlayer from '../CardChessPlayer/CardChessPlayer';
import GridGallery from '../GridGallery/GridGallery';
import { chessplayers } from '../../constants/constants';
import './Main.scss';


function Main() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.innerWidth)
		};
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		};
	}, [width]);

	return (
		<main className="main">
			<Marquee />
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