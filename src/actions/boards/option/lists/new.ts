/* eslint-disable default-case */
import { createNewList } from '../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../utils/helper'
import { BoardOptions } from '../../../../utils/interfaces'

if (options.boards) {
	const {
		id: boardId,
		html_url: boardURL,
		name: boardName } = options.boards as BoardOptions;

	let listName: null | string = args.filter(Boolean).join(' ');

	if (!listName) {
		listName = prompt("Enter list name");
	}

	const response = createNewList(boardId, listName);

	if (response.status >= 200 && response.status <= 299) {
		let result = decodeApiResponse(response);
		notify('List Created', 'success', 2000);
		open(boardURL);
		reIndex(['boards', boardName, 'lists']);
	} else {
		handleErrors(response.status, response.response)
	}
}
