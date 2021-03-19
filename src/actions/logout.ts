// @description Logout from trello automation package

setVars([
	{
		name: 'TRELLO_SECRET',
		value: '',
	},
	{
		name: 'TRELLO_KEY',
		value: '',
	}
], { local: true });

notify('Secrets removed successfully', 'success', 3000);
reIndex([]);