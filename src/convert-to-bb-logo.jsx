import {elements} from "./elements.js";
import PeriodicElement, {UnstyledCharacter} from "./table-element.jsx";
import React from "react";
import { v4 as uuidv4 } from 'uuid';

// find all two character symbols in the text and convert them to PeriodicElement components and return an array of them
// in the event none are found, return an empty array
function findAllTwoSymbolElements(text) {

    if (text === undefined || text.length < 2) {
        console.log("findTwoCharacterElements: Text is empty or less than 2 characters");
        return [];
    }

    let allFoundElements = [];
    let splitWords = [...text];

    let currentWordResult = [];

    let leftIDX = 0;
    let rightIDX = 1;

    let maxArrayIDX = splitWords.length - 1;

    while (rightIDX <= maxArrayIDX) {

        let charKey = uuidv4()
        let char = splitWords[leftIDX];
        let nextChar = splitWords[rightIDX] !== undefined ? splitWords[rightIDX] : "";
        let symbol = char.toLowerCase() + nextChar.toLowerCase();

        if (symbol in elements) {
            currentWordResult.push(
                <PeriodicElement symbol={symbol} atomicNumber={elements[symbol]} key={charKey}/>
            );

            // get the rest of the word because we only accept one symbol per word
            splitWords.slice(rightIDX + 1, maxArrayIDX + 1).map((i) => {
                let newCharKey = uuidv4()
                currentWordResult.push(<UnstyledCharacter symbol={i} charKey={newCharKey}/>);
            });

            // this is the whole word, push it to the allFoundElements array
            allFoundElements.push(currentWordResult);

            // reset and load up the next word up to our restart point
            currentWordResult = [];
            splitWords.slice(0, rightIDX).map((i) => {
                let newCharKey = uuidv4()
                currentWordResult.push(<UnstyledCharacter symbol={i} charKey={newCharKey}/>);
            });

            // just increment once for the next iteration because the next two characters could also be a symbol
            leftIDX = leftIDX + 1;
            rightIDX = leftIDX + 1;

        }
        else {
            currentWordResult.push(<UnstyledCharacter symbol={char} charKey={charKey}/>);

            leftIDX = leftIDX + 1;
            rightIDX = rightIDX + 1;
        }
    }

    return allFoundElements;
}

// find all one character symbols in the text and convert them to PeriodicElement components and return an array of them
// in the event none are found, return an empty array
function findAllOneSymbolElements(text) {
    if (text === undefined || text.length < 1) {
        console.log("findTwoCharacterElements: Text is empty or less than 2 characters");
        return [];
    }

    let allFoundElements = [];
    let splitWords = [...text];

    let currentWordResult = [];

    let leftIDX = 0;

    let maxArrayIDX = splitWords.length - 1;


    while (leftIDX <= maxArrayIDX) {

        let charKey = uuidv4()
        let char = splitWords[leftIDX];
        let symbol = char.toLowerCase()

        if (symbol in elements) {
            currentWordResult.push(
                <PeriodicElement symbol={symbol} atomicNumber={elements[symbol]} key={charKey}/>
            );

            // get the rest of the word because we only accept one symbol per word
            splitWords.slice(leftIDX + 1, maxArrayIDX + 1).map((i) => {
                let newCharKey = uuidv4()
                currentWordResult.push(<UnstyledCharacter symbol={i} charKey={newCharKey}/>);
            });

            // this is the whole word, push it to the allFoundElements array
            allFoundElements.push(currentWordResult);

            // reset and load up the next word up to our restart point
            currentWordResult = [];
            splitWords.slice(0, leftIDX + 1).map((i) => {
                let newCharKey = uuidv4()
                currentWordResult.push(<UnstyledCharacter symbol={i} charKey={charKey}/>);
            });

            // just increment once for the next iteration because the next two characters could also be a symbol
            leftIDX = leftIDX + 1;


        } else {
            currentWordResult.push(<UnstyledCharacter symbol={char} charKey={charKey}/>);
            leftIDX = leftIDX + 1;
        }
    }

    return allFoundElements;
}


export const convertToBreak = (text) => {

    let allFoundTwoSymbolElements = findAllTwoSymbolElements(text);
    let allFoundOneSymbolElements = findAllOneSymbolElements(text);

    // we should still display the text if no symbols were found
    if (allFoundTwoSymbolElements.length ===0 && allFoundOneSymbolElements.length === 0) {
        return [text]
    }

    // join them together so we can display the two symbol elements first
    if (allFoundTwoSymbolElements.length > 0) {
        return [...allFoundTwoSymbolElements, ...allFoundOneSymbolElements];
    }

    return allFoundOneSymbolElements;
};