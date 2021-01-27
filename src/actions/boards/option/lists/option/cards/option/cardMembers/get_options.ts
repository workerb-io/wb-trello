/* eslint-disable consistent-return */
// @description Actions for selected member
import { getAllCardMembers } from '../../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../../utils/helper'
import { CardOptions, MemberOptions } from '../../../../../../../../utils/interfaces'

export default (): string | undefined => {
	if (!options.cards) return

	const { id: cardId } = options.cards as CardOptions;
	const response = getAllCardMembers(cardId);
	const result = decodeApiResponse(response);

	if (!(result.status >= 200 && result.status <= 299)) {
		handleErrors(result.status, result.response.message);
		return;
	}

	const cardMembers: Array<MemberOptions> = result.response.map((member: any) => {
		const memberInfo: MemberOptions = {
			name: `${member.fullName}(@${member.username})`,
			id: member.id,
		};
		return memberInfo;
	})

	return JSON.stringify({
		add: cardMembers
	})
}
