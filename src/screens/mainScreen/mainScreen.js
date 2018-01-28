import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

class MainScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'MAIN'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> MAIN SCREEN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, mapDispatchToProps )(MainScreen);


