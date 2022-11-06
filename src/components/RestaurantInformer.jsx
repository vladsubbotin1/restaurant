import Sale from '../assets/icons/sale.svg'
import Gift from '../assets/icons/gift.svg'
import './styles/RestaurantInformer.scss'

const RestaurantInformer = props => {
	return (
		<div className='restaurant-informer'>
			<div className='restaurant-informer__icon'>
				<img src={props.type === 'Sale' ? Sale : Gift} alt='icon' />
			</div>
			<div className='restaurant-informer__text'>
				<h5 className='restaurant-informer__heading'>{props.heading}</h5>
				<span>{props.text}</span>
			</div>
		</div>
	)
}

export default RestaurantInformer
