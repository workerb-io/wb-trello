/* eslint-disable default-case */
import { decodeApiResponse, handleErrors } from '../../../utils/helper'
import { renameBoard } from '../../../utils/api'
import { BoardOptions } from '../../../utils/interfaces';

if (options.boards) {
	const { id: boardId } = options.boards as BoardOptions;

	let newBoardName: string = args.filter(Boolean).join(' ');

	if (!newBoardName) {
		newBoardName = prompt('Please enter a new board name') as string
	}

	const response = renameBoard(boardId, newBoardName);

	if (response.status >= 200 && response.status <= 299) {
		let result: {
			response: { url?: string } | any
			status: number
		} = decodeApiResponse(response);
		notify('Board Renamed', 'success', 2000);
		open(result.response.url);
		reIndex(['boards']);
	} else {
		handleErrors(response.status, response.response);
	}
}
