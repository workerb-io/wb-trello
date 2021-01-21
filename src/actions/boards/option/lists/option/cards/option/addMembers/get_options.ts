/* eslint-disable consistent-return */
import { getAllCardMembers, getAllBoardMembers } from '../../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../../utils/helper'
import { BoardOptions, CardOptions, MemberOptions } from '../../../../../../../../utils/interfaces';

export default (): string | undefined => {
	if (!options.cards && !options.boards) return;

	const { id: cardId } = options.cards as CardOptions;
	const { id: boardId } = options.boards as BoardOptions;

	const cardMembersResponse = getAllCardMembers(cardId);
	const boardMembersResponse = getAllBoardMembers(boardId);

	const cardMembersResult = decodeApiResponse(cardMembersResponse);
	const boardMembersResult = decodeApiResponse(boardMembersResponse);

	if (!(cardMembersResult.status >= 200 && cardMembersResult.status <= 299)) {
		handleErrors(cardMembersResult.status, cardMembersResult.response.message);
		return;
	}
	if (!(boardMembersResult.status >= 200 && boardMembersResult.status <= 299)) {
		handleErrors(boardMembersResult.status, boardMembersResult.response.message);
		return;
	}

	let remainingBoardMembers: Array<MemberOptions> = boardMembersResult.response.filter((member: any) => {
		let presentInCard: boolean = false;
		cardMembersResult.response.forEach((cardMember: any) => {
			if (cardMember && member && cardMember.id === member.id) {
				presentInCard = true;
			}
		});
		return !presentInCard;
	}).map((member: any) => {
		const memberInfo: MemberOptions = {
			name: `${member.fullName}(@${member.username})`,
			id: member.id,
		};
		return memberInfo;
	});

	return JSON.stringify({
		add: remainingBoardMembers
	});
}
