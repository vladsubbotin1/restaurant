import Logo from '../assets/icons/logo.svg'
import Location from '../assets/icons/location.svg'
import Cart from '../assets/icons/cart.svg'
import UserPFP from '../assets/images/user-pfp.png'
import './styles/Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
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
				<div className='pfp'>
					<img src={UserPFP} alt='userpfp' />
				</div>
			</div>
		</div>
	)
}

export default Header
