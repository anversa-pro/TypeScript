#!/usr/bin/env ts-node-script

let textToInspect = "TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor. TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.";


function normalize(word: string) {
    return word.toLowerCase().replace(/[.!,?]/g, "");
}

function wordRepetitions(text: string) {
    let dict: { [key: string]: number } = {};
    let separatedWords = text.split(" ");
    for (let word of separatedWords)
    {
        if (normalize(word) in dict)
        {
            ++dict[normalize(word)];
        }
        else
        {
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict);
    let dicto: { two: string }
}

wordRepetitions(textToInspect);