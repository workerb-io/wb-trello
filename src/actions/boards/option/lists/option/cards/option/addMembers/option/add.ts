import { addMemberToCardId } from '../../../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../../../utils/helper'
import { BoardOptions, CardOptions, ListOptions, MemberOptions } from '../../../../../../../../../utils/interfaces';

if (options?.cards && options?.addMembers) {

	const { name: boardName } = options.boards as BoardOptions;
	const { name: listName } = options.lists as ListOptions;
	const { id: cardId, name: cardName, html_url: cardURL } = options.cards as CardOptions;
	const { id: memberId } = options.addMembers as MemberOptions;

	const response = addMemberToCardId(cardId, memberId);

	if (response.status >= 200 && response.status <= 299) {
		let result = decodeApiResponse(response);
		notify('Member Added', 'success', 2000);
		reIndex(['boards', boardName, 'lists', listName, 'cards', cardName]);
		// open(cardURL);
	} else {
		handleErrors(response.status, response.response)
	}
}
