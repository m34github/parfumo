import React from 'react';
import PropTypes from 'prop-types';
import {
  CircularProgress,
  List,
  ListItem
} from 'material-ui';

import Header from './Header.jsx';
import { common } from '../commons/style';

class Home extends React.Component {
  componentDidMount() {
    this.props.getFragrance();
  }

  render() {
    if (this.props.home.meta.isLoaded) {
      return (
        <article>
          <Header />

          <main style={common.main}>
            <List>
              {
                Object.values(this.props.home.payload.fragrance.fragrance).map((fragrance, index) => (
                  <ListItem
                    key={index}
                    primaryText={fragrance.name}
                    leftIcon={
                      <img src={fragrance.img} alt="img" />
                    }
                    containerElement={
                      <a href={fragrance.link}>_</a>
                    }
                  />
                ))
              }
            </List>
          </main>
        </article>
      );
    }
    return (
      <article>
        <section style={common.progress}>
          <CircularProgress size={80} />
        </section>
      </article>
    );
  }
}

Home.propTypes = {
  getFragrance: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
};

export default Home;
