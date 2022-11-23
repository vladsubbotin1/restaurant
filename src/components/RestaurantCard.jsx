import Img1 from '../assets/images/restaurant-card/1.jpg'
import Img2 from '../assets/images/restaurant-card/2.jpg'
import Img3 from '../assets/images/restaurant-card/3.jpg'
import Img4 from '../assets/images/restaurant-card/4.jpg'
import Img5 from '../assets/images/restaurant-card/5.jpg'
import Img6 from '../assets/images/restaurant-card/6.jpg'
import Img7 from '../assets/images/restaurant-card/7.jpg'
import Img8 from '../assets/images/restaurant-card/8.jpg'
import Img9 from '../assets/images/restaurant-card/9.jpg'
import Img10 from '../assets/images/restaurant-card/10.jpg'
import Img11 from '../assets/images/restaurant-card/11.jpg'
import Img12 from '../assets/images/restaurant-card/12.jpg'
import './styles/RestaurantCard.scss'
import { Link } from 'react-router-dom'

const restaurantCard = () => {
	let data = [
		{
			id: 1,
			name: 'Seoul',
			desc: 'ул. Радищева, 19/21',
			imgSrc: Img1,
			isActive: true,
		},
		{
			id: 2,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img2,
			isActive: true,
		},
		{
			id: 3,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img3,
			isActive: true,
		},
		{
			id: 4,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img4,
			isActive: true,
		},
		{
			id: 5,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img5,
			isActive: false,
		},
		{
			id: 6,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img6,
			isActive: true,
		},
		{
			id: 7,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img7,
			isActive: true,
		},
		{
			id: 8,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img8,
			isActive: true,
		},
		{
			id: 9,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img9,
			isActive: true,
		},
		{
			id: 10,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img10,
			isActive: true,
		},
		{
			id: 11,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img11,
			isActive: true,
		},
		{
			id: 12,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img12,
			isActive: true,
		},
	]

	return (
		<div className='restaurant-list'>
			{data.map(item => {
				return (
					<div
						className={
							item.isActive === true
								? 'restaurant-list__pics'
								: 'restaurant-list__pics restaurant-list__pics-inactive'
						}
						key={item.id}
					>
						<Link to={item.name.toLowerCase()}>
							<div className='restaurant-list__img-wrapper'>
								<img src={item.imgSrc} alt='restaurant' />
								{!item.isActive && (
									<div className='restaurant-list__closed'>
										Закрыто до 10:00
									</div>
								)}
							</div>

							<div className='restaurant-list__text'>
								<span className='restaurant-list__name'>{item.name}</span>
								<span className='restaurant-list__desc'>{item.desc}</span>
							</div>
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default restaurantCard
