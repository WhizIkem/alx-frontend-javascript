// Function to return a constant string using 'const'
export function taskFirst() {
    const task = 'I prefer const when I can. ';
    return task;
}

// Function to return a string 
export function getLast() {
    return ' is okay';
}

// Function to concatenate a string using 'let'
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}