import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Gift } from '../assets/icons/gift-pink.svg'
import Trash from '../assets/icons/trash.svg'
import '../components/styles/SideCart.scss'

const SideCart = props => {
	const order = [
		{
			id: 1,
			name: 'Гранола с йогуртом',
			weight: '300гр',
			topping: 'Черная смородина',
			quantity: '2',
			price: '360₽',
		},
		{
			id: 2,
			name: 'Название блюда',
			weight: '5гр',
			topping: 'Добавки при наличии выбора таковых',
			quantity: '1',
			price: '100₽',
		},
		{
			id: 3,
			name: 'Название блюда',
			weight: '10гр',
			quantity: '5',
			price: '500₽',
		},
		{
			id: 4,
			name: 'Длинное название блюда',
			weight: '15гр',
			quantity: '1',
			price: '100₽',
		},
		{
			id: 5,
			name: 'Суп-лапша с курицей',
			weight: '250гр',
			quantity: '1',
			price: <Gift className='side-cart__gift' alt='gift'></Gift>,
		},
	]

	const [orders, setOrders] = useState(order)

	const clearOrder = () => {
		setOrders([])
	}

	return (
		<>
			<div className='side-cart'>
				<div className='side-cart__list'>
					<div className='side-cart__heading'>
						<span>Мой заказ</span>
						<img src={Trash} alt='trash-icon' onClick={clearOrder} />
					</div>
					<div className='side-cart__dishes'>
						{orders.map(order => (
							<div className='side-cart__item' key={order.id}>
								<div className='side-cart__about'>
									<span className='side-cart__name'>{order.name}&nbsp;</span>
									<span className='side-cart__weight'>{order.weight}</span>
									<span className='side-cart__topping'>{order.topping}</span>
								</div>
								<div className='side-cart__quantity'>{order.quantity}</div>
								<div className='side-cart__price'>{order.price}</div>
							</div>
						))}

						<div className='side-cart__item'>
							<span className='side-cart__name'>Скидка 20%&nbsp;</span>
							<span className='side-cart__discount'>-72₽</span>
						</div>
						<div className='divider' style={{ margin: '5px 0' }}></div>
						<div className='side-cart__item'>
							<span className='side-cart__delivery'>Доставка&nbsp;</span>
							<span className='side-cart__price'>100₽</span>
						</div>
					</div>
				</div>

				{props.submit !== 'noSubmit' && (
					<Link to='/cart'>
						<button className='side-cart__button'>Оформить заказ</button>
					</Link>
				)}
			</div>
		</>
	)
}

export default SideCart
