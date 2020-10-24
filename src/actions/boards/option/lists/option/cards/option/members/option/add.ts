import { addMemberToCardId } from '../../../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../../../utils/helper'

if (options?.cards && options?.members) {
	const {
		cards: { id: cardId, html_url },
		members: { id: memberId },
	} = options

	const response = addMemberToCardId(cardId, memberId)

	let result = response

	if (result.status >= 200 && result.status <= 299) {
		result = decodeApiResponse(response)
		notify('Member Added', 'success', 2000)
		open(html_url)
	} else {
		handleErrors(result.status, result.response)
	}
}
