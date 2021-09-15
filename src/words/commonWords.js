import { articles } from "./articles";
import { pronouns } from "./pronouns";
import { conjunctions } from "./conjunctions";
import { prepositions } from "./prepositions";
import { otherCommonWords } from "./otherCommonWords";

export const commonWords = Array.from(
    new Set([
        ...articles,
        pronouns,
        conjunctions,
        prepositions,
        otherCommonWords,
    ])
);