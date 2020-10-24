import { archiveList } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'

if (options.boards && options.lists) {
	const { id } = options.lists
	const { html_url, name } = options.boards

	if (id) {
		const response = archiveList(id)

		let result = response

		if (result.status >= 200 && result.status <= 299) {
			result = decodeApiResponse(response)
			notify('List Archived', 'success', 2000)
			open(html_url)
			reIndex(['trello', 'boards', name, 'lists'])
		} else {
			handleErrors(result.status, result.response)
		}
	}
}
