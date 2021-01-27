!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=24)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleErrors=t.decodeApiResponse=t.api=void 0;var n=r(1);t.api=function(e){return""+n.uri+e+"key="+n.key+"&token="+n.secret},t.decodeApiResponse=function(e){var t=e;return t.response?{response:JSON.parse(t.response),status:t.status}:{response:{},status:t.status}},t.handleErrors=function(e,t){switch(e){case 401:case 500:case 403:case 404:case 400:notify(t,"error",3e3)}}},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.secret=t.key=t.uri=void 0,t.uri="https://api.trello.com",t.key=VARS.TRELLO_KEY,t.secret=VARS.TRELLO_SECRET},2:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.removeMemberFromCard=t.addMemberToCardId=t.getAllCardMembers=t.getAllBoardMembers=t.updateCard=t.deleteCard=t.createNewCard=t.getAllCardsInList=t.archiveList=t.renameList=t.createNewList=t.getSingleBoard=t.getAllListsOfBoard=t.renameBoard=t.deleteBoard=t.createNewBoard=t.getAllBoards=void 0;var o=n(r(3));t.getAllBoards=function(){return o.default.get("/1/members/me/boards?fields=name,url&")},t.createNewBoard=function(e){return o.default.post("/1/boards/?name="+e+"&")},t.deleteBoard=function(e){return o.default.delete("/1/boards/"+e+"?")},t.renameBoard=function(e,t){return o.default.put("/1/boards/"+e+"?name="+t+"&")},t.getAllListsOfBoard=function(e){return o.default.get("/1/boards/"+e+"/lists?")},t.getSingleBoard=function(e){return o.default.get("/1/boards/"+e+"?")},t.createNewList=function(e,t){return o.default.post("/1/lists?idBoard="+e+"&name="+t+"&")},t.renameList=function(e,t){return o.default.put("/1/lists/"+e+"?name="+t+"&")},t.archiveList=function(e){return o.default.put("/1/lists/"+e+"/closed?value=true&")},t.getAllCardsInList=function(e){return o.default.get("/1/lists/"+e+"/cards?")},t.createNewCard=function(e,t){return o.default.post("/1/cards?name="+t+"&idList="+e+"&")},t.deleteCard=function(e){return o.default.delete("/1/cards/"+e+"?")},t.updateCard=function(e){var t=e.cardId,r=e.newCardName,n=e.shouldAddDescription,a=void 0!==n&&n,u=e.description,s=void 0===u?"":u;return o.default.put("/1/cards/"+t+"?"+(a?"desc="+s+"&":"name="+r+"&"))},t.getAllBoardMembers=function(e){return o.default.get("/1/boards/"+e+"/members?")},t.getAllCardMembers=function(e){return o.default.get("/1/cards/"+e+"/members?")},t.addMemberToCardId=function(e,t){return o.default.post("/1/cards/"+e+"/idMembers?value="+t+"&")},t.removeMemberFromCard=function(e,t){return o.default.delete("/1/cards/"+e+"/idMembers/"+t+"?")}},24:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2);if(options.boards){var a=options.boards.id,u=args.filter(Boolean).join(" ");u||(u=prompt("Please enter a new board name"));var s=o.renameBoard(a,u);if(s.status>=200&&s.status<=299){var d=n.decodeApiResponse(s);notify("Board Renamed","success",2e3),open(d.response.url),reIndex(["boards"])}else n.handleErrors(s.status,s.response)}},3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=new(function(){function e(){this.api=n.api}return e.prototype.get=function(e,t){return void 0===t&&(t={}),httpGet(this.api(e),t)},e.prototype.delete=function(e,t){return void 0===t&&(t={}),httpDelete(this.api(e),t)},e.prototype.put=function(e,t){return void 0===t&&(t={}),httpPut(this.api(e),t)},e.prototype.post=function(e,t){return void 0===t&&(t={}),httpPost(this.api(e),t)},e}());t.default=o}})}));