import React from 'react';
import { List } from 'react-native-paper';

const ListItem = ({ title, icon, onPress }) => {
  return (
    <List.Item
      title={title}
      right={(props) => <List.Icon {...props} icon={icon} />}
      onPress={onPress}
    />
  );
};

export default ListItem;
