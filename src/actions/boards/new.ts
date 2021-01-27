/* eslint-disable default-case */
// @description Create New Board
import { decodeApiResponse } from '../../utils/helper'
import { createNewBoard } from '../../utils/api'

let boardName: null | string = args.filter(Boolean).join(' ')

if (!boardName) {
	boardName = prompt('Please enter a new board name')
}

const response = createNewBoard(boardName);

const result = decodeApiResponse(response);

if (!(result.status >= 200 && result.status <= 299)) {
	switch (result.status) {
		case 401:
		case 500:
		case 403:
		case 404:
			notify(result.response.message, 'error', 3000)
	}
} else {
	notify('Board Created', 'success', 2000);
	open(result.response.url);
}

reIndex(['boards']);
