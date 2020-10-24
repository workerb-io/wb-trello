/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { api, decodeApiResponse } from '../../../../utils/helper'
import { getAllListsOfBoard } from '../../../../utils/api'

export default () => {
	if (!options.boards) return

	const { id, url } = options.boards

	const response = getAllListsOfBoard(id)
	const result = decodeApiResponse(response)
	switch (result.status) {
		case 401:
		case 500:
		case 403:
		case 404:
			notify(result.response.message, 'error', 3000)
	}

	return JSON.stringify({
		add: result.response.map((list: any, index: number) => ({
			name: list.name,
			html_url: url,
			id: list.id,
			index,
		})),
	})
}
