/* eslint-disable default-case */
import { decodeApiResponse, handleErrors } from '../../../utils/helper'
import { renameBoard } from '../../../utils/api'

if (options.boards) {
	const { id } = options.boards

	let newBoardName: string = args.filter(Boolean).join(' ')

	if (!newBoardName) {
		newBoardName = prompt('Please enter a new board name') as string
	}

	const response = renameBoard(id, newBoardName)

	let result: {
		response: { url?: string } | any
		status: number
	} = response

	if (result.status >= 200 && result.status <= 299) {
		result = decodeApiResponse(response)
		notify('Board Renamed', 'success', 2000)
		open(result.response.url)
		reIndex(['trello', 'boards'])
	} else {
		handleErrors(result.status, result.response)
	}
}
