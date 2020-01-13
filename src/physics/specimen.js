import Entity from './entity';

class Specimen extends Entity {
  static size = 20
  static maxSpeed = 500

  constructor(props) {
    props.size = Specimen.size
    props.maxSpeed = Specimen.maxSpeed
    super(props)
  }
}

export default Specimen;