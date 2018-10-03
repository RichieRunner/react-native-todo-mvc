import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      To-dos
    </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(1,180,100,0.50)',
    fontWeight: '100',
  }
});

export default Header;