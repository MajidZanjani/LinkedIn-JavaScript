class LCD {
  constructor(size, usage, powerStatus) {
    (this.size = size), (this.usage = usage), (this.powerStatus = powerStatus);
  }
  toggleStatus(power) {
    this.powerStatus = power;
  }
}

export default LCD;
