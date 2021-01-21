import { createNewCard } from '../../../../../../utils/api';
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper';
import { BoardOptions, ListOptions } from '../../../../../../utils/interfaces';

if (options.lists) {
	const { name: boardName } = options.boards as BoardOptions;
	const { id: listId, name: listName } = options.lists as ListOptions;

	let cardName: null | string = args.filter(Boolean).join(' ');

	if (!cardName) {
		cardName = prompt('Please enter a new board name');
	}

	const response = createNewCard(listId, cardName);

	if (response.status >= 200 && response.status <= 299) {
		let result: {
			response: { url?: string } | any
			status: number
		} = decodeApiResponse(response);
		notify('New Card Created', 'success', 2000);
		// open(result.response.url);
		reIndex(['boards', boardName, 'lists', listName, 'cards']);
	} else {
		handleErrors(response.status, response.response);
	}
}
