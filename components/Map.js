import React from 'react';
import PropTypes from 'prop-types';

import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

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
                </MapView>
        } else {
            map = <MapView 
                    ref={this.props.refMap} 
                    style={styles.map}>
                        {
                            this.props.children
                        }
                </MapView>
        }
        return map;
    }
}

Map.propTypes = {
    userLocation: PropTypes.object,
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});
