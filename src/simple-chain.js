const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(link) {
    this.chains.push(link);

    return this;
  },

  removeLink(position) {
    console.log(position, this.chains.length);
    if (!Number.isInteger(position)
      || !(position > 0 && position < this.chains.length)
    ) {
      this.deleteChain();
      console.log("GOOO");
      throw new Error("You can\'t remove incorrect link!");
    }

    this.chains.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chains = this.chains.reverse();

    return this;
  },

  deleteChain() {
    this.chains.length = 0;
  },

  finishChain() {
    const strChain = this.chains.map((chain) => `( ${chain} )`).join("~~");
    this.deleteChain();

    return strChain;
  }
};

module.exports = {
  chainMaker
};
