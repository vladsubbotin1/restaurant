import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Menu.scss'
import { ReactComponent as Cart } from '../assets/icons/cart.svg'

const Menu = props => {
	const content = props.items.map(item => (
		<div className='restaurant-menu__item' key={item.id}>
			<div className='restaurant-menu__heading-container'>
				<div>
					<Link to='/seoul/dish'>
						<span className='restaurant-menu__heading'>{item.heading}</span>
					</Link>
					<span className='restaurant-menu__weight'>{item.weight}</span>
				</div>
				<span className='restaurant-menu__price'>{item.price}</span>
			</div>
			<div className='restaurant-menu__desc-container'>
				<span className='restaurant-menu__desc'>{item.desc}</span>
				<span className='restaurant-menu__old-price'>{item.oldPrice}</span>
			</div>
			<div className='restaurant-menu__img-wrapper'>
				<div className='restaurant-menu__cart-icon'>
					<Cart />
				</div>

				<img
					src={require('../assets/images/restaurants/Seoul/'.concat(
						`${item.imgUrl}`
					))}
					alt='item'
				/>
			</div>
		</div>
	))
	return (
		<div
			className='restaurant-cat'
			style={{ marginTop: props.marginTop === 'noMargin' ? '0px' : '' }}
		>
			{props.marginTop !== 'noMargin' && (
				<>
					<span className='restaurant-cat__heading'>{props.categoryName}</span>
					<span className='restaurant-cat__amount'>{props.itemAmount}</span>
				</>
			)}

			<div
				className='restaurant-cat__list'
				style={{ flexWrap: props.slider === 'yes' ? 'nowrap' : '' }}
			>
				{content}
			</div>
		</div>
	)
}

export default Menu
