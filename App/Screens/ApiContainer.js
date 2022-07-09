import React, { Component } from 'react';
import ApiView from './ApiView';
import styles from './ApiStyles';
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataSource: []
        };
    }
    searchLyrics = () => {
        this.setState({
            loading: true,

        })
        fetch("https://api.lyrics.ovh/v1/ColdPlay/Yellow")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        dataSource: responseJson
                    })
                }, 2000)

            })
            .catch(error => console.log(error))
    }

    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(10,120,40,0.5)",
            }}
            />
        );
    }
    renderItem = (data) => {
        return (

                <Text style={styles.lightText}>{data.lyrics}</Text>
        )

    }


    render() {
        const { dataSource, fromFetch, loading } = this.state
        return (
           <ApiView
                searchLyrics={this.searchLyrics}

                dataSource={dataSource}
                loading={loading}


                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ApiContainer;
