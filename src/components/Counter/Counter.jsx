import './Counter.scss';

function Counter({ count }) {

	return (
		<div className="counter">
			<p data-id="1" className='counter__count'>
				<span className='counter__count-span'>
					{count}
				</span> / 6
			</p>
		</div>
	);
}

export default Counter;