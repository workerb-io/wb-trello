// @description Setup trello secrets

let response = httpGet("https://trello.com/app-key");

if (response.status === 200) {
	// user is logged in
	open('https://trello.com/app-key')

	const key = read('#key', {
		method: 'by_query_selector',
	});

	const secretURL = getAttribute(["href"], '[data-track-direct-object="generate token link"]', {
		method: "by_query_selector"
	}) as any;

	let token: string | null = null

	if (secretURL[0] && secretURL[0].href) {
		open(`https://trello.com${secretURL[0] && secretURL[0].href}`);

		click("#approveButton", {
			method: "by_query_selector",
			expectReload: true,
			retryDuration: 500
		});

		token = read("pre", {
			method: "by_query_selector"
		});
	}

	if (!key || !token) {
		notify("Trello Secrets can't be empty", 'error', 3000)
	} else {

		if (setVars) {
			setVars([
				{
					name: 'TRELLO_SECRET',
					value: token,
				},
				{
					name: 'TRELLO_KEY',
					value: key,
				}
			], { local: true })
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
					value: token,
				},
			])
		}

		notify('Secrets added successfully', 'success', 3000)
		reIndex([])
	}
} else {
	// user not logged in
	open("https://trello.com/login") // open trello login page
	notify("Please login into your Atlassian account", "error", 3000); // notify user to login
}
