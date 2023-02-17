import React from 'react';
import { useEffect, useState } from "react"


import { StyleSheet, View, FlatList, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../components/Home'
import axios from "axios"
const Stack = createStackNavigator();

const HomePage = () => {
    const [dataItem, setdataItem] = useState([]);

    const getData = async () => {
        try {
            const resp = await axios.get(`https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr_crous_restauration_france_entiere&q=&facet=type&facet=zone`
                , {
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:19006/",
                        "Access-Control-Allow-Credentials": true,
                        "Content-Type": "application/json"
                    }
                })
            return resp.data.records;

        } catch (err) {
            console.log(err);
        }
    }

    getData()
    return (
        <View>
            <Text>Home Page </Text>
            {dataItem.map(data => <Text>{data.fields.geolocalisation}</Text>)}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    }
})

export default HomePage;