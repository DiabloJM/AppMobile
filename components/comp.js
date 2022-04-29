import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Box from './Box/box'
import Row from './Tools/Row';
import Column from './Tools/Column';

function comp() {
    return (
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          <Row>
            <Column>
              <Box>#1</Box>
              <Box>#2</Box>
            </Column>

            <Column>
              <Box>#3</Box>
              <Box>#4</Box>
            </Column>
          </Row>
          <Row>
            <Column>
              <Box>#5</Box>
              <Box>#6</Box>
            </Column>

            <Column>
              <Box>#7</Box>
              <Box>#8</Box>
            </Column>
          </Row>
        </View>
    );
}

export default comp;