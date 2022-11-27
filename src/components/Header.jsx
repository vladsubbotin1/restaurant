import Logo from '../assets/icons/logo.svg'
import Location from '../assets/icons/location.svg'
import Cart from '../assets/icons/cart.svg'
import UserPFP from '../assets/images/user-pfp.png'
import './styles/Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='wrapper'>
			<div className='header'>
				<Link to={'/'}>
					<img className='header__logo' src={Logo} alt='logo' />
				</Link>

				<ul className='menu'>
					<li className='menu__item'>Ресторанам</li>
					<li className='menu__item'>Курьерам</li>
					<li className='menu__item'>Компаниям</li>
				</ul>
				<div className='user'>
					<div className='delivery'>
						<div className='location'>
							<img src={Location} alt='location' />
							<span>Б. Казачья, 18</span>
						</div>
						<div className='cart'>
							<img src={Cart} alt='cart' />
							<span>1080P</span>
						</div>
					</div>
					<div className='city'>
						<span>Саратов</span>
					</div>
					<div className='pfp' onClick={() => setIsOpen(!isOpen)}>
						<img src={UserPFP} alt='userpfp' />
						{isOpen && (
							<div className='pfp__menu'>
								<h5>Никита</h5>
								<div className='pfp__options'>
									<Link className='pfp__option' to='/'>
										История заказов
									</Link>
									<Link className='pfp__option' to='/'>
										Личные настройки
									</Link>
									<Link className='pfp__option' to='/'>
										Мои карты
									</Link>
								</div>
								<Link className='pfp__log-out' to='/'>
									Выйти из аккаунта
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
