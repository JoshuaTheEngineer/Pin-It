import React from 'react';
import PropTypes from 'prop-types';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {GOOGLE_PLACES_API} from '@env'

/**
 * Uses Google Places API to get location results
 */
class SearchLocationBar extends React.Component {
  /**
   *
   * @param {*} props
   * has the following:
   * onPress - callback function
   */
  constructor(props) {
    super(props);
  }
  // Below snippet for debugging onPress()
  // (data, details = null) => {
  //   // 'details' is provided when fetchDetails = true
  //   console.log(data, details);
  // }

  /**
   *
   * @return {GooglePlacesAutocomplete}
   */
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={ this.props.onPress }
        query={{
          key: `${GOOGLE_PLACES_API}`,
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
    );
  }
}

SearchLocationBar.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SearchLocationBar;
