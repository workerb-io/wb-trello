import { deleteCard } from '../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper'

if (options.boards && options.lists && options.cards) {
	const { html_url, name: boardName } = options.boards
	const { id } = options.cards
	const { name } = options.lists

	if (id) {
		const response = deleteCard(id)

		let result = response

		if (result.status >= 200 && result.status <= 299) {
			result = decodeApiResponse(response)
			notify('Card Deleted', 'success', 2000)
			open(html_url)
			reIndex(['trello', 'boards', boardName, 'lists', name, 'cards'])
		} else {
			handleErrors(result.status, result.response)
		}
	}
}
