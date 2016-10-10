class Arrangement {
  constructor (arrangement) {
    // 先把排列的数字变成字符串,仅支持0-9
    this.arrangement = arrangement + '';
  }

  inverseOrdinalNumbers (loop = 0) {
    if (/[^\d]+/.test(this.arrangement)) {
      throw new Error('error: only support digital');
    }
    
    let count = 0;
    const currentDigital = this.arrangement[loop] >> 0;

    for (let i = 0; i < loop; i++) {
      if ((this.arrangement[i] >> 0) > currentDigital) {
        count += 1;
      }
    }

    if (loop === this.arrangement.length - 1) {
      return count;
    }

    return count + this.inverseOrdinalNumbers(++loop);
  }
}


export default Arrangement;