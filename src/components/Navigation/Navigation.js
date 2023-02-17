import React from 'react';
import { styles } from "./Styles";
import { useState } from "react";
import MapView, { Marker } from "react-native-maps"
import { View, Text, ScrollView, Image, Callout } from 'react-native';
import axios from "axios";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Navigation = () => {
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
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchIcon}>
                    <Ionicons name="search-outline" size={19} color="white" />
                </View>
                <Text onPress={() => navigation.navigate("Search")} style={styles.searchInput}>Où allons-nous ?</Text>
            </View>

            <MapView
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 48.85534,
                    longitude: 2.43038,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.19
                }}
            >
                {dataItem.map((marker, index) => {
                    return (
                        <Marker
                            style={styles.marker}
                            key={index}
                            coordinate={{
                                latitude: marker.geometry.coordinates[0],
                                longitude: marker.geometry.coordinates[1]
                            }}
                            title={'title'}
                            image={require('../../assets/Location.png')}
                            description={'description'}>
                            <Callout tooltip>
                                <View>
                                    <View style={styles.bubble}>
                                        <Image
                                            style={styles.bubbleImage}
                                            source={require('../../assets/Food.png')} />
                                        <Text style={styles.bubbleTitle}>{marker.fields.title}</Text>
                                    </View>
                                    <View style={styles.arrowBorder}></View>
                                </View>
                            </Callout>
                        </Marker>
                    )
                })
                }
            </MapView >
        </ScrollView >
    )
}

export default Navigation