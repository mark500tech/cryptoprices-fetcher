import React from 'react';
import {connect} from 'react-redux';

import {fetchDataPending} from "../actions/dataAction";

class Main extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        { data &&
          data.map((item, index) => (
            <li key={ index }>
              { `From: ${item.from} To: ${item.to} Price: ${item.send}` }
            </li>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({data}) => ({
  data: data.exchangeItems
});

export default connect(mapStateToProps, {
  fetchData: fetchDataPending
})(Main);
