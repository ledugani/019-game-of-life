import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './mappings';

import Specimen from '../physics/specimen';
import Food from '../physics/food';

import './styles.css';

class Canvas extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.actions.addSpecimen(
      new Specimen({ id: 1, x: 200, y: 200 })
    )

    this.props.actions.addFood(
      new Food({ id: 1, x: 400, y: 400 })
    )

    this.run()
  }

  run() {
    setInterval(() => {
      this.props.specimens.map(specimen => {
        specimen.seek(this.props.foods[0])
        this.props.actions.updateSpecimen(specimen)
        return specimen
      })
    }, 100)
  }

  render() {
    return <div
    className="canvas"
    style={{
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientWidth,
    }}
  >

    {
      this.props.specimens.map(specimen => <div
        className="specimen entity"
        key={specimen.id}
        style={{
          top: specimen.position.y,
          left: specimen.position.x,
          width: specimen.size,
          height: specimen.size,
        }}
      />)
    }

    {
      this.props.foods.map(food => <div
        className="food entity"
        key={food.id}
        style={{
          top: food.position.y,
          left: food.position.x,
          width: food.size,
          height: food.size,
        }}
      />)
    }
  </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);