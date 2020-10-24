/* eslint-disable default-case */
import { renameList } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'

if (options.boards && options.lists) {
	const { html_url, name } = options.boards
	const { id } = options.lists

	let listName: string = args.filter(Boolean).join(' ')

	if (!listName) {
		listName = prompt('Please enter a new list name') as string
	}

	const response = renameList(id, listName)

	let result = response

	if (result.status >= 200 && result.status <= 299) {
		result = decodeApiResponse(response)
		notify('List Renamed', 'success', 2000)
		open(html_url)
		reIndex(['trello', 'boards', name, 'lists'])
	} else {
		handleErrors(result.status, result.response)
	}
}
