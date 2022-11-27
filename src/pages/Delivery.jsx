import Header from '../components/Header'
import SideCart from '../components/SideCart'
import FooterBig from '../components/FooterBig'
import Ready from '../assets/icons/ready.svg'
import Finished from '../assets/icons/finish.svg'
import Auto from '../assets/icons/deliv.svg'
import Cook from '../assets/icons/cook.svg'
import RedLine from '../assets/icons/red-line.svg'
import GreyLine from '../assets/icons/grey-line.svg'
import './Cart.scss'
import './Delivery.scss'

const Delivery = () => {
	return (
		<>
			<Header />
			<div className='divider'></div>
			<div className='wrapper'>
				<div className='column-container'>
					<div className='column-main map-container'>
						<div className='map__status-wrapper'>
							<h5>Заказ готовится</h5>
							<span>
								Ресторан <b>Love Суши</b> выполняет ваш заказ
							</span>
							<div className='map__status-icons'>
								<div className='map__status-icon'>
									<img src={Ready} alt='ready' />
								</div>
								<img src={RedLine} alt='redline' />
								<div className='map__status-icon'>
									<img src={Cook} alt='cook' />
								</div>
								<img src={GreyLine} alt='greyline' />

								<div className='map__status-icon'>
									<img src={Auto} alt='auto' />
								</div>
								<img src={GreyLine} alt='greyline' />

								<div className='map__status-icon'>
									<img src={Finished} alt='finished' />
								</div>
							</div>
							<button className='map__contact'>Связаться с нами</button>
						</div>
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

export default Delivery
