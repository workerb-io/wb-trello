// @description Card options
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper'
import { getAllCardsInList } from '../../../../../../utils/api'
import { CardOptions, ListOptions } from '../../../../../../utils/interfaces'

export default () => {
	if (options.lists) {
		const { id: listId } = options.lists as ListOptions;

		const response = getAllCardsInList(listId);

		const result = decodeApiResponse(response);

		if (!(result.status >= 200 && result.status <= 299)) {
			handleErrors(result.status, result.response.message)
		} else {

			const cards: Array<CardOptions> = result.response.map((card: any) => {
				let cardInfo: CardOptions = {
					name: card.name,
					html_url: card.url,
					id: card.id
				};
				return cardInfo;
			});

			return JSON.stringify({
				add: cards
			});
		}
	}
}
