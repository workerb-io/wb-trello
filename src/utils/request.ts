import { api } from './helper'

class Request {
	private api: (uri: string) => string = api

	get(uri: string, headers = {}): APIResponse {
		return httpGet(this.api(uri), headers)
	}

	delete(uri: string, headers = {}): APIResponse {
		return httpDelete(this.api(uri), headers)
	}

	put(uri: string, headers = {}): APIResponse {
		return httpPut(this.api(uri), headers)
	}

	post(uri: string, headers = {}): APIResponse {
		return httpPost(this.api(uri), headers)
	}
}

const request = new Request()

export default request
