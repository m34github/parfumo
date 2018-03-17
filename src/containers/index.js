import { connect } from 'react-redux';

import HomeComponent from '../components/Home.jsx';
import { action } from '../actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFragrance: () => {
      dispatch(action.getFragrance());
    }
  };
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
