/* eslint-disable consistent-return */
/* eslint-disable default-case */
// @description Board options
import { decodeApiResponse } from '../../utils/helper'
import { getAllBoards } from '../../utils/api'
import { BoardOptions } from '../../utils/interfaces';

export default () => {
	const response = getAllBoards();
	const result = decodeApiResponse(response);
	switch (result.status) {
		case 401:
		case 500:
		case 403:
		case 404:
			notify(result.response.message, 'error', 3000)
			return
	}

	const boards: Array<BoardOptions> = result.response.map((board: any) => {
		const boardInfo: BoardOptions = {
			name: board.name,
			html_url: board.url,
			id: board.id,
		};
		return boardInfo;
	});

	return JSON.stringify({
		add: boards,
	})
}
