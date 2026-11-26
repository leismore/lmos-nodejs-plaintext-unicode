/**
 * ParsedText type representing a two-dimensional array of strings,
 * in which each sub-array represents a paragraph,
 * and each string within a sub-array represents a line within that paragraph.
 * 
 * A text always ends with an empty paragraph (empty array).
 * A paragraph always ends with an empty line (empty string).
 */

type ParsedText = string[][];

export type { ParsedText };
