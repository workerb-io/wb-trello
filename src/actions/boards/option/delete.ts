/* eslint-disable default-case */
import { decodeApiResponse, handleErrors } from '../../../utils/helper'
import { deleteBoard } from '../../../utils/api'

if (options.boards) {
	const { id } = options.boards

	const response = deleteBoard(id)

	let result = response

	if (result.status >= 200 && result.status <= 299) {
		result = decodeApiResponse(response)
		notify('Board Deleted', 'success', 2000)
		open('https://trello.com/')
		reIndex(['trello', 'boards'])
	} else {
		handleErrors(result.status, result.response)
	}
}
