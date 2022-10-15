const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    let itemsAmount = this.chain.filter((item) => item != "~~").length;
    return itemsAmount;
  },
  addLink(value = "( )") {
    if (this.chain.length == 0) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push("~~");
      this.chain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    if (
      !isFinite(position) ||
      !Number.isInteger(position) ||
      position > this.getLength() ||
      position <= 0
    ) {
      throw new Error("You can't remove incorrect link!");
    }

    let chainIndex = position - 1;
    let items = this.chain.filter((item) => item != "~~");
    items.splice(chainIndex, 1);

    this.chain = [];
    for (let item of items) {
      this.chain.push(item);
      this.chain.push("~~");
    }
    this.chain.splice(-1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let copyChain = this.chain.slice();
    this.chain = [];
    return copyChain.join("");
  },
};

module.exports = {
  chainMaker,
};
