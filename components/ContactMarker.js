import React from 'react';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';

export default class ContactMarker extends React.Component {
    /**
     * Should pass the following properties
     * @id - the contact id
     * @latitude - the contact latitude
     * @longitude - the contact longitude
     */
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Marker 
                key={this.props.id}
                coordinate={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                }}
                pinColor="green"
            />
        )
    }
}

ContactMarker.propTypes = {
    id: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
}