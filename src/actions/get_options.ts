// @description Get default options
import { key, secret } from '../utils/constants'

const returnOptions = () => {
	if (!key || !secret) {
		return JSON.stringify({
			remove: ['boards', 'logout'],
		})
	}
	return JSON.stringify({
		remove: ['setup'],
	})
}

export default returnOptions
