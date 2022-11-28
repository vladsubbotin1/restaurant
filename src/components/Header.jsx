import Logo from '../assets/icons/logo.svg'
import Location from '../assets/icons/location.svg'
import Cart from '../assets/icons/cart.svg'
import UserPFP from '../assets/images/user-pfp.png'
import './styles/Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Modal from './Modal'
import Dot from '../assets/icons/dot.svg'
import Repeat from '../assets/icons/repeat.svg'
import Info from '../assets/icons/info-red.svg'
import Alfabank from '../assets/images/alfabank.png'
import Sberbank from '../assets/images/sberbank.png'
import Plus from '../assets/icons/plus.svg'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [menuOption, setMenuOption] = useState('')

	const [modalOpen, setModalOpen] = useState(false)
	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	const history = (
		<div className='modal__wrapper'>
			<div className='modal__heading'>История заказов</div>
			<div className='history__wrapper'>
				<div className='history__item'>
					{' '}
					<div className='history__upper-row'>
						<div className='history__span'>
							<span>29.03.2021</span>
							<img src={Dot} alt='dot' />
							<span>17:38</span>
							<img src={Dot} alt='dot' />
							<span className='red-text'>Выполняется</span>
							<img src={Repeat} alt='dot' />
						</div>

						<img src={Info} alt='info' />
					</div>
					<div className='history__details-wrapper'>
						<div className='history__details-column'>
							<div className='grey-text'>Ресторан</div>
							<span className='text-m'>Азиатский стиль</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Тип доставки</div>
							<span className='text-m'>Доставка на дом</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Способ оплаты</div>
							<span className='text-m'>Картой онлайн</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Стоимость</div>
							<span className='text-m'>1088₽</span>
						</div>
					</div>
				</div>
				<div className='history__item history__item-grey'>
					<div className='history__upper-row'>
						<div className='history__span'>
							<span>28.03.2021</span>
							<img src={Dot} alt='dot' />
							<span>11:00</span>
							<img src={Dot} alt='dot' />
							<span>Выполнен</span>
							<img src={Repeat} alt='dot' />
						</div>

						<img src={Info} alt='info' />
					</div>
					<div className='history__details-wrapper'>
						<div className='history__details-column'>
							<div className='grey-text'>Ресторан</div>
							<span className='text-m'>Допустим длинное название рестика</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Тип доставки</div>
							<span className='text-m'>Самовывоз</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Способ оплаты</div>
							<span className='text-m'>На месте</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Стоимость</div>
							<span className='text-m'>545₽</span>
						</div>
					</div>
				</div>
				<div className='history__item'>
					{' '}
					<div className='history__upper-row'>
						<div className='history__span'>
							<span>26.03.2021</span>
							<img src={Dot} alt='dot' />
							<span>17:38</span>
							<img src={Dot} alt='dot' />
							<span>Выполнен</span>
							<img src={Repeat} alt='dot' />
						</div>

						<img src={Info} alt='info' />
					</div>
					<div className='history__details-wrapper'>
						<div className='history__details-column'>
							<div className='grey-text'>Ресторан</div>
							<span className='text-m'>Азиатский стиль</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Тип доставки</div>
							<span className='text-m'>Доставка на дом</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Способ оплаты</div>
							<span className='text-m'>Картой онлайн</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Стоимость</div>
							<span className='text-m'>1088₽</span>
						</div>
					</div>
				</div>
				<div className='history__item history__item-grey'>
					{' '}
					<div className='history__upper-row'>
						<div className='history__span'>
							<span>25.03.2021</span>
							<img src={Dot} alt='dot' />
							<span>23:03</span>
							<img src={Dot} alt='dot' />
							<span>Выполнен</span>
							<img src={Repeat} alt='dot' />
						</div>

						<img src={Info} alt='info' />
					</div>
					<div className='history__details-wrapper'>
						<div className='history__details-column'>
							<div className='grey-text'>Ресторан</div>
							<span className='text-m'>Азиатский стиль</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Тип доставки</div>
							<span className='text-m'>Доставка на дом</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Способ оплаты</div>
							<span className='text-m'>Картой онлайн</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Стоимость</div>
							<span className='text-m'>564₽</span>
						</div>
					</div>
				</div>
				<div className='history__item'>
					{' '}
					<div className='history__upper-row'>
						<div className='history__span'>
							<span>21.03.2021</span>
							<img src={Dot} alt='dot' />
							<span>10:59</span>
							<img src={Dot} alt='dot' />
							<span>Выполнен</span>
							<img src={Repeat} alt='dot' />
						</div>

						<img src={Info} alt='info' />
					</div>
					<div className='history__details-wrapper'>
						<div className='history__details-column'>
							<div className='grey-text'>Ресторан</div>
							<span className='text-m'>Сеул</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Тип доставки</div>
							<span className='text-m'>В ресторане</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Способ оплаты</div>
							<span className='text-m'>На месте</span>
						</div>
						<div className='history__details-column'>
							<div className='grey-text'>Стоимость</div>
							<span className='text-m'>3577₽</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

	const settings = (
		<div className='modal__wrapper'>
			<div className='modal__heading'>Личные настройки</div>
			<div className='settings__wrapper'>
				<div className='settings__column'>
					<div className='settings__span'>
						<span className='grey-text'>Имя</span>
						<input type='text' className='settings__input' />
					</div>
					<div className='settings__span'>
						<span className='grey-text'>Фамилия</span>
						<input type='text' className='settings__input' />
					</div>
					<div className='settings__span'>
						<span className='grey-text'>Отчество</span>
						<input type='text' className='settings__input' />
					</div>
				</div>
				<div className='settings__column'>
					<div className='settings__span'>
						<span className='grey-text'>Телефон</span>
						<input type='text' className='settings__input' />
					</div>
					<div className='settings__span'>
						<span className='grey-text'>Email</span>
						<input type='text' className='settings__input' />
					</div>
					<div className='settings__span'>
						<span className='grey-text'>Регион</span>
						<input type='text' className='settings__input' />
					</div>
					<button className='settings__change-password'>Изменить пароль</button>
				</div>
			</div>
			<button className='settings-submit submit-button'></button>
		</div>
	)

	const cards = (
		<div className='modal__wrapper'>
			<div className='modal__heading'>Мои карты</div>
			<div className='modal__card-wrapper'>
				<img src={Alfabank} alt='alfabank' />
				<img src={Sberbank} alt='Sberbank' />
			</div>
			<button className='modal__add-card'>
				<img src={Plus} alt='plus' />
				<span>Добавить новую карту</span>
			</button>
		</div>
	)

	const logOut = (
		<div className='modal__wrapper'>
			<div className='modal__heading'>Мои карты</div>
			<div className='modal__card-wrapper'></div>
			<button className='modal__add-card'>
				<span>Log out</span>
			</button>
		</div>
	)

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
									<button
										onClick={() => {
											setMenuOption('history')
											modalOpen ? close() : open()
										}}
										className='pfp__option'
									>
										История заказов
									</button>
									<button
										className='pfp__option'
										onClick={() => {
											setMenuOption('settings')
											modalOpen ? close() : open()
										}}
									>
										Личные настройки
									</button>
									<button
										className='pfp__option'
										onClick={() => {
											setMenuOption('cards')
											modalOpen ? close() : open()
										}}
									>
										Мои карты
									</button>
								</div>
								<button
									className='pfp__log-out'
									onClick={() => {
										setMenuOption('logOut')
										modalOpen ? close() : open()
									}}
								>
									Выйти из аккаунта
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				{modalOpen && (
					<Modal
						text={
							menuOption === 'history'
								? history
								: menuOption === 'settings'
								? settings
								: menuOption === 'cards'
								? cards
								: logOut
						}
						modalOpen={modalOpen}
						handleClose={close}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Header
