function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Export the functions to be used in other files
// it enables us to import these functions in other modules
export { add, multiply };

// or 
/* export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
} 
    */