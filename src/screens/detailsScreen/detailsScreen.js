import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class DetailsScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'DETAILS'
  };

  render() {
    const { locations } = this.props;
    return (
      <View style={styles.container}>
        <Text> DETAIL SCREEN</Text>
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

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  state: state,
});

export default connect( mapStateToProps, mapDispatchToProps )(DetailsScreen);

