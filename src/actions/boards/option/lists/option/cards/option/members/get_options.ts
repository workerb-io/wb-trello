/* eslint-disable consistent-return */
import { getAllBoardMembers } from '../../../../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../../../../utils/helper'

export default (): string | undefined => {
	if (!options.boards) return

	const { id } = options.boards
	const response = getAllBoardMembers(id)
	const result = decodeApiResponse(response)

	if (!(result.status >= 200 && result.status <= 299)) {
		handleErrors(result.status, result.response.message)
		return
	}
	return JSON.stringify({
		add: result.response.map((member: any) => ({
			name: `${member.fullName}(@${member.username})`,
			id: member.id,
		})),
	})
}
