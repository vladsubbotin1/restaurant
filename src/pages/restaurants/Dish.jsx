import Header from '../../components/Header'
import SideCart from '../../components/SideCart'
import FooterBig from '../../components/FooterBig'
import Cart from '../../assets/icons/cart.svg'
import Dislike from '../../assets/icons/dislike.svg'
import Like from '../../assets/icons/like.svg'
import './Dish.scss'
import { useState } from 'react'

const Granola = () => {
	const [likes, setLikes] = useState(563)
	const [isLiked, setIsLiked] = useState(false)

	const like = () => {
		if (!isLiked === true) {
			setLikes(like => like + 1)
			setIsLiked(true)
		}
	}

	const dislike = () => {
		if (likes > 0 && !isLiked === true) {
			setLikes(like => like - 1)
			setIsLiked(true)
		}
	}

	return (
		<>
			<div className='wrapper'>
				<Header />
			</div>
			<div className='wrapper'>
				<div className='column-container'>
					<div className='column-main'>
						<div className='dish-card'>
							<h4 className='dish-card__heading'>Название ресторана</h4>
							<h3 className='dish-card__name'>Гранола с йогуртом</h3>
							<div className='dish-card__desc'>
								Гранола с орехами, классическим йогуртом и фруктами на выбор
							</div>
							<div className='divider'></div>
							<div className='dish-card__footer'>
								<div className='dish-card__cook-time'>
									<span>Время приготовления</span>
									<span>00:15</span>
								</div>
								<div className='dish-card__calories'>
									<span>Калорийность (на 100 гр.)</span>
									<span>256 Ккал</span>
								</div>
								<div className='dish-card__weight'>
									<span>Масса </span>
									<span>300 гр.</span>
								</div>
								<div className='dish-card__price'>
									<span>144₽</span>
									<div>
										<img src={Cart} alt='cart' />
									</div>
								</div>
							</div>
						</div>
						<div className='dish-desc'>
							<div className='dish-desc__wrapper'>
								<div className='dish-desc__item'>
									<div className='dish-desc__desc-heading'>Описание</div>
									<div className='dish-desc__desc'>
										Это традиционная для США еда для завтрака или снэк,
										содержащий плющеную овсяную крупу, орехи и мёд, иногда рис,
										которые обычно запечены до хрустящего состояния. ... Её
										запекают до хрустящего состояния, используют мёд (который
										карамелизируется, добавляя корочку).
									</div>
								</div>
								<div className='dish-desc__item'>
									<div className='dish-desc__desc-heading'>Состав</div>
									<div className='dish-desc__desc'>
										Гранола с орехами, классическим йогуртом и фруктами
									</div>
									<div className='dish-desc__allergy'>Осторожно, аллергия!</div>
								</div>
								<div className='dish-desc__item'>
									<div className='dish-desc__row'>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												gap: '10px',
											}}
										>
											<span style={{ color: '#999999' }}>Цена</span>
											<span className='dish-desc__price'>144₽</span>
										</div>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												gap: '10px',
											}}
										>
											<span style={{ color: '#999999' }}>Рейтинг</span>
											<div className='dish-desc__likes-wrapper'>
												<img src={Dislike} alt='Dislike' onClick={dislike} />
												<span className='dish-desc__likes-value'>{likes}</span>
												<img src={Like} alt='Like' onClick={like} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<aside className='column-side'>
						<SideCart />
					</aside>
				</div>
			</div>
			<FooterBig />
		</>
	)
}

export default Granola
