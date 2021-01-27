/* eslint-disable default-case */
import { uri, key, secret } from './constants'
import { DecodedAPIResponse } from './interfaces'

export function api(endpoint: string): string {
	return `${uri}${endpoint}key=${key}&token=${secret}`;
}

export function decodeApiResponse(apiResponse: APIResponse): DecodedAPIResponse {
	const result = apiResponse

	if (!result.response) {
		return {
			response: {},
			status: result.status,
		}
	}

	return {
		response: JSON.parse(result.response),
		status: result.status,
	}
}

export const handleErrors = (status: number, response: any) => {
	switch (status) {
		case 401:
		case 500:
		case 403:
		case 404:
		case 400:
			notify(response, 'error', 3000)
	}
}
