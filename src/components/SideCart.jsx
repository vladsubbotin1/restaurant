import { Link } from 'react-router-dom'
import Trash from '../assets/icons/trash.svg'
import '../components/styles/SideCart.scss'

const SideCart = props => {
	return (
		<>
			<div className='side-cart'>
				<div className='side-cart__list'>
					<div className='side-cart__heading'>
						<span>Мой заказ</span>
						<img src={Trash} alt='trash-icon' />
					</div>
				</div>

				{props.submit != 'noSubmit' && (
					<Link to='/cart'>
						<button className='side-cart__button'>Оформить заказ</button>
					</Link>
				)}
			</div>
		</>
	)
}

export default SideCart
