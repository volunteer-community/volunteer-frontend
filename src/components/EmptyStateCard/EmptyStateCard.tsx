import Image from "@components/ui/Image"
import { Link } from "react-router-dom"

const EmptyStateCard = () => {
	return (
		<li>
			<div>
			<Image src="" alt=""/>
			</div>
			<Link to =''>어디로 가야하죠 아저시</Link>
		</li>
	)
}

export default EmptyStateCard