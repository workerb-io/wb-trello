/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { decodeApiResponse } from '../../utils/helper'
import { getAllBoards } from '../../utils/api'

export default () => {
	const response = getAllBoards()
	const result = decodeApiResponse(response)
	switch (result.status) {
		case 401:
		case 500:
		case 403:
		case 404:
			notify(result.response.message, 'error', 3000)
			return
	}

	const boards = result.response.map((board: any) => ({
		name: board.name,
		html_url: board.url,
		id: board.id,
	}))

	return JSON.stringify({
		add: boards,
	})
}
