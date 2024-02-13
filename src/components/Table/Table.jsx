import './Table.scss';

function Table() {

	return (

		<div className="table">
			<table className="table__wrap">
				<tbody>
					<tr className="table__tr">
						<td className="table__td" data-label="Место проведения:"><p className="table__text">Клуб «Картонажник»</p></td>
						<td className="table__td" data-label="Дата и время мероприятия:">22 июня 1927 г. в 18:00</td>
						<td className="table__td" data-label="Стоимость входных билетов:">20 коп.</td>
						<td className="table__td" data-label="Плата за игру:">50 коп.</td>
						<td className="table__td" data-label="Взнос на телеграммы:"><del className='table__del'><span className='table__span'>100 руб.</span></del>&nbsp;&nbsp;21 руб. 16 коп.</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table;