import { useEffect } from 'react'
import './Alert.css'

export default function Alert({ text, onClose }) {
	useEffect(() => {
		const timer = setTimeout(onClose, 1000)

		return () => {
			clearTimeout(timer)
		}
	})
	return (<div className="alert">
		<p>{text}</p>
	</div>)
}
