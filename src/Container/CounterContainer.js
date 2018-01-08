import React from 'react';
import  {StyleSheet,View, Text, Button,TextInput} from 'react-native';
import {connect} from "react-redux";
import {decrementCounter, incrementCounter} from "../action/action";


const styles2 = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    layout: {
        display:'flex',

        flexDirection:'row',
        justifyContent: 'center',

    },
    button: {
        width:"50%",
    },
});

class CounterContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        let array = [];
        this.state = {array: array};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(){
        let tmp = [...this.state.array];
        tmp.push(this.state.input);
        this.setState({array : tmp});
    }


    render() {
        return (
            <View style={styles2.main}>
                    <Text>Valeur : {this.props.value} {this.props.retour}</Text>
                <View style={styles2.layout}>
                    <View  style={styles2.button}>
                        <Button  color="#0f0" title="+" onPress={() => {this.props.increment()}}/>
                    </View>
                    <View  style={styles2.button}>
                        <Button  color="#f00" title="-" onPress={() => {this.props.decrement()}}/>
                    </View>
                </View>
                <View>
                    <TextInput
                        style={{height: 40, borderColor: 'white', borderWidth: 50}}
                        onChangeText={(text) => this.setState({input: text})}
                    />
                    <Text>{this.state.array+'\n'}</Text>
                    <Button
                        onPress={this.handleSubmit}
                        title="Ajouter une tâche"
                        color="#117499"
                        accessibilityLabel="Add a task"
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.value,
});

const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter()),
}};

export default connect(mapStateToProps, mapDispatchToProps) (CounterContainer);