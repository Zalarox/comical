import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const PostTitle = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={props.avatar}
        style={styles.avatar}
      />
      <Text style={styles.text}>{props.titleText}</Text>
      <Text style={styles.time}>{props.postTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 10
  },
  avatar: {
    height: 30,
    width: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50
  },
  time: {
    color: 'lightgrey'
  }
});

export default PostTitle;
