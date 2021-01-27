// @description Update card description
import { updateCard } from '../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper'
import { BoardOptions, CardOptions, ListOptions } from '../../../../../../../utils/interfaces';

if (options.lists && options.cards) {
	const { id: cardId } = options.cards as CardOptions;
	const { name: boardName } = options.boards as BoardOptions;
	const { name: listName } = options.lists as ListOptions;

	let cardDescription: string = args.filter(Boolean).join(' ');

	if (!cardDescription) {
		cardDescription = prompt('Please enter a new list name') as string
	}

	if (cardId) {
		const response = updateCard({
			cardId: cardId,
			shouldAddDescription: true,
			description: cardDescription,
		});

		if (response.status >= 200 && response.status <= 299) {
			let result: {
				response: { url?: string } | any
				status: number
			} = decodeApiResponse(response);
			notify('Card Description Updated', 'success', 2000);
			// open(result.response.url);
			reIndex(['boards', boardName, 'lists', listName, 'cards']);
		} else {
			handleErrors(response.status, response.response);
		}
	}
}
