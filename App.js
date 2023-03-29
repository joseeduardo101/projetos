/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
import React, {Component} from 'react';
// eslint-disable-next-line prettier/prettier
import { View, FlatList,Text,ActivityIndicator } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

// eslint-disable-next-line prettier/prettier
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
    });
  }
  render() {
    if(this.state.loading){
      return(
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      )
    }else{
        return (
        <View>
          <FlatList
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      )
    }
  }
}

export default App;
