import React from 'react';
import PropTypes from 'prop-types';

import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';

/**
 * Map
 */
class Map extends React.Component {
  /**
     *
     * @param {*} props
     * has the following:
     * refMap - the map reference
     * userLocation - the user location
     * children - child components
     */
  constructor(props) {
    super(props);
  }

  /**
   *
   * @return {MapView}
   */
  render() {
    let map;
    if (this.props.userLocation) {
      map = <MapView
        ref={this.props.refMap}
        style={styles.map}
        initialRegion={this.props.userLocation}>
        {
          this.props.children
        }
      </MapView>;
    } else {
      map = <MapView
        ref={this.props.refMap}
        style={styles.map}>
        {
          this.props.children
        }
      </MapView>;
    }
    return map;
  }
}

Map.propTypes = {
  refMap: PropTypes.object,
  userLocation: PropTypes.object,
  children: PropTypes.array,
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
