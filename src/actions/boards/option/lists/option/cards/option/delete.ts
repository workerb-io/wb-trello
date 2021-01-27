// @description Delete Card
import { deleteCard } from '../../../../../../../utils/api'
import { handleErrors } from '../../../../../../../utils/helper'
import { BoardOptions, CardOptions, ListOptions } from '../../../../../../../utils/interfaces';

if (options.boards && options.lists && options.cards) {
	const { html_url: boardURL, name: boardName } = options.boards as BoardOptions;
	const { id: cardId } = options.cards as CardOptions;
	const { name: listName } = options.lists as ListOptions;

	if (cardId) {
		const response = deleteCard(cardId);
		if (response.status >= 200 && response.status <= 299) {
			notify('Card Deleted', 'success', 2000);
			open(boardURL);
			reIndex(['boards', boardName, 'lists', listName, 'cards']);
		} else {
			handleErrors(response.status, response.response);
		}
	}
}
