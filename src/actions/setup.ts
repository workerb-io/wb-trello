open('https://trello.com/app-key')

const key = read('#key', {
	method: 'by_query_selector',
})

const secret = read('#secret', {
	method: 'by_query_selector',
})

if (!key || !secret) {
	notify("Trello Secrets can't be empty", 'error', 3000)
} else {
	setVar('trello', [
		{
			name: 'TRELLO_KEY',
			value: key,
		},
	])
	setVar('trello', [
		{
			name: 'TRELLO_SECRET',
			value: secret,
		},
	])
	notify('Secrets added successfully', 'success', 3000)
	reIndex()
}
