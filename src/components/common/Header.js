// import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native';

// make a component
const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style = { viewStyle }>
            <Text style = { textStyle }>
                { headerText}
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#009af8',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
};

// make the component available to other parts of app
export { Header };


