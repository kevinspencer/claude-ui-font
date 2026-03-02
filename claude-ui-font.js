// ==UserScript==
// @name         Claude - ChatGPT Font Style
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Make Claude.ai use ChatGPT-style fonts with proper sizing
// @match        https://claude.ai/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  /* Base font */
  body, p, div, span, li, td, th, input, textarea, button {
    font-family: "Segoe UI", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
  }

  /* Code blocks */
  pre, code, kbd, samp, tt {
    font-family: "Söhne Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace !important;
    font-size: 14px !important;
    line-height: 1.6 !important;
  }

  /* Inline code */
  p code, li code {
    font-size: 14px !important;
    padding: 2px 5px !important;
    border-radius: 4px !important;
    background-color: rgba(0,0,0,0.08) !important;
  }
`);
