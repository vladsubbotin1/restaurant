import './styles/FooterBig.scss'
import Footer from '../components/Footer'
import logo from '../assets/icons/logo-grey.svg'
import appStore from '../assets/icons/app-store-grey.svg'
import googlePlay from '../assets/icons/google-play-grey.svg'
import appGallery from '../assets/icons/app-gallery-grey.svg'

const FooterBig = () => {
	return (
		<footer className='footer-big'>
			<div className='wrapper footer-big__wrapper'>
				<div className='footer-big__root'>
					<div className='footer-big__row'>
						<img src={logo} alt='logo' />
						<div className='footer-big__download'>
							<img src={appStore} alt='appStore' style={{ fill: '#b8b8b8' }} />
							<img src={googlePlay} alt='googlePlay' />
							<img src={appGallery} alt='appGallery' />
						</div>
					</div>

					<div className='divider'></div>
					<div className='footer-big__row'>
						<nav className='footer-big__nav'>
							<div className='footer-big__left-column'>
								<div className='footer-big__section'>
									<h5>Регионы</h5>
									<ul className='footer-big__list'>
										<li>Москва</li>
										<li>Санкт-Петербург</li>
										<li>Казань</li>
										<li>Саратов</li>
										<li>Верхняя Пышма</li>
									</ul>
									<button>Посмотреть все</button>
								</div>
								<div className='footer-big__section'>
									<h5>Категории</h5>
									<ul className='footer-big__list'>
										<li>Стритфуд</li>
										<li>Бургеры</li>
										<li>Суши</li>
										<li>Кавказская кухня</li>
										<li>Десерты</li>
									</ul>
									<button>Посмотреть все</button>
								</div>
							</div>
							<div className='footer-big__right-column'>
								<div className='footer-big__section'>
									<h5>О компании</h5>
									<ul className='footer-big__list'>
										<li>Что такое QR-ON</li>
										<li>О нашем сервисе</li>
										<li>Покупателям</li>
										<li>Оплата</li>
										<li>Доставка</li>
										<li>Пользовательсоке соглашение</li>
										<li>Контакты</li>
									</ul>
									<button>Посмотреть все</button>
								</div>
							</div>
						</nav>
					</div>

					<div className='divider'></div>
				</div>
			</div>
			<Footer />
		</footer>
	)
}

export default FooterBig
