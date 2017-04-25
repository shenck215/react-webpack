import React, { Component } from 'react';

import pageStyle from '../../css/page/page';

class IndexApp extends Component {
  render() {
    return (
        <div className={pageStyle.App}>
          <div className={pageStyle.AppHeader}>
            <h2>Welcome to React !</h2>
          </div>
        </div>
    );
  }
}

export default IndexApp;