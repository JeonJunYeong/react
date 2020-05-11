import React, {Component} from 'react';
import ProtoTypes from 'prop-types' ; 


export default class Greater extends React.Component {
    render() {
        return (
            <h1 Hello>{this.props.Greater}</h1>
        );
    }
}

// Prop validator
/*
기본형 Validator
PropTypes.string
PropTypes.number
PropTypes.boolean
PropTypes.object
PropTypes.func
PropTypes.array

조합형 Validator
PropTypes.onOfType ex) PropTypes.onOfType([PropTypes.string,PropTypes.number])
PropTypes.arraOf ex) PropTypes.arrayOf([PropTypes.string])
PropTypes.objectOf ex) PropTypes.objectOf([PropTypes.string])

{
    name:
    price:
    countOfStocks
    isDiscount
}

*/
Greater.protoTypes ={
    name : ProtoTypes.string.isRequired
}

Greater.defaultProps={
    name : 
}