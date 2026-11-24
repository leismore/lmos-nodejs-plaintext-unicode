/**
 * NonUnicodeEOL (Enum) representing a non-Unicode end-of-line character.
 */

import {
    PLAINTEXT_LINE_BREAK,
    EOL_MAC_9EARLIER,
    EOL_MAC,
    EOL_UNIX,
    EOL_WIN,
    EOL_EBCDIC
} from './EOLs.js';

enum NonUnicodeEOL {
    PT_LINE_BREAK = PLAINTEXT_LINE_BREAK,
    MAC_9EARLIER  = EOL_MAC_9EARLIER,
    MAC           = EOL_MAC,
    UNIX          = EOL_UNIX,
    WIN           = EOL_WIN,
    EBCDIC        = EOL_EBCDIC
}

export { NonUnicodeEOL };
