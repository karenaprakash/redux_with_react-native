/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component  } from 'react';
import {
  View,
  Text,
} from 'react-native';
import  { connect } from 'react-redux';
import {
    _getProducts
} from '../Actions/product';

class AppContainer  extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        this.props.dispatch(_getProducts());
    }

    static getDerivedStateFromProps(newProps,prevState){
        return { data : newProps.data.getProductsResponse }
    }


render(){
    const {data} = this.state;
    console.log('data',data)
    
    return (
        <>
          <View>
              { data.length > 0 ?
                  <Text>Data Retrived</Text>     
                  : 
                  <Text>Data Not Found</Text>     
               }
          </View>
        </>
      );
 }
};


const mapStateToProps = (state) => {
     return {
         data : state.data
     }
}

 export default connect(mapStateToProps)(AppContainer);

