import { Link } from 'react-router-dom'
import { ReactComponent as Gift } from '../assets/icons/gift-pink.svg'
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
					<div className='side-cart__dishes'>
						<div className='side-cart__item'>
							<div className='side-cart__about'>
								<span className='side-cart__name'>Гранола с йогуртом </span>
								<span className='side-cart__weight'>300гр</span>
								<span className='side-cart__topping'>Черная смородина</span>
							</div>
							<div className='side-cart__quantity'>2</div>
							<div className='side-cart__price'>360₽</div>
						</div>
						<div className='side-cart__item'>
							<div className='side-cart__about'>
								<span className='side-cart__name'>Название блюда&nbsp;</span>
								<span className='side-cart__weight'>5гр</span>
								<span className='side-cart__topping'>
									Добавки при наличии выбора таковых
								</span>
							</div>
							<div className='side-cart__quantity'>1</div>
							<div className='side-cart__price'>100₽</div>
						</div>
						<div className='side-cart__item'>
							<div className='side-cart__about'>
								<span className='side-cart__name'>Название блюда&nbsp;</span>
								<span className='side-cart__weight'>10гр</span>
							</div>
							<div className='side-cart__quantity'>5</div>
							<div className='side-cart__price'>500₽</div>
						</div>
						<div className='side-cart__item'>
							<div className='side-cart__about'>
								<span className='side-cart__name'>
									Длинное название блюда&nbsp;
								</span>
								<span className='side-cart__weight'>15гр</span>
							</div>
							<div className='side-cart__quantity'>1</div>
							<div className='side-cart__price'>100₽</div>
						</div>
						<div className='side-cart__item'>
							<div className='side-cart__about'>
								<span className='side-cart__name'>
									Суп-лапша с курицей&nbsp;
								</span>
								<span className='side-cart__weight'>250гр</span>
							</div>
							<div className='side-cart__quantity'>1</div>
							<Gift className='side-cart__gift' alt='gift'></Gift>
						</div>
						<div className='side-cart__item'>
							<span className='side-cart__name'>Скидка 20%&nbsp;</span>
							<span className='side-cart__discount'>-72₽</span>
						</div>
						<div class='divider' style={{ margin: '5px 0' }}></div>
						<div className='side-cart__item'>
							<span className='side-cart__delivery'>Доставка&nbsp;</span>
							<span className='side-cart__price'>100₽</span>
						</div>
					</div>
				</div>

				{props.submit !== 'noSubmit' && (
					<Link to='/cart'>
						<button className='side-cart__button'>Оформить заказ</button>
					</Link>
				)}
			</div>
		</>
	)
}

export default SideCart
