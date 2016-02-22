import React from 'react';
import Header from '../Header/Header';
import DataTable from '../DataTable/DataTable';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {onGetEmployees,onUpdateSort} from './applicationActions';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

export default class Application extends React.Component {
  render() {
    const {dispatch,employees,loading,sort} = this.props;

    return <div className={styles.main}>
      <div className={styles.wrap}>
        <Header />

        <main className={styles.body}>
          <p>Use the <b>Load Data</b> button to pull data from the server.  Click on the header name to sort by that column.
            Click a second time to sort the column in the reverse order.</p>
          <DataTable
            rowHeaders={['First Name','Last Name','Title']}
            rows={employees}
            rowAccessors={['firstName','lastName','title']}
            sort={sort}
            actions={{onUpdateSort: (field) => dispatch( onUpdateSort(field) )}}
          />
          <Button onClick={()=>{dispatch(onGetEmployees())}}>
            Load Data <span className={loading.employees ? "fa-spin fa fa-spinner " : ""}/>
          </Button>
        </main>
      </div>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    employees: state.application.employees,
    loading: state.application.loading,
    sort: state.application.sort
  };
}
export default connect(mapStateToProps)(Application);
export {Application as TApplication};
