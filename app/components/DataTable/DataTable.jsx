import React from 'react';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';
import {Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class DataTable extends React.Component {
    sort(rows) {
        const sort = this.props.sort;
        if(!sort.field) return rows;

        return rows.sort((a, b) => {
            let values = (sort.asc) ? [a, b] : [b, a];
            if(values[0][sort.field] < values[1][sort.field]) return -1;
            if(values[0][sort.field] > values[1][sort.field]) return 1;
            return 0;
        });
    }

    render() {
        const {rowHeaders,rows,rowAccessors,sort,actions} = this.props;
        const sortedRows = this.sort( rows );

        return (
            <Table striped bordered condensed>
                <thead>
                    <tr>
                        {rowHeaders.map( (header,index) => {
                            const accessor = rowAccessors[index];
                            return (
                                <th>
                                    <span onClick={() => {actions.onUpdateSort(accessor)}}>
                                        <span className={styles.indicatorSpacer}>{header}</span>
                                        {sort.field === accessor ? sort.asc ? <FontAwesome name="sort-amount-asc"/> : <FontAwesome name="sort-amount-desc"/> : null}
                                    </span>
                                </th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {sortedRows.map( row => {
                        return <tr>
                            {rowAccessors.map( accessor => {
                                return <td>{row[accessor]}</td>;
                            })}
                        </tr>;
                    })}
                </tbody>
            </Table>
        );
    }
}
