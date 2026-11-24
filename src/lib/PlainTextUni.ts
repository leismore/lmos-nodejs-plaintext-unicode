/**
 * Class PlainTextUni for handling plain text with Unicode support.
 */

import { PTUError } from './PTUError.js';
import { NonUnicodeEOL } from './NonUnicodeEOL.js';

import {
    PLAINTEXT_LINE_BREAK,
    EOL_UNIX
} from './EOLs.js';

const ALL_NON_UNICODE_EOL = [ ... new Set( Object.values(NonUnicodeEOL) ) ];

class PlainTextUni {

    /**
     * Normalize end-of-line characters.
     * The Unicode EOL characters (LS and PS) will be preserved.
     * All non-Unicode EOL characters will be converted to the specified EOL.
     * The page-break character (FF) will also be preserved.
     * 
     * @throws {PTUError}
     *   2    not_string
     *   3    invalid_EOL
     */
    public static normalize_eol(
        text : string,
        eol  : NonUnicodeEOL = NonUnicodeEOL.PT_LINE_BREAK
    ): string {

        let normalizedText: string;
        
        // Check inputs
        if (typeof text !== 'string') {
            throw new PTUError({
                code: '2',
                message: 'not_string'
            });
        }

        if ( !ALL_NON_UNICODE_EOL.includes(eol) ) {
            throw new PTUError({
                code: '3',
                message: 'invalid_EOL'
            });
        }

        // Normalize non-Unicode EOL characters
        normalizedText = text.replaceAll(PLAINTEXT_LINE_BREAK, EOL_UNIX);

        for (const nonUnicodeEOL of ALL_NON_UNICODE_EOL) {

            if ( nonUnicodeEOL !== PLAINTEXT_LINE_BREAK &&
                 nonUnicodeEOL !== EOL_UNIX
            ) {
                normalizedText = normalizedText.replaceAll(nonUnicodeEOL, EOL_UNIX);
            }

        }

        normalizedText = normalizedText.replaceAll(EOL_UNIX, eol);

        return normalizedText;

    }
}

export { PlainTextUni };
