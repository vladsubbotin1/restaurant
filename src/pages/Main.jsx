import Header from '../components/Header'
import './Main.scss'
import AppStore from '../assets/icons/app-store.svg'
import GooglePlay from '../assets/icons/google-play.svg'
import AppGallery from '../assets/icons/app-gallery.svg'
import RestaurantType from '../components/RestaurantType'
import Filter from '../assets/icons/filter.svg'
import Search from '../assets/icons/search.svg'
import DeliveryTime from '../assets/icons/delivery-time.svg'
import RestaurantCard from '../components/RestaurantCard'
import Footer from '../components/Footer'
import { useState } from 'react'
import Arrow from '../assets/icons/arrow-down.svg'

const Main = () => {
	const [flagStatus, setFlagStatus] = useState('delivery')
	const [inputStatus, setInputStatus] = useState(0)

	const delivery = () => {
		setFlagStatus('delivery')
	}
	const nearby = () => {
		setFlagStatus('nearby')
	}
	const book = () => {
		setFlagStatus('book')
	}

	const handleChange = e => {
		setInputStatus(e.target.value)
		console.log(inputStatus)
	}

	return (
		<>
			<div className='wrapper'>
				<Header />
			</div>
			<div className='divider'></div>
			<div className='wrapper'>
				<div className='search-address'>
					<h1 className='search-address__title'>
						Заказ и доставка еды в Саратове
					</h1>
					<div className='search-address__bar'>
						<form action=''>
							<input
								type='text'
								id='address'
								placeholder='Укажите ваш адрес'
								onChange={handleChange}
							/>
							<div>
								<img src={Arrow} alt='arrow' />
								<input
									type='submit'
									value='Найти'
									className='search-address__submit'
									style={{ opacity: inputStatus === 0 ? '0.5' : '1' }}
								/>
							</div>
						</form>
					</div>
					<div className='download'>
						<img src={AppStore} alt='AppStore' />
						<img src={GooglePlay} alt='GooglePlay' />
						<img src={AppGallery} alt='AppGallery' />
					</div>
				</div>
				<RestaurantType />
				<div className='options'>
					<div className='flags'>
						<div
							onClick={nearby}
							className={
								flagStatus === 'nearby'
									? 'flags__item flags__item--active'
									: 'flags__item '
							}
						>
							Рестораны рядом
						</div>
						<div
							onClick={book}
							className={
								flagStatus === 'book'
									? 'flags__item flags__item--active'
									: 'flags__item '
							}
						>
							Забронировать стол
						</div>
						<div
							onClick={delivery}
							className={
								flagStatus === 'delivery'
									? 'flags__item flags__item--active'
									: 'flags__item '
							}
						>
							Доставка
						</div>
					</div>
					<div className='filter'>
						<img src={Filter} alt='filter' />
						<span>Фильтры</span>
					</div>
				</div>
				<div className='search-menu'>
					<div className='search-menu__bar'>
						<img src={Search} alt='AppGallery' />
						<input
							type='text'
							id='search-menu__input'
							placeholder='Название, кухня или блюдо'
						/>
					</div>
					<div className='search-menu__delivery-time'>
						<img id='delivery-time' src={DeliveryTime} alt='AppGallery' />
						<span>Доставка: сейчас</span>
						<img id='arrow-down' src={Arrow} alt='arrow' />
					</div>
				</div>

				<RestaurantCard />
			</div>
			<Footer />
		</>
	)
}

export default Main
