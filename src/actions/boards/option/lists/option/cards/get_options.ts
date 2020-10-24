import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper'
import { getAllCardsInList } from '../../../../../../utils/api'

export default () => {
	if (options.lists) {
		const { id }: { id: string } = options.lists

		const response = getAllCardsInList(id)

		const result = decodeApiResponse(response)

		if (!(result.status >= 200 && result.status <= 299)) {
			handleErrors(result.status, result.response.message)
		} else {
			return JSON.stringify({
				add: result.response.map((card: any) => ({
					name: card.name,
					html_url: card.url,
					id: card.id,
				})),
			})
		}
	}
}
