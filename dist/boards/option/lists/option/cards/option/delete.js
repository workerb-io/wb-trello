!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return n={},o.m=r={0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleErrors=t.decodeApiResponse=t.api=void 0;var n=r(1);t.api=function(e){return""+n.uri+e+"key="+n.key+"&token="+n.secret},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}};t.handleErrors=function(e,t){switch(e){case 401:case 500:case 403:case 404:case 400:notify(t,"error",3e3)}}},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.secret=t.key=t.uri=void 0,t.uri="https://api.trello.com",t.key=VARS.TRELLO_KEY,t.secret=VARS.TRELLO_SECRET},17:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
// @description Delete Card
var n,o,s=r(2),a=r(0);options.boards&&options.lists&&options.cards&&(n=(o=options.boards).html_url,t=o.name,r=options.cards.id,o=options.lists.name,r&&(200<=(r=s.deleteCard(r)).status&&r.status<=299?(notify("Card Deleted","success",2e3),open(n),reIndex(["boards",t,"lists",o,"cards"])):a.handleErrors(r.status,r.response)))},2:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.removeMemberFromCard=t.addMemberToCardId=t.getAllCardMembers=t.getAllBoardMembers=t.updateCard=t.deleteCard=t.createNewCard=t.getAllCardsInList=t.archiveList=t.renameList=t.createNewList=t.getSingleBoard=t.getAllListsOfBoard=t.renameBoard=t.deleteBoard=t.createNewBoard=t.getAllBoards=void 0;var o=n(r(3));t.getAllBoards=function(){return o.default.get("/1/members/me/boards?fields=name,url&")};t.createNewBoard=function(e){return o.default.post("/1/boards/?name="+e+"&")};t.deleteBoard=function(e){return o.default.delete("/1/boards/"+e+"?")};t.renameBoard=function(e,t){return o.default.put("/1/boards/"+e+"?name="+t+"&")};t.getAllListsOfBoard=function(e){return o.default.get("/1/boards/"+e+"/lists?")};t.getSingleBoard=function(e){return o.default.get("/1/boards/"+e+"?")};t.createNewList=function(e,t){return o.default.post("/1/lists?idBoard="+e+"&name="+t+"&")};t.renameList=function(e,t){return o.default.put("/1/lists/"+e+"?name="+t+"&")};t.archiveList=function(e){return o.default.put("/1/lists/"+e+"/closed?value=true&")};t.getAllCardsInList=function(e){return o.default.get("/1/lists/"+e+"/cards?")};t.createNewCard=function(e,t){return o.default.post("/1/cards?name="+t+"&idList="+e+"&")};t.deleteCard=function(e){return o.default.delete("/1/cards/"+e+"?")};t.updateCard=function(e){var t=e.cardId,r=e.newCardName,n=e.shouldAddDescription,n=void 0!==n&&n,e=e.description,e=void 0===e?"":e;return o.default.put("/1/cards/"+t+"?"+(n?"desc="+e+"&":"name="+r+"&"))};t.getAllBoardMembers=function(e){return o.default.get("/1/boards/"+e+"/members?")};t.getAllCardMembers=function(e){return o.default.get("/1/cards/"+e+"/members?")};t.addMemberToCardId=function(e,t){return o.default.post("/1/cards/"+e+"/idMembers?value="+t+"&")};t.removeMemberFromCard=function(e,t){return o.default.delete("/1/cards/"+e+"/idMembers/"+t+"?")}},3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);function o(){this.api=n.api}r=new(o.prototype.get=function(e,t){return void 0===t&&(t={}),httpGet(this.api(e),t)},o.prototype.delete=function(e,t){return void 0===t&&(t={}),httpDelete(this.api(e),t)},o.prototype.put=function(e,t){return void 0===t&&(t={}),httpPut(this.api(e),t)},o.prototype.post=function(e,t){return void 0===t&&(t={}),httpPost(this.api(e),t)},o);t.default=r}},o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=17);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});