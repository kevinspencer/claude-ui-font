// ==UserScript==
// @name         Claude - ChatGPT Font Style
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Make Claude.ai use ChatGPT-style fonts with proper sizing and syntax highlighting
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

  /* Syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-built_in { color: #c792ea !important; }
  .hljs-string, .hljs-attr, .hljs-addition { color: #c3e88d !important; }
  .hljs-comment, .hljs-quote { color: #546e7a !important; font-style: italic !important; }
  .hljs-number, .hljs-literal { color: #f78c6c !important; }
  .hljs-title, .hljs-section { color: #82aaff !important; }
  .hljs-type, .hljs-class { color: #ffcb6b !important; }
  .hljs-variable, .hljs-template-variable { color: #f07178 !important; }
  .hljs-tag, .hljs-name { color: #f07178 !important; }
  .hljs-meta { color: #89ddff !important; }
`);
