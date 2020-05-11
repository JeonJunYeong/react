import React from 'react';
import FoodList from './FoodList';
import Greater from './Greater';

export default class App extends React.Component {
    render() {
        return (
            <div className='App'>
               <Greater name='둘리'/>
               <Greater name='마이콜'/>
               <Greater name='도우너'/>
            </div>    
        );
    }
}