import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import RootNavigation from './rootNavigation';

function ReduxNavigation ( props ) {
  const { dispatch, navigation } = props;
  const nav = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: navigation,
  });
  return (
    <RootNavigation navigation={ nav } />
  )
}

const mapStateToProps = state => ({ navigation: state.navigation });
export default connect( mapStateToProps )( ReduxNavigation )
