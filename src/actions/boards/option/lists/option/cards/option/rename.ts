import { updateCard } from '../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper'

if (options.lists && options.cards) {
	const { id } = options.cards
	const { name: boardName } = options.boards
	const { name } = options.lists
	let cardName: string = args.filter(Boolean).join(' ')

	if (!cardName) {
		cardName = prompt('Please enter a new card name') as string
	}

	if (id) {
		const response = updateCard({ cardId: id, newCardName: cardName })
		let result: {
			response: { url?: string } | any
			status: number
		} = response

		if (result.status >= 200 && result.status <= 299) {
			result = decodeApiResponse(response)
			notify('Card Ranamed', 'success', 2000)
			open(result.response.url)
			reIndex(['trello', 'boards', boardName, 'lists', name, 'cards'])
		} else {
			handleErrors(result.status, result.response)
		}
	}
}
