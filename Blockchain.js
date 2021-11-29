/**
 * @classdesc This Blockchain class to deal with the
 * operations like linking to the block to the chain,
 * unlinking the block from the chain, mining the block,
 * etc.
 * 
 */
class Blockchain {
   /**
    * Creates the Blockchain object.
    * 
    * @param {number} difficulty - The difficulty level of mining.
    */
   constructor(difficulty) {
      this.difficulty = difficulty;
      this.chain = [];
   }
   
   /**
    * This method adds the new block to the chain.
    * 
    * @param {Block} block - The block to be added to the chain.
    */
   add(block) {
      this.chain.push(block);
   }
   
   /**
    * This method removes the existing block from the chain.
    * 
    * @param {Block} block - The block to be removed from the chain.
    */
   remove(block) {
      this.chain.pop(block);
   }
   
   /**
    * This method mines the block on the chain.
    * 
    * @param {Block} block - The block to mine.
    */
   mine(block) {
      try {
         block.previousHash = this.chain.at(-1).hashBlock();
      } catch (e) {}
      
      while (true) {
         if (block.hashBlock().slice(0, this.difficulty) === '0'.repeat(this.difficulty)) {
            this.add(block);
            break;
         } else {
            block.nonce++;
         }
      }
   }
   
   /**
    * This method will check the validity of each block node
    * on the blockchain to see if it was been tempered.
    * 
    * @returns {Boolean}
    */
   isValid() {
      for (let i = 1; i < this.chains.length; i++) {
         const previous = this.chain[i].previousHash;
         const current = this.chain.at(i-1).hashBlock();
         if (previous !== current || current.slice(0, this.difficulty) !== '0'.repeat(this.difficulty)) {
            return false;
         }
      }
      return true;
   }
}

module.exports = Blockchain;