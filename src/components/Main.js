import React from 'react';
import {connect} from 'react-redux';

import {fetchDataPending} from "../actions/dataAction";
import Card from "./common/card";

class Main extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {/*{ data &&*/}
        {/*data.map((item, index) => (*/}
          {/*<li key={ index }>*/}
            {/*{ `First exchange: ${item.firstStep.exchange}` }*/}
            {/*{ `Second exchange: ${item.secondStep.exchange}` }*/}
          {/*</li>*/}
        {/*))*/}
        {/*}*/}

        <Card>
          <div>
            313123
          </div>
          <div>
            Mark!
          </div>
        </Card>
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
