/*
    This file contains a helper function for sorting the Cards in a pane.
    It also contains the variable defining the maximum number of columns <CardColumns> can have
*/

export const MAX_COLUMNS = 3;

export function sortArrayForCardColumns(tempMap) {
    let toReturn = [];
    // <CardColumns> renders by column, not by row. 
    // To ensure the tiles appear in the correct order, we need to manually break them into columns
    for (let c = 0; c < MAX_COLUMNS; c++) {
        let nextElement = c;
        while (nextElement < tempMap.length) {
            toReturn.push(tempMap[nextElement]);
            nextElement += MAX_COLUMNS;
        }
    }
    return toReturn;
}