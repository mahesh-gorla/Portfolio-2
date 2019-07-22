import React, {Component} from 'react';
import img from '../../../public/night-dashboard.jpg';

const styles = {
  paperContainer: {
  
      backgroundImage: `url(${"../../../public/night-dashboard.jpg"})`
  }
};


class TimelineComponent extends Component {

  render() {
    return (
        <div style={styles.paperContainer}>
        </div>
    )
}
}

export default TimelineComponent;
