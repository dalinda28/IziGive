import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 114,
        backgroundColor: '#15AA49'
    },

    searchContainer: {
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
    },
    searchInput: {
        flex: 1,
        color: "#818181",
        left: 15,
    },

    searchIcon: {
        display: "flex",
        left: 5,
        zIndex: 2
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
    }
})