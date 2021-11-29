/**
 * Blockchain program created just for fun!!!
 * 
 * @author Ayush Dedhia <ayushdedhia25@gmail.com>
 * @version 1.0.0
 * @license ISC
 */
const Block = require('./Block');
const Blockchain = require('./Blockchain');

/**
 * Using IIFE (Immediately Invoked Function Expression) to mimick
 * the main method and run it.
 * To run this program
 * - node index.js
 */
(() => {
   // Creating the blockchain with the difficulty level
   // set to 3
   const blockchain = new Blockchain(3);
   
   // Creating the fake database just to get something to
   // encrypt inside the blockchain.
   const database = ['Hello, World!', 'I am', 'Ayush'];
   
   // For each fake database elements...
   // Create a new block and pass it a val and a number.
   // Then mine the block.
   database.forEach((val, num) => {
      const block = new Block(val, num + 1);
      blockchain.mine(block);
   });
   
   // Iterating over the list of mined blocks and display it.
   for (const block of blockchain.chain) {
      console.log(block);
   }
})();