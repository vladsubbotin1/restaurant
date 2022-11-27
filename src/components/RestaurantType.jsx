import Img1 from '../assets/images/type-preview/1.jpg'
import Img2 from '../assets/images/type-preview/2.jpg'
import Img3 from '../assets/images/type-preview/3.jpg'
import Img4 from '../assets/images/type-preview/4.jpg'
import Img5 from '../assets/images/type-preview/5.jpg'
import Img6 from '../assets/images/type-preview/6.jpg'
import './styles/RestaurantType.scss'

const restaurantType = () => {
	let data = [
		{
			id: 1,
			desc: 'Love суши',
			imgSrc: Img1,
			isActive: true,
		},
		{
			id: 2,
			desc: 'Веранда',
			imgSrc: Img2,
			isActive: false,
		},
		{
			id: 3,
			desc: 'Азиатский стиль',
			imgSrc: Img3,
			isActive: true,
		},
		{
			id: 4,
			desc: 'Матрешка',
			imgSrc: Img4,
			isActive: false,
		},
		{
			id: 5,
			desc: 'Urban Burger',
			imgSrc: Img5,
			isActive: true,
		},
		{
			id: 6,
			desc: 'Проспект',
			imgSrc: Img6,
			isActive: true,
		},
	]

	return (
		<div className='gallery'>
			{data.map((item, index) => {
				return (
					<div className='gallery__pics' key={index}>
						<img src={item.imgSrc} alt='restaurant' />
						<span
							className='gallery__desc'
							style={{ color: item.isActive === false ? '#999' : '' }}
						>
							{item.desc}
						</span>
					</div>
				)
			})}
		</div>
	)
}

export default restaurantType
