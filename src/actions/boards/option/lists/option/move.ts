// @description Move List
// @ignore

if (options.boards && options.lists) {
	const { id, html_url } = options.boards
	const { index } = options.lists

	open(html_url)

	click(`#board > div:nth-child(1) div.list-header-extras > a`, {
		method: 'by_query_selector',
		retryDuration: 200,
		numberOfTries: 10,
	})

	// click("Move List", { method: "by_regex" });

	// select("2", ".js-select-list-pos", {
	//   selectBy: "label",
	//   method: "by_query_selector",
	// });

	// click("Move");

	// click(".js-move-list", {
	//   method: "by_query_selector",
	//   retryDuration: 200,
	//   numberOfTries: 10,
	// });
}
