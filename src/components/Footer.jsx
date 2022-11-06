import Ig from '../assets/icons/socials/ig.svg'
import Fb from '../assets/icons/socials/fb.svg'
import Vk from '../assets/icons/socials/vk.svg'
import SpaceApp from '../assets/icons/space-app.svg'
import './styles/Footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='wrapper'>
				<div className='footer__container'>
					<div className='footer__copyright'>
						<span className='footer__year'>© 2021</span>
						<span>QR-ON. Все права защищены</span>
					</div>
					<div className='footer__socials'>
						<img src={Vk} alt='Vk' />
						<img src={Fb} alt='Fb' />
						<img src={Ig} alt='ig' />
					</div>
					<div className='footer__credits'>
						<span>Работа над сайтом</span>
						<img src={SpaceApp} alt='space-app' />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
