import Header from '../../components/Header'
import './Seoul.scss'
import Book from '../../assets/icons/book.svg'
import Info from '../../assets/icons/info.svg'
import RestaurantInformer from '../../components/RestaurantInformer'
import SideCart from '../../components/SideCart'
import Menu from '../../components/Menu'
import FooterBig from '../../components/FooterBig'
import { useState } from 'react'

const Seoul = () => {
	const [flagStatus, setFlagStatus] = useState('sale')

	const saleItems = [
		{
			id: 1,
			heading: 'Гранола с йогуртом',
			weight: '300гр',
			price: '144₽',
			desc: 'Гранола с орехами, классическим йогуртом и фруктами на выбор',
			oldPrice: '180₽',
			imgUrl: 'granola.jpg',
			link: '/seoul/granola',
		},
		{
			id: 2,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'omelette.jpg',
		},
		{
			id: 3,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'muffin.jpg',
		},
		{
			id: 4,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'pancake.jpg',
		},
	]
	const lunchItems = [
		{
			id: 1,
			heading: 'Гранола с йогуртом',
			weight: '300гр',
			price: '144₽',
			desc: 'Гранола с орехами, классическим йогуртом и фруктами на выбор',
			oldPrice: '180₽',
			imgUrl: 'soup.jpg',
		},
		{
			id: 2,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'salad.jpg',
		},
	]
	const breakfastItems = [
		{
			id: 1,
			heading: 'Название блюда',
			weight: '300гр',
			price: '144₽',
			desc: 'Описание блюда',
			oldPrice: '180₽',
			imgUrl: 'porridge.jpg',
		},
		{
			id: 2,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'soup.jpg',
		},
		{
			id: 3,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'muffin.jpg',
		},
		{
			id: 4,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'pancake.jpg',
		},
		{
			id: 5,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'salad.jpg',
		},
		{
			id: 6,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'granola.jpg',
		},
	]

	return (
		<>
			<div className='wrapper'>
				<Header />
			</div>
			<div className='divider'></div>
			<div className='wrapper'>
				<div className='column-container'>
					<div className='column-main restaurant__column-main'>
						<div className='restaurant-header__root'>
							<div className='restaurant-header__text'>
								<h1 className='restaurant-header__heading'>Seoul</h1>
								<div className='restaurant-header__subheading'>
									+7 (987) 654-32-10
								</div>
								<div className='restaurant-header__divider'></div>
								<div className='restaurant-header__actions'>
									<div className='restaurant-header__book'>
										<img src={Book} alt='book' />
										<span>Забронировать столик</span>
									</div>
									<div className='restaurant-header__info'>
										<span>Информация о ресторане</span>
										<div className='restaurant-header__tooltip'>
											<h5>Название ресторана</h5>
											<span>2-я Садовая улица, 111Д Доставка до 19:00</span>
											<span> Домашняя Европейская Завтраки Ланчи ₽</span>
											<span>
												Исполнитель (продавец): ИП Иванов Иван Иванович, 411111,
												ул Первая, д 1, кв 1, ИНН 111111111111, рег.номер
												111111111111111.
											</span>
											<span>Режим работы: с 07:00 до 19:00</span>
										</div>
										<img src={Info} alt='info' />
									</div>
								</div>
							</div>
						</div>
						<div className='restaurant-menu__root'>
							<div className='restaurant-menu__filter flags'>
								<div
									onClick={() => setFlagStatus('sale')}
									className={
										flagStatus === 'sale'
											? 'flags__item flags__item--active'
											: 'flags__item '
									}
								>
									Акции
								</div>
								<div
									onClick={() => setFlagStatus('lunch')}
									className={
										flagStatus === 'lunch'
											? 'flags__item flags__item--active'
											: 'flags__item '
									}
								>
									Бизнес-ланч
								</div>
								<div
									onClick={() => setFlagStatus('breakfast')}
									className={
										flagStatus === 'breakfast'
											? 'flags__item flags__item--active'
											: 'flags__item '
									}
								>
									Завтрак
								</div>
								<div
									onClick={() => setFlagStatus('salad')}
									className={
										flagStatus === 'salad'
											? 'flags__item flags__item--active'
											: 'flags__item '
									}
								>
									Салаты
								</div>
								<div
									onClick={() => setFlagStatus('snacks')}
									className={
										flagStatus === 'snacks'
											? 'flags__item flags__item--active'
											: 'flags__item '
									}
								>
									Закуски
								</div>
								<div
									onClick={() => setFlagStatus('soup')}
									className={
										flagStatus === 'soup'
											? 'flags__item flags__item--active'
											: 'flags__item '
									}
								>
									Супы
								</div>
							</div>
							<RestaurantInformer
								type='Gift'
								heading='Блюдо в подарок'
								text='Суп-лапша с курицей в подарок при заказе от 750₽ без учёта доставки'
							/>
							<RestaurantInformer
								type='Sale'
								heading='Скидка 20%'
								text='На категории Бизнес-ланч и Завтрак'
							/>

							<Menu categoryName='Акции' itemAmount='4' items={saleItems} />
							<Menu
								categoryName='Бизнес-ланч'
								itemAmount='2'
								items={lunchItems}
							/>
							<Menu
								categoryName='Завтрак'
								itemAmount='6'
								items={breakfastItems}
							/>
						</div>
					</div>
					<aside className='column-side'>
						<SideCart />
					</aside>
				</div>
			</div>
			<FooterBig />
		</>
	)
}

export default Seoul
