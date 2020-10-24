<h1 align="center">wb-trello</h1>
<h3 align="center"><a href="https://workerb.io/">workerB</a> package for <a href="https://trello.com/">Trello</a></h3>

# Demo
<div align="center">
  <a href="http://www.youtube.com/watch?v=FZogrzyMrEM">
     <img 
       src="https://user-images.githubusercontent.com/29889620/88480229-5ce5b200-cf72-11ea-803f-c2621d4570d4.png"
       alt="Workerb GitHub Package" 
       style="width:100%;"
      >
  </a>
</div>

## How to install:
* Create account on [workerb](https://workerb.io/).
* Install [workerb extension](https://chrome.google.com/webstore/detail/jdbakbjkiklbibfccegfejjdlcgpnnpe).
* Add Trello package.
* Setup Trello package.
*  🚀🚀

## Actions

### Boards
- [`trello boards`](./src/actions/boards/options.ts) - Get all boards.
- [`trello boards ${boards_name}`](./src/actions/boards/options/index.ts) - Open current board.
- [`trello boards new ${boards_name}`](./src/actions/boards/new.ts) - Create a new board.
- [`trello borads ${board_name} delete`](./src/actions/boards/options/delete.ts) - Delete a board.
- [`trello borads ${board_name} rename ${new_board_name}`](./src/actions/boards/options/rename.ts) - Rename a board.

### Lists
- [`trello boards ${board_name} lists`](./src/actions/boards/options/lists/options.ts) - Get all lists on a board
- [`trello boards ${board_name} lists new ${new_list_name}`](./src/actions/boards/options/lists/new.ts) - Create a new list on that board.
- [`trello boards ${board_name} lists ${list_name} rename ${new_list_name}`](./src/actions/boards/options/lists/options/rename.ts) - Rename a list
- [`trello boards ${board_name} lists ${list_name} archive`](./src/actions/boards/options/lists/options/archive.ts) - Archive a list

### Cards
- [`trello boards ${board_name} lists ${list_name} cards`](./src/actions/boards/options/lists/options/cards/options.ts) - Get all cards of a list
- [`trello boards ${board_name} lists ${list_name} cards new ${new_card_name}`](./src/actions/boards/options/lists/options/cards/new.ts) - Create a new card in list
- [`trello boards ${board_name} lists ${list_name} cards ${card_name} delete`](./src/actions/boards/options/lists/options/cards/options/delete.ts) - Delete card from list
- [`trello boards ${board_name} lists ${list_name} cards ${card_name} rename ${updated_card_name}`](./src/actions/boards/options/lists/options/cards/options/rename.ts) - Rename a Card
- [`trello boards ${board_name} lists ${list_name} cards ${card_name} update ${add_new_description}`](./src/actions/boards/options/lists/options/cards/options/update.ts) - Add/Update description on card

### Members
- [`trello boards ${board_name} lists ${list_name} cards ${card_name} members`](./src/actions/boards/options/lists/options/cards/options/members/options.ts) - Get all members on board
- [`trello boards ${board_name} lists ${list_name} cards ${card_name} members ${member_name} add`](./src/actions/boards/options/lists/options/cards/options/members/options/add.ts) - Add member to card

## Development
- To install project dependencies, run `yarn install`.
- To build the project, run `yarn build`.
- To continuously build the project, run `yarn watch`.
- Create `.env` file inside your root folder and add your token and secret with respective keys `TRELLO_KEY` and `TRELLO_SECRET`. Checkout [`.env.example`](./.env.example) for more .
- Run `yarn build` or `yarn watch` in terminal.
- Log into `https://workerb.app`.
- Run `dev on` in the workerB action bar.
- Run`loadDir <path>` in the workerB action bar. `path` is the path of the build folder generated by yarn.

## Support
* [Forums](http://forums.workerb.io/)
