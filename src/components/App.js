import React from 'react'
import View from './View'
import data from '../data/boards'


function App() {
    return (
        <View type='table' data={data}/>
    )
};

export default App;
