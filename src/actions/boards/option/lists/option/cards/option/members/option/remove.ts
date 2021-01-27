import { removeMemberFromCard } from '../../../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../../../utils/helper'
import { BoardOptions, CardOptions, ListOptions, MemberOptions } from '../../../../../../../../../utils/interfaces'

if (options?.cards && options?.members) {

	const { name: boardName } = options.boards as BoardOptions;
	const { name: listName } = options.lists as ListOptions;
	const { id: cardId, name: cardName, html_url: cardURL } = options.cards as CardOptions;
	const { id: memberId } = options.members as MemberOptions;

	const response = removeMemberFromCard(cardId, memberId);

	if (response.status >= 200 && response.status <= 299) {
		let result = decodeApiResponse(response);
		notify('Member Removed', 'success', 2000);
		reIndex(['boards', boardName, 'lists', listName, 'cards', cardName]);
		// open(cardURL);
	} else {
		handleErrors(response.status, response.response);
	}
}
