import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, TextInput } from 'react-native';
import styles from './ApiStyles';
const ApiView = (props) => {
    const { searchLyrics, renderItem, FlatListItemSeparator, dataSource, loading } = props
    var artist = "";
    var song = "";
    return (
        <View style={styles.parentContainer}>
            <View>
                <Text style={styles.textStyle}>Enter the search criteria to find the Lyrics</Text>
            </View>
            <View style={{ margin: 18 }}>
            <View>
                <TextInput
                  id = "artist"
                  style={styles.searchBar}
                  placeholder="Artist"

                />
              </View>
            </View>

            <View style={{ margin: 18  }}>
            <View>
                <TextInput
                  id = "song"
                  style={styles.searchBar}
                  placeholder="Song"
                />
              </View>
            </View>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Search'}
                    onPress={searchLyrics(artist, song)}
                    color='blue'
                />
            </View>
            <FlatList
                data={dataSource}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.id.toString()}
            />




            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }


        </View>
    )
}
export default ApiView;
