import React from 'react';
import {connect} from 'react-redux';

import {fetchData} from "../actions/dataAction";

class Main extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        Helloo!
      </div>
    )
  }
}

const mapStateToProps = ({data}) => ({
  data
});

export default connect(mapStateToProps, {
  fetchData
})(Main);
