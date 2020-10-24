import { api } from './helper'

class Request {
	private api: (uri: string) => string = api

	get(uri: string, headers = {}) {
		return httpGet(this.api(uri), headers)
	}

	delete(uri: string, headers = {}) {
		return httpDelete(this.api(uri), headers)
	}

	put(uri: string, headers = {}) {
		return httpPut(this.api(uri), headers)
	}

	post(uri: string, headers = {}) {
		return httpPost(this.api(uri), headers)
	}
}

const request = new Request()

export default request
