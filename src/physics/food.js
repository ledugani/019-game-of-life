import Entity from './entity';

class Food extends Entity {
  static size = 10

  constructor(props) {
    props.size = Food.size
    super(props)
  }
}

export default Food;