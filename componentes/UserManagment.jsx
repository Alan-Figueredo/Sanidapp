import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 10,
    gap: 35,
    alignSelf: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#6699CC',
    color: '#fff',
    backgroundColor: '#6699CC',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  button: {
    minWidth: 80,
    width: 'auto',
    paddingHorizontal: 5,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 10,
  }
});

const UserManagment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="user" size={35} style={styles.icon} />
        <TouchableOpacity style={styles.button}>
          <Text>EDITAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconWrapper}>
        <Link to="/añadirusuario"><Icon name="user-plus" size={35} style={styles.icon} /></Link>
      </View>
      <View style={styles.iconWrapper}>
        <Link to="/cambiarusuario"><IconMaterial name="swap-horizontal" size={35} color="#6699CC" style={styles.icon} /></Link>
      </View>
    </View>
  );
};

export default UserManagment;