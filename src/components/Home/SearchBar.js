import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from "./Styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({ cityHandler }) => {
    return (
        <View style={styles.search}>
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyBz2wCnl92tp-9mFufmy8MIKN1wEQCU7ms" }}
                onPress={(data, details = null) => {
                    const city = data.description.split(",")[0];
                    cityHandler(city);
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        position: 'absolute',
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                        shadowColor: 'rgba(0, 0, 0, 0.25)',
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        borderRadius: 50,
                        width: 300,
                        height: 50,
                        top: 40,
                        paddingLeft: 10,
                        paddingRight: 0,
                        marginLeft: "10%",
                        shadowOffset: { width: 2, height: 2, },
                        shadowColor: 'grey',
                        shadowOpacity: 1.0,
                        shadowRadius: 2,
                    }
                }}
                renderLeftButton={() => (
                    <View style={styles.searchIcon}>
                        {/* <Ionicons name="search-outline" size={19} color="black" /> */}
                    </View>
                )}
            >
            </GooglePlacesAutocomplete>
        </View>
    )
}

export default SearchBar