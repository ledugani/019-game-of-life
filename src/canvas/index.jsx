import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './mappings';
import './styles.css';

function Canvas(props) {
  return <div
    className="canvas"
    style={{
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientWidth,
    }}
  ></div>
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);