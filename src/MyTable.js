import React, { Component } from 'react';
import { Column, Table } from 'react-virtualized';
import loremIpsum from 'lorem-ipsum';
import 'react-virtualized/styles.css';

const rowCount = 1000000;
class MyTable extends Component {
    constructor() {
        super();
        this.list = Array(rowCount).fill().map((val, idx) => {
            return {
                id: idx,
                name: loremIpsum({
                    count: 1,
                    units: 'sentences',
                    sentenceLowerBound: 2,
                    sentenceUpperBound: 2
                }),
                text: loremIpsum({
                    count: 1,
                    units: 'sentences',
                    sentenceLowerBound: 8,
                    sentenceUpperBound: 8
                })
            }
        });
    }

    render() {
        return (
            <Table
                width={900}
                height={600}
                headerHeight={20}
                rowHeight={30}
                rowCount={this.list.length}
                rowGetter={({ index }) => this.list[index]}
            >
                <Column
                    label='ID'
                    dataKey='id'
                    width={100}
                />            
                <Column
                    label='Event Name'
                    dataKey='name'
                    width={200}
                />
                <Column
                    width={600}
                    label='Event Text'
                    dataKey='text'
                />
            </Table >
        );
    }
}

export default MyTable;