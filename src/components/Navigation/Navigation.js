import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from "./Styles";
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const API_TOKEN = 'dh-ilvDFreUKZR8idugS0a0JIvU7KhDE5BeasoYfyjcqsCeMAfRbEsgOkxH79XAnk7izgUXIwinpguu6HlC7M8xxIx0fIu4sdNbBnXCqBWzRFECIMB_bqGGcnWYZZHYx';

const Navigation = () => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        fetchMarkers();
    }, []);

    const fetchMarkers = async () => {
        try {
            const city = 'Paris'; // Remplace avec la ville de ton choix
            const url = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            });

            const data = response.data.businesses.map(business => ({
                latitude: business.coordinates.latitude,
                longitude: business.coordinates.longitude,
                title: business.name,
                description: business.categories.map(category => category.title).join(', '),
            }));

            setMarkers(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map} initialRegion={{ latitude: 48.8566, longitude: 2.3522, latitudeDelta: 0.1, longitudeDelta: 0.1 }}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        </View>
    );
};
export default Navigation;
