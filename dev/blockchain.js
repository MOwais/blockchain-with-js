// class Blockchain {
//   constructor() {
//     this.chain = [];
//     this.newTransactions = [];
//   }
// }

function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transations: this.newTransactions,
    nonce: nonce, // proof of work, just any number
    hash: hash, // data from new block
    previousBlockHash: previousBlockHash,
  };

  this.newTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};
