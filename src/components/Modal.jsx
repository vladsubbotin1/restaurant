import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import './styles/Modal.scss'

const dropIn = {
	hidden: {
		y: '-100vh',
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: { duration: 0.5 },
	},
	exit: {
		y: '100vh',
		transition: { duration: 0.5 },
	},
}

const Modal = ({ handleClose, text }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={e => e.stopPropagation()}
				className='modal'
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<div>{text}</div>
				<button onClick={handleClose} className='exit'>
					x
				</button>
			</motion.div>
		</Backdrop>
	)
}

export default Modal
