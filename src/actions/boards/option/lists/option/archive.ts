// @description Archive List

import { archiveList } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'
import { BoardOptions, ListOptions } from '../../../../../utils/interfaces';

if (options.boards && options.lists) {
	const { id: listId } = options.lists as ListOptions;
	const { html_url: boardUrl, name: boardName } = options.boards as BoardOptions;

	if (listId) {
		const response = archiveList(listId);

		if (response.status >= 200 && response.status <= 299) {
			let result = decodeApiResponse(response);
			notify('List Archived', 'success', 2000);
			open(boardUrl);
			reIndex(['boards', boardName, 'lists']);
		} else {
			handleErrors(response.status, response.response);
		}
	}
}
