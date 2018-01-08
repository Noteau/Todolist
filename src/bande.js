import React from 'react';
import { View } from 'react-native';


const styles = {
    Bande: {
        flex: 1
    },
};
const Bande = (props) => {
    return (
        <View style={styles.Bande}>
            <View style={{flex : 1, backgroundColor : props.color}}/>
        </View>
    )
};

export default Bande;