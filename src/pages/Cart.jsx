import Header from '../components/Header'
import SideCart from '../components/SideCart'
import FooterBig from '../components/FooterBig'
import './Cart.scss'
import visa from '../assets/icons/visa.svg'
import { React, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Modal from '../components/Modal'
import Alfabank from '../assets/images/alfabank.png'
import Sberbank from '../assets/images/sberbank.png'
import Plus from '../assets/icons/plus.svg'
import { Link } from 'react-router-dom'

const Cart = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	const [deliveryType, setDeliveryType] = useState('delivery')

	const [counter, setCounter] = useState(1)
	const increase = () => setCounter(count => count + 1)
	const decrease = () => {
		if (counter > 1) setCounter(count => count - 1)
	}

	const ModalContent = (
		<div className='modal__wrapper'>
			<div className='modal__heading'>Мои карты</div>
			<div className='modal__card-wrapper'>
				<img src={Alfabank} alt='alfabank' />
				<img src={Sberbank} alt='Sberbank' />
			</div>
			<button className='modal__add-card'>
				<img src={Plus} alt='plus' />
				<span>Добавить новую карту</span>
			</button>
		</div>
	)

	const deliveryContent = (
		<div className='cart__wrapper'>
			<div>
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
			</div>

			<div>
				<h5 className='cart__title'>Оплата</h5>
				<div className='cart__form-control'>
					<label className='cart__label' htmlFor='delivery'>
						<input
							type='radio'
							id='delivery'
							name='payment'
							value='delivery'
							defaultChecked
						/>
						Картой онлайн
					</label>
					<label className='cart__label' htmlFor='pickup'>
						<input type='radio' id='pickup' name='payment' value='pickup' />
						Картой курьеру
					</label>

					<label className='cart__label' htmlFor='restaurant'>
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
		</div>
	)

	const pickupContent = (
		<div className='cart__wrapper'>
			<div>
				<h5 className='cart__title'>Комментарий к заказу</h5>

				<input
					className='cart__address-input cart__comment'
					type='text'
					id='comment'
					name='comment'
				/>
			</div>

			<div>
				<h5 className='cart__title'>Оплата</h5>
				<div className='cart__form-control'>
					<label className='cart__label' htmlFor='delivery'>
						<input type='radio' id='delivery' name='payment' value='delivery' />
						Картой онлайн
					</label>

					<label className='cart__label' htmlFor='restaurant'>
						<input
							type='radio'
							id='restaurant'
							name='payment'
							value='restaurant'
							defaultChecked
						/>
						Оплата на месте
					</label>
				</div>
			</div>

			<div>
				<h5 className='cart__title'>Время</h5>
				<input
					className='cart__time-input'
					type='time'
					id='comment'
					name='comment'
					min='10:00'
					max='21:00'
				/>
			</div>
		</div>
	)

	const restaurantContent = (
		<div className='cart__wrapper'>
			<div>
				<h5 className='cart__title'>Комментарий к заказу</h5>

				<input
					className='cart__address-input cart__comment'
					type='text'
					id='comment'
					name='comment'
				/>
			</div>

			<div className='cart__row'>
				<div className='cart__date-wrapper'>
					<div>
						<h5 className='cart__title'>Дата</h5>
						<input
							className='cart__date-input'
							type='date'
							id='date'
							name='date'
						/>
					</div>
					<div>
						<h5 className='cart__title'>Время</h5>
						<input
							className='cart__time-input'
							type='time'
							id='time'
							name='time'
							min='10:00'
							max='21:00'
						/>
					</div>
				</div>

				<div>
					<h5 className='cart__title'>Оплата</h5>
					<div className='cart__form-control'>
						<label className='cart__label' htmlFor='delivery'>
							<input
								type='radio'
								id='delivery'
								name='payment'
								value='delivery'
								defaultChecked
							/>
							Картой онлайн
						</label>

						<label className='cart__label' htmlFor='restaurant'>
							<input
								type='radio'
								id='restaurant'
								name='payment'
								value='restaurant'
							/>
							Оплата на месте
						</label>
					</div>
				</div>
			</div>
		</div>
	)

	return (
		<>
			<Header />
			<div className='divider'></div>
			<div className='wrapper'>
				<div className='column-container'>
					<div className='column-main'>
						<div className='column-main__options'>
							<div className='column-main__primary'>
								{deliveryType === 'delivery' && deliveryContent}
								{deliveryType === 'pickup' && pickupContent}
								{deliveryType === 'restaurant' && restaurantContent}
							</div>
							<div className='column-main__delivery'>
								<div>
									<h5 className='cart__title'>Способ доставки</h5>
									<div className='cart__form-control'>
										<label className='cart__label' htmlFor='delivery'>
											<input
												type='radio'
												id='delivery'
												name='delivery-type'
												value='delivery'
												defaultChecked
												onClick={() => setDeliveryType('delivery')}
											/>
											Доставка на дом
										</label>
										<label className='cart__label' htmlFor='pickup'>
											<input
												type='radio'
												id='pickup'
												name='delivery-type'
												value='pickup'
												onClick={() => setDeliveryType('pickup')}
											/>
											Самовывоз
										</label>

										<label className='cart__label' htmlFor='restaurant'>
											<input
												type='radio'
												id='restaurant'
												name='delivery-type'
												value='restaurant'
												onClick={() => setDeliveryType('restaurant')}
											/>
											В ресторане
										</label>
									</div>
								</div>

								<div>
									<h5 className='cart__title'>Карта</h5>

									<div
										className='cart__credit-card'
										onClick={() => {
											modalOpen ? close() : open()
										}}
									>
										<span>1234</span>
										<img src={visa} alt='visa' />
									</div>
								</div>
							</div>
							<div className='column-main__total'>
								<div className='column-main__total-left'>
									{deliveryType === 'delivery' && (
										<div>
											<h5 className='column-main__subtitle'>Время доставки</h5>
											<span>~120 мин</span>
										</div>
									)}
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
						</div>
						<Link to='/delivery' className='submit-button'>
							Оформить заказ
						</Link>
					</div>

					<aside className='column-side'>
						<SideCart submit='noSubmit' />
					</aside>
				</div>
			</div>
			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				{modalOpen && (
					<Modal
						text={ModalContent}
						modalOpen={modalOpen}
						handleClose={close}
					/>
				)}
			</AnimatePresence>{' '}
			<FooterBig />
		</>
	)
}

export default Cart
