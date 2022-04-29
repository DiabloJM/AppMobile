import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

const box = ({children}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}

box.propTypes = {
    children: PropTypes.node.isRequired,
};


export default box;