import Trash from '../assets/icons/trash.svg'
import '../components/styles/SideCart.scss'

const SideCart = () => {
	return (
		<>
			<div className='side-cart'>
				<div className='side-cart__list'>
					<div className='side-cart__heading'>
						<span>Мой заказ</span>
						<img src={Trash} alt='trash-icon' />
					</div>
				</div>
			</div>
		</>
	)
}

export default SideCart
