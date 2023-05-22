import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        margin: 1,
        flexDirection: 'column'
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
        height: 50,
        top: 80,
        paddingLeft: 10,
        paddingRight: 0,
        marginLeft: "10%",
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },

    searchInput: {
        flex: 1,
        color: "white",
        left: 15,
    },

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
    map: {
        flex: 1,
    },
    marker: {
        alignItems: "center",
        justifyContent: "center",
    },
    bubble: {
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
    }


})