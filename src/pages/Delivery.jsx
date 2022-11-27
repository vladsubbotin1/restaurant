import Header from '../components/Header'
import SideCart from '../components/SideCart'
import FooterBig from '../components/FooterBig'
import './Cart.scss'
import './Delivery.scss'

const Delivery = () => {
	return (
		<>
			<Header />
			<div className='divider'></div>
			<div className='wrapper'>
				<div className='column-container'>
					<div className='column-main map-container'></div>

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
