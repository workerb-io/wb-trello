/* eslint-disable consistent-return */
/* eslint-disable default-case */
// @description List Options
import { api, decodeApiResponse } from '../../../../utils/helper'
import { getAllListsOfBoard } from '../../../../utils/api'
import { BoardOptions, ListOptions } from '../../../../utils/interfaces';

export default () => {
	if (!options.boards) return;

	const { id: boardId, html_url: boardURL } = options.boards as BoardOptions;

	const response = getAllListsOfBoard(boardId);
	const result = decodeApiResponse(response);
	switch (result.status) {
		case 401:
		case 500:
		case 403:
		case 404:
			notify(result.response.message, 'error', 3000)
	}

	const lists: Array<ListOptions> = result.response.map((list: any, index: number) => {
		let listInfo: ListOptions = {
			name: list.name,
			html_url: boardURL,
			id: list.id,
			index
		};
		return listInfo;
	});

	return JSON.stringify({
		add: lists
	})
}
