/* eslint-disable default-case */
import { decodeApiResponse, handleErrors } from '../../../utils/helper';
import { deleteBoard } from '../../../utils/api';
import { BoardOptions } from '../../../utils/interfaces';

if (options.boards) {
	const { id: boardId } = options.boards as BoardOptions;

	const response = deleteBoard(boardId);

	if (response.status >= 200 && response.status <= 299) {
		let result = decodeApiResponse(response);
		notify('Board Deleted', 'success', 2000);
		open('https://trello.com/');
		reIndex(['boards']);
	} else {
		handleErrors(response.status, response.response);
	}
}
