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

  /* Syntax highlighting - Claude uses Prism.js token classes */
  .token.comment, .token.prolog, .token.doctype, .token.cdata { color: #546e7a !important; font-style: italic !important; }
  .token.keyword, .token.selector { color: #c792ea !important; }
  .token.string, .token.attr-value { color: #c3e88d !important; }
  .token.number, .token.boolean { color: #f78c6c !important; }
  .token.function { color: #fbad60 !important; }
  .token.operator, .token.punctuation { color: #d3d7de !important; }
  .token.class-name, .token.builtin { color: #ffcb6b !important; }
  .token.variable { color: #f07178 !important; }
  .token.tag { color: #f07178 !important; }
  .token.attr-name { color: #89ddff !important; }
`);
