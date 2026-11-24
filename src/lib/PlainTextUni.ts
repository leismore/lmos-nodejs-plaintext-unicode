/**
 * Class PlainTextUni for handling plain text with Unicode support.
 */

import { PTUError } from './PTUError.js';
import {
    PLAINTEXT_LINE_BREAK,
    UNICODE_NEXT_LINE,
    ALL,
    CANONICAL
} from './EOLs.js';

class PlainTextUni {

    /**
     * Normalize the end-of-line characters.
     * The return text will use PS, LS, NEL, and FF characters.
     * 
     * @throws {PTUError}
     *   2    not_string
     *   3    invalid_EOL
     */
    public static normalize_eol(
        text : string
    ): string {

        let normalizedText: string = '';
        
        // Check inputs
        if (typeof text !== 'string') {
            throw new PTUError({
                code: '2',
                message: 'not_string'
            });
        }

        // Replace all CRLF with LF
        normalizedText = text.replaceAll(PLAINTEXT_LINE_BREAK, UNICODE_NEXT_LINE);

        // Replace all other EOL characters with LF
        for (const eol of ALL) {
            if ( !CANONICAL.includes(eol) ) {
                normalizedText = normalizedText.replaceAll(eol, UNICODE_NEXT_LINE);
            }
        }

        return normalizedText;

    }
}

export { PlainTextUni };
