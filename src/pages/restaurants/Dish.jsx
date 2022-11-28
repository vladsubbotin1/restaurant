import Header from '../../components/Header'
import SideCart from '../../components/SideCart'
import FooterBig from '../../components/FooterBig'
import Cart from '../../assets/icons/cart.svg'
import Dislike from '../../assets/icons/dislike.svg'
import Like from '../../assets/icons/like.svg'
import './Dish.scss'
import Share from '../../assets/icons/share.svg'
import { useState } from 'react'
import Menu from '../../components/Menu'
import Modal from '../../components/Modal'
import { AnimatePresence } from 'framer-motion'

const Dish = () => {
	const [likes, setLikes] = useState(563)
	const [isLiked, setIsLiked] = useState(false)

	const [modalOpen, setModalOpen] = useState(false)
	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	const [counter, setCounter] = useState(1)
	const increase = () => setCounter(count => count + 1)
	const decrease = () => {
		if (counter > 1) setCounter(count => count - 1)
	}

	const modalContent = (
		<div className='modal__wrapper'>
			<div className='modal__heading'>Дополнительные опции</div>
			<span className='grey-text'>Добавка:</span>
			<div className='toppings__wrapper'>
				<label className='cart__label' htmlFor='strawberry'>
					<input
						type='radio'
						id='strawberry'
						name='delivery-type'
						value='strawberry'
						defaultChecked
					/>
					Клубника <span className='grey-text'> +0 ₽</span>
				</label>

				<label className='cart__label' htmlFor='apple'>
					<input type='radio' id='apple' name='delivery-type' value='apple' />
					Яблоко <span className='grey-text'> +0 ₽</span>
				</label>

				<label className='cart__label' htmlFor='pear'>
					<input type='radio' id='pear' name='delivery-type' value='pear' />
					Груша <span className='grey-text'> +0 ₽</span>
				</label>

				<label className='cart__label' htmlFor='blackberry'>
					<input
						type='radio'
						id='blackberry'
						name='delivery-type'
						value='blackberry'
					/>
					Черная смородина <span className='grey-text'> +0 ₽</span>
				</label>

				<label className='cart__label' htmlFor='raspberry'>
					<input
						type='radio'
						id='raspberry'
						name='delivery-type'
						value='raspberry'
					/>
					Малина <span className='grey-text'> +0 ₽</span>
				</label>

				<label className='cart__label' htmlFor='banana'>
					<input type='radio' id='banana' name='delivery-type' value='banana' />
					Банан <span className='grey-text'> +0 ₽</span>
				</label>
			</div>
			<span className='grey-text'>Напиток:</span>
			<div className='beverage__wrapper'>
				<label className='cart__label' htmlFor='pepsi'>
					<input
						type='radio'
						id='pepsi'
						name='delivery-type'
						value='pepsi'
						defaultChecked
					/>
					Pepsi (0.5 л)<span className='grey-text'> +80 ₽</span>
				</label>
				<label className='cart__label' htmlFor='sprite'>
					<input type='radio' id='sprite' name='delivery-type' value='sprite' />
					Sprite (0.5 л) <span className='grey-text'> +90 ₽</span>
				</label>
			</div>

			<div className='toppings__controls-wrapper'>
				<div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
					<button
						className='submit-button'
						style={{ marginTop: '0px', width: '255px' }}
					>
						Добавить в корзину
					</button>
					<div
						className='counter'
						style={{
							width: '180px',
							height: '50px',
							border: '2px solid #FF4A76',
							borderRadius: '10px',
						}}
					>
						<button
							className='control__btn'
							style={{ fontSize: '25px' }}
							onClick={decrease}
						>
							-
						</button>
						<span className='counter__output' style={{ color: '#333' }}>
							{counter}
						</span>

						<button
							className='control__btn'
							style={{ fontSize: '25px' }}
							onClick={increase}
						>
							+
						</button>
					</div>
				</div>

				<span className=''>224₽</span>
			</div>
		</div>
	)

	const like = () => {
		if (!isLiked === true) {
			setLikes(like => like + 1)
			setIsLiked(true)
		}
	}

	const dislike = () => {
		if (likes > 0 && !isLiked === true) {
			setLikes(like => like - 1)
			setIsLiked(true)
		}
	}

	const recommendItems = [
		{
			id: 1,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'pancake.jpg',
		},
		{
			id: 2,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'muffin.jpg',
		},
		{
			id: 3,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'salad.jpg',
		},
		{
			id: 4,
			heading: 'Название блюда',
			weight: '300гр',
			price: '144₽',
			desc: 'Описание блюда',
			oldPrice: '180₽',
			imgUrl: 'porridge.jpg',
		},
		{
			id: 5,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'soup.jpg',
		},
	]

	return (
		<>
			<div className='wrapper'>
				<Header />
			</div>
			<div className='wrapper'>
				<div className='column-container'>
					<div className='column-main'>
						<div className='dish-card'>
							<h4 className='dish-card__heading'>Название ресторана</h4>
							<h3 className='dish-card__name'>Гранола с йогуртом</h3>
							<div className='dish-card__desc'>
								Гранола с орехами, классическим йогуртом и фруктами на выбор
							</div>
							<div className='divider'></div>
							<div className='dish-card__footer'>
								<div className='dish-card__cook-time'>
									<span>Время приготовления</span>
									<span>00:15</span>
								</div>
								<div className='dish-card__calories'>
									<span>Калорийность (на 100 гр.)</span>
									<span>256 Ккал</span>
								</div>
								<div className='dish-card__weight'>
									<span>Масса </span>
									<span>300 гр.</span>
								</div>
								<div
									className='dish-card__price'
									onClick={() => {
										modalOpen ? close() : open()
									}}
								>
									<span>144₽</span>
									<div>
										<img src={Cart} alt='cart' />
									</div>
								</div>
							</div>
						</div>
						<div className='dish-desc'>
							<div className='dish-desc__wrapper'>
								<div className='dish-desc__item'>
									<div className='dish-desc__desc-heading'>Описание</div>
									<div className='dish-desc__desc'>
										Это традиционная для США еда для завтрака или снэк,
										содержащий плющеную овсяную крупу, орехи и мёд, иногда рис,
										которые обычно запечены до хрустящего состояния. ... Её
										запекают до хрустящего состояния, используют мёд (который
										карамелизируется, добавляя корочку).
									</div>
								</div>
								<div className='dish-desc__item'>
									<div className='dish-desc__desc-heading'>Состав</div>
									<div className='dish-desc__desc'>
										Гранола с орехами, классическим йогуртом и фруктами
									</div>
									<div className='dish-desc__allergy'>Осторожно, аллергия!</div>
								</div>
								<div className='dish-desc__item'>
									<div className='dish-desc__row'>
										<div className='dish-desc__price-wrapper'>
											<span style={{ color: '#999999' }}>Цена</span>
											<span className='dish-desc__price'>144₽</span>
										</div>
										<div className='dish-desc__price-wrapper'>
											<span style={{ color: '#999999' }}>Рейтинг</span>
											<div className='dish-desc__likes-wrapper'>
												<img src={Dislike} alt='Dislike' onClick={dislike} />
												<span className='dish-desc__likes-value'>{likes}</span>
												<img src={Like} alt='Like' onClick={like} />
											</div>
										</div>
									</div>
								</div>
								<div className='dish-desc__buttons-wrapper'>
									<button className='dish-desc__add-cart'>
										Добавить в корзину
									</button>
									<div class='dish-desc__share'>
										<img src={Share} alt='button' />
										<span className='grey-text'>Поделиться</span>
									</div>
								</div>
							</div>

							<div className='divider'></div>

							<div className='dish-recommend'>
								<h5 className='dish-recommend__heading'>Рекомендуем также</h5>
								<div class='dish-recommend__card-container'>
									<Menu
										items={recommendItems}
										marginTop='noMargin'
										slider='yes'
									/>
								</div>
							</div>
						</div>
					</div>
					<aside className='column-side'>
						<SideCart />
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
						text={modalContent}
						modalOpen={modalOpen}
						handleClose={close}
					/>
				)}
			</AnimatePresence>
			<FooterBig />
		</>
	)
}

export default Dish
