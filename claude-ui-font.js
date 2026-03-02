// ==UserScript==
// @name         Claude - ChatGPT Font Style
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Make Claude.ai use ChatGPT-style fonts
// @match        https://claude.ai/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  * {
    font-family: "Segoe UI", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
`);
