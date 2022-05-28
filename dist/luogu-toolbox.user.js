// ==UserScript==
// @name        Luogu Toolbox
// @namespace   Violentmonkey Scripts
// @match       https://www.luogu.com.cn/*
// @grant       none
// @version     0.0.1
// @author      earthmessenger
// @description a useful userscript for luogu
// ==/UserScript==

(function () {
	'use strict';

	var toolboxContainer = document.createElement("div");
	toolboxContainer.id = "luogu-toolbox";
	document.body.insertAdjacentElement("beforeend", toolboxContainer);

})();
