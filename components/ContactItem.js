import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, StyleSheet, Text} from 'react-native';

/**
 * Contact Item
 * @return {Pressable}
 */
class ContactItem extends React.Component {
  /**
     * @param {*} props
     * has the following:
     * id - contact id
     * name - contact name
     * phone - contact phone #
     * location - contact latitude and longitude
     */
  constructor(props) {
    super(props);
  }

  /**
   *
   * @return {Pressable}
   */
  render() {
    return (
      <Pressable style={styles.item} onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.phone}>{this.props.phone}</Text>
        <Text style={styles.location}>{this.props.location.name}</Text>
      </Pressable>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
  phone: {
    fontSize: 16,
  },
  location: {
    fontSize: 16,
  },
});

export default ContactItem;
