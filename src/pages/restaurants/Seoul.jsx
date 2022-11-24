import Header from '../../components/Header'
import './Seoul.scss'
import Book from '../../assets/icons/book.svg'
import Info from '../../assets/icons/info.svg'
import RestaurantInformer from '../../components/RestaurantInformer'
import SideCart from '../../components/SideCart'
import Menu from '../../components/Menu'
import FooterBig from '../../components/FooterBig'

const Seoul = () => {
	const saleItems = [
		{
			heading: 'Гранола с йогуртом',
			weight: '300гр',
			price: '144₽',
			desc: 'Гранола с орехами, классическим йогуртом и фруктами на выбор',
			oldPrice: '180₽',
			imgUrl: 'granola.jpg',
			link: '/seoul/granola',
		},
		{
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'omelette.jpg',
		},
		{
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'muffin.jpg',
		},
		{
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
			heading: 'Гранола с йогуртом',
			weight: '300гр',
			price: '144₽',
			desc: 'Гранола с орехами, классическим йогуртом и фруктами на выбор',
			oldPrice: '180₽',
			imgUrl: 'soup.jpg',
		},
		{
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
			heading: 'Название блюда',
			weight: '300гр',
			price: '144₽',
			desc: 'Описание блюда',
			oldPrice: '180₽',
			imgUrl: 'porridge.jpg',
		},
		{
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'soup.jpg',
		},
		{
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'muffin.jpg',
		},
		{
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'pancake.jpg',
		},
		{
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'salad.jpg',
		},
		{
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
										<img src={Info} alt='info' />
									</div>
								</div>
							</div>
						</div>
						<div className='restaurant-menu__root'>
							<div className='restaurant-menu__filter flags'>
								<div className='flags__item flags__item--active'>Акции</div>
								<div className='flags__item'>Бизнес-ланч</div>
								<div className='flags__item'>Завтрак</div>
								<div className='flags__item'>Салаты</div>
								<div className='flags__item'>Закуски</div>
								<div className='flags__item'>Супы</div>
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
