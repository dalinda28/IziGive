import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import About from '../RestaurantDetails/About';

const API_TOKEN = 'dh-ilvDFreUKZR8idugS0a0JIvU7KhDE5BeasoYfyjcqsCeMAfRbEsgOkxH79XAnk7izgUXIwinpguu6HlC7M8xxIx0fIu4sdNbBnXCqBWzRFECIMB_bqGGcnWYZZHYx';
const googlePlacesStyles = {
    container: {
        flex: 1,
    },
    textInputContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    textInput: {
        marginLeft: 0,
        marginRight: 0,
        height: 38,
        color: '#5d5d5d',
        fontSize: 16,
    },
    predefinedPlacesDescription: {
        color: '#1faadb',
    },
};

const Navigation = () => {
    const [markers, setMarkers] = useState([]);
    const [location, setLocation] = useState(null);
    const [currentRegion, setCurrentRegion] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [initialRegion, setInitialRegion] = useState(null);
    const mapRef = useRef(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    useEffect(() => {
        fetchLocation();
    }, []);

    useEffect(() => {
        if (location && currentRegion) {
            fetchMarkers();
        }
    }, [location, currentRegion]);

    const fetchLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setInitialRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            });
            setIsReady(true);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchMarkers = async () => {
        try {
            const { latitude, longitude } = currentRegion;
            const url = `https://api.yelp.com/v3/businesses/search?term=${searchValue}&latitude=${latitude}&longitude=${longitude}`;

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
                imageUrl: business.image_url,
            }));

            setMarkers(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegionChangeComplete = region => {
        if (region) {
            setCurrentRegion(region);
            mapRef.current.animateToRegion(region);
        }
    };
    const handlePlaceSelect = (data, details = null) => {
        if (details) {
            const { geometry } = details;
            if (geometry && geometry.location) {
                const { lat, lng } = geometry.location;
                const region = {
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.1, // Définissez la valeur appropriée pour le zoom
                    longitudeDelta: 0.1, // Définissez la valeur appropriée pour le zoom
                };
                setCurrentRegion(region); // Mettre à jour la région actuelle avec les nouvelles coordonnées
                mapRef.current.animateToRegion(region); // Zoom sur les coordonnées de la ville
            }
        }
    };

    const handleLocationButtonPress = () => {
        if (location) {
            const { latitude, longitude } = location.coords;
            const newRegion = {
                latitude,
                longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            };
            setCurrentRegion(newRegion);
            mapRef.current.animateToRegion(newRegion);
        }
    };

    const handleCalloutPress = (restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    return (
        <View style={styles.container}>

            {selectedRestaurant ? (
                <About restaurant={selectedRestaurant} />
            ) : (<View style={styles.searchContainer}>
                <GooglePlacesAutocomplete
                    placeholder="Où allons-nous ?"
                    onPress={handlePlaceSelect}
                    query={{
                        key: "VOTRE_CLE_API",
                        language: 'fr',
                    }}
                    styles={styles.googlePlacesStyles}
                />
                <View style={styles.locationButtonContainer}>
                    <TouchableOpacity
                        style={styles.locationButton}
                        onPress={handleLocationButtonPress}
                    >
                        <Ionicons name="locate-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>,
                isReady && (
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        initialRegion={initialRegion}
                        onRegionChangeComplete={handleRegionChangeComplete}
                        onMapReady={() =>
                            setCurrentRegion({
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1,
                            })
                        }
                    >
                        {markers.map((marker, index) => (
                            <Marker
                                style={styles.marker}
                                key={index}
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude,
                                }}
                                title={marker.title}
                                description={marker.description}
                                image={require('../../assets/marker-icon.png')}
                            >
                                <Callout tooltip onPress={() => handleCalloutPress(marker)}>
                                    <View>
                                        <View style={styles.bubble}>
                                            {marker.imageUrl ? (
                                                <Image
                                                    style={styles.bubbleImage}
                                                    source={{ uri: marker.imageUrl }}
                                                    borderRadius={20}
                                                />
                                            ) : null}
                                            <Text style={styles.bubbleTitle}>{marker.title}</Text>
                                        </View>
                                        <View style={styles.arrowBorder}></View>
                                    </View>
                                </Callout>
                            </Marker>
                        ))}
                    </MapView>
                )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    googlePlacesStyles: {
        container: {
            flex: 1,
        },
        textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
        },
        textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
        },
        predefinedPlacesDescription: {
            color: '#1faadb',
        },
    },
    searchContainer: {
        position: 'absolute',
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(21, 170, 73)",
        borderRadius: 50,
        width: 300,
        top: 80,
        paddingLeft: 10,
        paddingRight: 0,
        marginLeft: "10%",
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },
    map: {
        flex: 1,
    },

    // searchInput: {
    //     flex: 1,
    //     color: "white",
    //     left: 15,
    // },

    searchIcon: {
        display: "flex",
        left: 5,
        zIndex: 2
    },

    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    marker: {
    },
    bubble: {
        width: 150,
        height: 150,
        flexDirection: "column",
        backgroundColor: "#ffff",
        borderRadius: 20,
        display: "flex"
    },
    bubbleTitle: {
        fontSize: 18,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 22,
        display: "flex",
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 10
    },
    bubbleImage: {
        width: 150,
        height: 100,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    arrowBorder: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
    },
    locationButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    locationButton: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
});

export default Navigation;
