import { Link } from 'react-router-dom'
import './styles/Menu.scss'

const Menu = props => {
	const content = props.items.map(item => (
		<div className='restaurant-menu__item'>
			<Link to='/seoul/dish'>
				<div className='restaurant-menu__heading-container'>
					<div>
						<span className='restaurant-menu__heading'>{item.heading}</span>
						<span className='restaurant-menu__weight'>{item.weight}</span>
					</div>
					<span className='restaurant-menu__price'>{item.price}</span>
				</div>
				<div className='restaurant-menu__desc-container'>
					<span className='restaurant-menu__desc'>{item.desc}</span>
					<span className='restaurant-menu__old-price'>{item.oldPrice}</span>
				</div>
				<img
					src={require('../assets/images/restaurants/Seoul/'.concat(
						`${item.imgUrl}`
					))}
					alt='item'
				/>
			</Link>
		</div>
	))
	return (
		<div className='restaurant-cat'>
			<span className='restaurant-cat__heading'>{props.categoryName}</span>
			<span className='restaurant-cat__amount'>{props.itemAmount}</span>
			<div className='restaurant-cat__list'>{content}</div>
		</div>
	)
}

export default Menu
