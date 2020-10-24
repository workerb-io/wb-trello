import { createNewCard } from '../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper'

if (options.lists) {
	const { name: boardName } = options.boards
	const { id, name } = options.lists

	let cardName: null | string = args.filter(Boolean).join(' ')

	if (!cardName) {
		cardName = prompt('Please enter a new board name')
	}

	const response = createNewCard(id, cardName)
	let result: {
		response: { url?: string } | any
		status: number
	} = response

	if (result.status >= 200 && result.status <= 299) {
		result = decodeApiResponse(response)
		notify('New Card Created', 'success', 2000)
		open(result.response.url)
		reIndex(['trello', 'boards', boardName, 'lists', name, 'cards'])
	} else {
		handleErrors(result.status, result.response)
	}
}
