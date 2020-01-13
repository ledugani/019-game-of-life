class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  length() {
    return Math.sqrt( this.x * this.x + this.y * this.y)
  }

  normalize() {
    return new Vector( this.x / this.length(), this.y / this.length )
  }

  subtract(vector) {
    return new Vector( this.x - vector.x, this.y - vector.y )
  }

  add(vector) {
    return new Vector( this.x + vector.x, this.y + vector.y )
  }

  multiply(scalar) {
    return new Vector( this.x * scalar, this.y * scalar)
  }
}

export default Vector;