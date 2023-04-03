import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 114,
        backgroundColor: '#15AA49',
        flexDirection: "row"
    },

    searchIcon: {

    },

    categorieContainer: {
        backgroundColor: "#424B5A",
        borderRadius: 22.5,
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        marginVertical: 10
    },
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: "white",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categorieText: {
        fontSize: 15,
        color: "white",
        fontWeight: 'bold',
        marginLeft: 15,
    },

    /* Restaurantitem */

    RestaurantItem: {
        flexDirection: "row",
        margin: 20,
    },

    RestaurantItemContainer: {
        width: 200,
        height: 280,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        backgroundColor: "white"
    },

    RestaurantInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    RestaurantImage: {
        width: "100%",
        height: 180,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    }
})