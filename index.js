//import statements should be at the top
import fs from 'fs';
import os from 'os';
import chalk from 'chalk';
import figlet from 'figlet';
import {add, multiply } from './math.js';

console.log('The sum is:', add(95, 25));
console.log('The product is:', multiply(10, 5)); 

fs.writeFileSync('message.txt', 'Hello, World!');
const data = fs.readFileSync('message.txt', 'utf8');
console.log(`File contents:`, data);

console.log(`operating system info:`, os.platform())
console.log(`Architecture:`, os.arch());
console.log(`Total Memory:`, os.totalmem());
console.log(`Free Memory:`, os.freemem());

console.log(chalk.red("Hello in red color"));
console.log(chalk.green("Hello in green color"));
console.log(chalk.blue("Hello in blue color"));

console.log("Hello, World!");

figlet(`Node Rocks!`, (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        return;
    }
    console.log(data);
});



/*
UTF-8 is an encoding system that uses 8 binary digits to represent an alphabet */
