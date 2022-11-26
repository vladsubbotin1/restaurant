import Header from '../../components/Header'
import SideCart from '../../components/SideCart'
import FooterBig from '../../components/FooterBig'
import Cart from '../../assets/icons/cart.svg'
import Dislike from '../../assets/icons/dislike.svg'
import Like from '../../assets/icons/like.svg'
import './Dish.scss'
import Share from '../../assets/icons/share.svg'
import { useState } from 'react'
import Menu from '../../components/Menu'

const Dish = () => {
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

	const recommendItems = [
		{
			id: 1,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'pancake.jpg',
		},
		{
			id: 2,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'muffin.jpg',
		},
		{
			id: 3,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'salad.jpg',
		},
		{
			id: 4,
			heading: 'Название блюда',
			weight: '300гр',
			price: '144₽',
			desc: 'Описание блюда',
			oldPrice: '180₽',
			imgUrl: 'porridge.jpg',
		},
		{
			id: 5,
			heading: 'Название блюда',
			weight: '150гр',
			price: '100₽',
			desc: 'Описание блюда',
			oldPrice: '200₽',
			imgUrl: 'soup.jpg',
		},
	]

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
										<div className='dish-desc__price-wrapper'>
											<span style={{ color: '#999999' }}>Цена</span>
											<span className='dish-desc__price'>144₽</span>
										</div>
										<div className='dish-desc__price-wrapper'>
											<span style={{ color: '#999999' }}>Рейтинг</span>
											<div className='dish-desc__likes-wrapper'>
												<img src={Dislike} alt='Dislike' onClick={dislike} />
												<span className='dish-desc__likes-value'>{likes}</span>
												<img src={Like} alt='Like' onClick={like} />
											</div>
										</div>
									</div>
								</div>
								<div className='dish-desc__buttons-wrapper'>
									<button className='dish-desc__add-cart'>
										Добавить в корзину
									</button>
									<div class='dish-desc__share'>
										<img src={Share} alt='button' />
										<span className='grey-text'>Поделиться</span>
									</div>
								</div>
							</div>

							<div className='divider'></div>

							<div className='dish-recommend'>
								<h5 className='dish-recommend__heading'>Рекомендуем также</h5>
								<div class='dish-recommend__card-container'>
									<Menu
										items={recommendItems}
										marginTop='noMargin'
										slider='yes'
									/>
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

export default Dish
