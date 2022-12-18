import React from 'react';
import PropTypes from 'prop-types';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class SearchLocationBar extends React.Component {
  /**
   * 
   * @onPress - a callback function
   */
  constructor(props) {
      super(props)
  }
  // Below snippet for debugging onPress()
  // (data, details = null) => {
  //   // 'details' is provided when fetchDetails = true
  //   console.log(data, details);
  // }

  render() {
      return (
          <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={ this.props.onPress }
            query={{
              key: '${INSERT GOOGLE API KEY HERE}',
              language: 'en',
            }}
            styles={{
              textInputContainer: {
                backgroundColor: 'grey',
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
          />
        )
  }
}

SearchLocationBar.propTypes = {
  onPress: PropTypes.func.isRequired
}