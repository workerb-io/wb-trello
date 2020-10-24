/* eslint-disable default-case */
import { createNewList } from '../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../utils/helper'

if (options.boards) {
	const { id, html_url, name } = options.boards

	const listName: null | string = args.filter(Boolean).join(' ')

	const response = createNewList(id, listName)

	let result = response

	if (result.status >= 200 && result.status <= 299) {
		result = decodeApiResponse(response)
		notify('List Created', 'success', 2000)
		open(html_url)
		reIndex(['trello', 'boards', name, 'lists'])
	} else {
		handleErrors(result.status, result.response)
	}
}
