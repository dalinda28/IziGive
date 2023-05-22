import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from "./Styles";

const categories = [
    { id: '1', name: 'pizza', image: require('../../assets/Food.png') },
    { id: '2', name: 'Burger', image: require('../../assets/Food.png') },
    { id: '3', name: 'Sushi', image: require('../../assets/Food.png') },
    { id: '4', name: 'Salad', image: require('../../assets/Food.png') },
    { id: '5', name: 'Salad', image: require('../../assets/Food.png') },
    { id: '6', name: 'Salad', image: require('../../assets/Food.png') },
];

const Categories = () => {
    return (

        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => setSelectedCategoryIndex(index)}>
                    <View style={styles.categorieContainer}>
                        <View style={styles.categoryBtnImgCon}>
                            <Image
                                source={category.image}
                                style={{ height: 35, width: 35, resizeMode: 'cover', borderRadius: 25 }}
                            />
                        </View>
                        <Text style={styles.categorieText}>{category.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Categories