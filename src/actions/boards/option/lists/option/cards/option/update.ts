import { updateCard } from '../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper'

if (options.lists && options.cards) {
	const { id } = options.cards
	const { name: boardName } = options.boards
	const { name } = options.lists
	let cardDescription: string = args.filter(Boolean).join(' ')

	if (!cardDescription) {
		cardDescription = prompt('Please enter a new list name') as string
	}

	if (id) {
		const response = updateCard({
			cardId: id,
			shouldAddDescription: true,
			description: cardDescription,
		})

		let result: {
			response: { url?: string } | any
			status: number
		} = response

		if (result.status >= 200 && result.status <= 299) {
			result = decodeApiResponse(response)
			notify('Card Description Added', 'success', 2000)
			open(result.response.url)
			reIndex(['trello', 'boards', boardName, 'lists', name, 'cards'])
		} else {
			handleErrors(result.status, result.response)
		}
	}
}
