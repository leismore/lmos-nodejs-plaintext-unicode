/**
 * The Error class for this project.
 * 
 * Code     Message
 * 1        unknown
 * 2        not_string
 * 3        invalid_EOL
 */

import { LMError } from "@leismore/lmos-nodejs-lmerror";
import type { LMErrorErr as PTUErrorErr } from "@leismore/lmos-nodejs-lmerror";

class PTUError extends LMError {

    /**
     * @throws {Error}
     *   invalid_error
     *   invalid_error_message
     *   invalid_error_code
     *   invalid_previous
     */
    constructor(err: PTUErrorErr, previous?: Error) {
        super(err, undefined, previous);
        this.name = "PTUError";
    }

}

export { PTUError };
export type { PTUErrorErr };
