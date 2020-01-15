import Vector from './vector';

class Entity {
  constructor(props) {
    this.id = props.id || -1
    this.size = props.size || 10
    this.maxSpeed = props.maxSpeed || 100
    this.maxForce = props.maxForce || 5

    this.position = new Vector(props.x || 0, props.y || 0)
    this.velocity = new Vector(props.vx || 0, props.vy || 0)
    this.acceleration = new Vector(props.ax || 0, props.ay || 0)
  }
}

export default Entity;