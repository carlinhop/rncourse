import React from 'react';
import { Alert, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const ListContainer = props => (<FlatList
  data={props.items}
  renderItem={info => (<ListItem
    placename={info.item.name}
    placeImage={info.item.image}
    itemKey={info.item.key}
    onItemPressed={() => props.onItemSeleccsted(info.item.key)}
  />)}
/>);

export default ListContainer;
