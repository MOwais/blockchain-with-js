// class Blockchain {
//   constructor() {
//     this.chain = [];
//     this.pendingTransactions = [];
//   }
// }

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transations: this.pendingTransactions,
    nonce: nonce, // proof of work, just any number
    hash: hash, // data from new block
    previousBlockHash: previousBlockHash,
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount,
    sender,
    recipient,
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()["index"] + 1;
};

module.exports = Blockchain;
