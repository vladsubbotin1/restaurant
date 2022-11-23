import Header from '../components/Header'
import SideCart from '../components/SideCart'
import FooterBig from '../components/FooterBig'
import './Cart.scss'
import visa from '../assets/icons/visa.svg'
import { React, useState } from 'react'

const Cart = () => {
	const [counter, setCounter] = useState(1)

	const increase = () => {
		setCounter(count => count + 1)
	}

	const decrease = () => {
		if (counter > 1) setCounter(count => count - 1)
	}

	return (
		<>
			<Header />
			<div className='divider'></div>
			<div className='wrapper'>
				<div className='column-container'>
					<div className='column-main'>
						<div className='column-main__primary'>
							<h5 className='cart__title'>Адрес доставки</h5>
							<div className='column-main__row'>
								<input
									className='cart__address-input'
									type='text'
									id='address'
									name='address'
									placeholder='Ваш адрес'
								/>
							</div>
							<div className='column-main__row'>
								<div className='span-4'>
									<div className='column-main__subtitle'>Квартира/офис</div>
									<input
										type='text'
										id='flat'
										name='flat'
										className='cart__address-input'
									/>
								</div>
								<div className='span-4'>
									<div className='column-main__subtitle'>Подъезд</div>
									<input
										type='text'
										id='flat'
										name='flat'
										className='cart__address-input'
									/>
								</div>
								<div className='span-4'>
									<div className='column-main__subtitle'>Этаж</div>
									<input
										type='text'
										id='flat'
										name='flat'
										className='cart__address-input'
									/>
								</div>
								<div className='span-4'>
									<div className='column-main__subtitle'>Домофон</div>
									<input
										type='text'
										id='flat'
										name='flat'
										className='cart__address-input'
									/>
								</div>
							</div>

							<div className='column-main__subtitle'>Комментарий</div>
							<input
								className='cart__address-input cart__comment'
								type='text'
								id='comment'
								name='comment'
							/>

							<h5 className='cart__title'>Способ доставки</h5>
							<div className='cart__form-control'>
								<label className='cart__label' for='delivery'>
									<input
										type='radio'
										id='delivery'
										name='payment'
										value='delivery'
										defaultChecked
									/>
									Картой онлайн
								</label>
								<label className='cart__label' for='pickup'>
									<input
										type='radio'
										id='pickup'
										name='payment'
										value='pickup'
									/>
									Картой курьеру
								</label>

								<label className='cart__label' for='restaurant'>
									<input
										type='radio'
										id='restaurant'
										name='payment'
										value='restaurant'
									/>
									Наличными курьеру
								</label>
							</div>
						</div>
						<div className='column-main__delivery'>
							<h5 className='cart__title'>Способ доставки</h5>
							<div className='cart__form-control'>
								<label className='cart__label' for='delivery'>
									<input
										type='radio'
										id='delivery'
										name='delivery-type'
										value='delivery'
										defaultChecked
									/>
									Доставка на дом
								</label>
								<label className='cart__label' for='pickup'>
									<input
										type='radio'
										id='pickup'
										name='delivery-type'
										value='pickup'
									/>
									Самовывоз
								</label>

								<label className='cart__label' for='restaurant'>
									<input
										type='radio'
										id='restaurant'
										name='delivery-type'
										value='restaurant'
									/>
									В ресторане
								</label>

								<h5 className='cart__title'>Карта</h5>

								<div className='cart__credit-card'>
									<span>1234</span>
									<img src={visa} alt='visa' />
								</div>
							</div>
						</div>
						<div className='column-main__total'>
							<div className='column-main__total-left'>
								<div>
									<h5 className='column-main__subtitle'>Время доставки</h5>
									<span>~120 мин</span>
								</div>
								<div>
									<h5 className='column-main__subtitle'>Итого</h5>
									<span>1088₽</span>
								</div>
							</div>

							<div className='column-main__person-count'>
								<span>Количество персон</span>
								<div className='counter'>
									<button className='control__btn' onClick={decrease}>
										-
									</button>
									<span className='counter__output'>{counter}</span>

									<button className='control__btn' onClick={increase}>
										+
									</button>
								</div>
							</div>
						</div>
						<div className='submit-button'>Оформить заказ</div>
					</div>

					<aside className='column-side'>
						<SideCart submit='noSubmit' />
					</aside>
				</div>
			</div>
			<FooterBig />
		</>
	)
}

export default Cart
