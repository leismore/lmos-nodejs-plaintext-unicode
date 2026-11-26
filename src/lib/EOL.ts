/**
 * EOL (Enum) representing a end-of-line character.
 * It could be an Unicode or non-Unicode EOL character.
 */

import {
    PLAINTEXT_LINE_BREAK,
    UNICODE_LINE_SEPARATOR,
    UNICODE_PARAGRAPH_SEPARATOR,
    EOL_MAC_9EARLIER,
    EOL_MAC,
    EOL_UNIX,
    EOL_WIN,
    EOL_EBCDIC
} from './EOLs.js';

enum EOL {
    PT_LINE_BREAK           = PLAINTEXT_LINE_BREAK,
    UNI_LINE_SEPARATOR      = UNICODE_LINE_SEPARATOR,
    UNI_PARAGRAPH_SEPARATOR = UNICODE_PARAGRAPH_SEPARATOR,
    MAC_9EARLIER            = EOL_MAC_9EARLIER,
    MAC                     = EOL_MAC,
    UNIX                    = EOL_UNIX,
    WIN                     = EOL_WIN,
    EBCDIC                  = EOL_EBCDIC
}

export { EOL };
