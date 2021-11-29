const crypto = require('crypto');

/**
 * This function takes in the (n) parameter as an array
 * and hashes it with the sha256 algorithm. And convert
 * it into the hex form.
 * 
 * @param {Array} args - The data passed into the function
 * for hashing.
 */
function updateHash(...args) {
   const hashingText = args.join('');
   const h = crypto.createHash('sha256');
   h.update(hashingText);
   return h.digest('hex');
}

/**
 * @classdesc Block class creates the block object for
 * the cryptography coins.
 * 
 * @module Block
 */
class Block {
   /**
    * Creates a new Block object.
    * 
    * @param {String} data   - The data to keep in.
    * @param {number} number - The number of the block.
    */
   constructor(data, number) {
      this.data = data;
      this.nonce = 0;
      this.number = number;
      this.hash = null;
      this.previousHash = '0'.repeat(64);
   }
   
   /**
    * This method hashes the block object.
    * 
    * @returns {String} hash
    */
   hashBlock() {
      const hashed = updateHash(
         this.previousHash,
         this.number,
         this.data,
         this.nonce
      );
      
      // Setting the hash for this current block.
      this.hash = hashed;
      return hashed;
   }
}

module.exports = Block;