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
		},
		{
			id: 2,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img2,
		},
		{
			id: 3,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img3,
		},
		{
			id: 4,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img4,
		},
		{
			id: 5,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img5,
		},
		{
			id: 6,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img6,
		},
		{
			id: 7,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img7,
		},
		{
			id: 8,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img8,
		},
		{
			id: 9,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img9,
		},
		{
			id: 10,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img10,
		},
		{
			id: 11,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img11,
		},
		{
			id: 12,
			name: 'Название ресторана',
			desc: 'ул. Шехурдина, 28, ТЦ “Торговый центр" 7 этаж, фудкорт',
			imgSrc: Img12,
		},
	]

	return (
		<div className='restaurant-list'>
			{data.map((item, index) => {
				return (
					<div className='restaurant-list__pics' key={index}>
						<Link to={item.name.toLowerCase()}>
							<img src={item.imgSrc} alt='restaurant' />
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
