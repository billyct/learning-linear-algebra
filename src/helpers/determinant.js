class Determinant {

	/**
	 * 初始化 order 如:
	 * |1 2 3|
	 * |3 1 2|
	 * |2 3 1|
	 * @param order 2维数组
   */
	constructor (order) {
		this.order = order;
	}

  getOrderLength() {
    return this.order.length;
  }
  
  calculateLeft(loop = 0) {
    let count = 1;
    let indexMax = this.getOrderLength() - 1;
    for (let i = 0; i <= indexMax; i ++) {
      let indexS = i + loop > indexMax ? i + loop - (1 + indexMax): i + loop;
      count *= this.order[i][indexS] || 0; //如果数组并不是标准的n*n的话,undefined就用0来表示
    }

    if (loop === indexMax || indexMax === 1) {
      //如果是二阶的就不需要再操作
      return count;
    }

    return count + this.calculateLeft(++loop);

  }

  calculateRight(loop = 0) {
    let count = 1;
    let indexMax = this.getOrderLength() - 1;
    for (let i = 0; i <= indexMax; i ++) {
      let indexS = indexMax - (i + loop) < 0 ? indexMax - (i + loop) + (1 + indexMax) : indexMax - (i + loop);
      count *= this.order[i][indexS] || 0;
    }
    if (loop === indexMax || indexMax === 1) {
      return count;
    }

    return count + this.calculateRight(++loop);
  }

	calculate() {
    return this.calculateLeft() - this.calculateRight();
	}
}


export default Determinant;