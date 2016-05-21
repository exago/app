import React, { Component, PropTypes } from 'react';
import {
  ProjectChartCodeCoverage,
  ProjectChartTestDuration,
  ProjectChartLinterWarnings,
} from 'components';

import styles from './ProjectChartList.css';

export default class ProjectChartList extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={styles.row}>
        <div className={styles.card}>
          <ProjectChartCodeCoverage data={this.props.data} />
        </div>
        <div className={styles.card}>
          <ProjectChartTestDuration data={this.props.data} />
        </div>
        <div className={styles.card}>
          <ProjectChartLinterWarnings data={this.props.data} />
        </div>
      </div>
    );
  }
}