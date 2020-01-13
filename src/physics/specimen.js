import Entity from './entity';

class Specimen extends Entity {
  static size = 20
  static maxSpeed = 500

  constructor(props) {
    props.size = Specimen.size
    props.maxSpeed = Specimen.maxSpeed
    super(props)
  }

  seek(target) {
    if (!target) return
    this.moveTowards(target)
  }

  moveTowards(target) {
    const force = this.steer(target)
  }

  steer(target) {
    const desiredForce = target.position.subtract(this.position)
    const distance = desiredForce.length()
    const variableForce = (distance < 10)
      ? this.maxForce * (distance / 100)
      : this.maxForce

    return desiredForce.normalize()
                        .multiply(variableForce)
                        .subtract(this.velocity)
  }

  update() {
    this.position = this.position.add(this.velocity)
  }
}

export default Specimen;