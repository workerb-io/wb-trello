/* eslint-disable default-case */
import { renameList } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'
import { BoardOptions, ListOptions } from '../../../../../utils/interfaces';

if (options.boards && options.lists) {
	const { html_url: boardURL, name: boardName } = options.boards as BoardOptions;
	const { id: listId } = options.lists as ListOptions;

	let listName: string = args.filter(Boolean).join(' ');

	if (!listName) {
		listName = prompt('Please enter a new list name') as string;
	}

	const response = renameList(listId, listName);

	if (response.status >= 200 && response.status <= 299) {
		let result = decodeApiResponse(response);
		notify('List Renamed', 'success', 2000);
		open(boardURL);
		reIndex(['boards', boardName, 'lists']);
	} else {
		handleErrors(response.status, response.response);
	}
}
