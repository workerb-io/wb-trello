import { updateCard } from '../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper'
import { BoardOptions, CardOptions, ListOptions } from '../../../../../../../utils/interfaces';

if (options.lists && options.cards) {
	const { id: cardId } = options.cards as CardOptions;
	const { name: boardName } = options.boards as BoardOptions;
	const { name: listName } = options.lists as ListOptions;

	let cardName: string = args.filter(Boolean).join(' ');

	if (!cardName) {
		cardName = prompt('Please enter a new card name') as string
	}

	if (cardId) {
		const updateCardResponse = updateCard({ cardId, newCardName: cardName });
		if (updateCardResponse.status >= 200 && updateCardResponse.status <= 299) {
			let result: {
				response: { url?: string } | any
				status: number
			} = decodeApiResponse(updateCardResponse);
			notify('Card Ranamed', 'success', 2000);
			// open(result.response.url)
			reIndex(['boards', boardName, 'lists', listName, 'cards']);
		} else {
			handleErrors(updateCardResponse.status, updateCardResponse.response);
		}
	}
}
