/**
 * End-of-line characters for different platforms.
 */

// text/plain
const PLAINTEXT_LINE_BREAK = '\r\n';
const PLAINTEXT_PAGE_BREAK = '\f';

// Unicode
const UNICODE_LINE_SEPARATOR      = '\u2028';
const UNICODE_PARAGRAPH_SEPARATOR = '\u2029';

// Others
const EOL_MAC_9EARLIER = '\r';
const EOL_MAC          = '\n';
const EOL_UNIX         = '\n';
const EOL_WIN          = '\r\n';
const EOL_EBCDIC       = '\u0085';

export {
  PLAINTEXT_LINE_BREAK,
  PLAINTEXT_PAGE_BREAK,
  UNICODE_LINE_SEPARATOR,
  UNICODE_PARAGRAPH_SEPARATOR,
  EOL_MAC_9EARLIER,
  EOL_MAC,
  EOL_UNIX,
  EOL_WIN,
  EOL_EBCDIC
};
