import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addInCart } from '../action/index';
import { Dropdown } from 'react-native-material-dropdown';
import { normalize } from '../dimension'

export class TabPizzaMania extends React.PureComponent {
    constructor() {
        super();
        this.state = { data: [], selected: false, sizevalue: 'medium' };
    }
    componentDidMount() {
        this.setState({
            data: [
                {
                    name: "Non Veg Loaded",
                    price: "155",
                    img: "https://images.dominos.co.in/pizza_mania_non-veg_loaded.png",
                    description: "Chicken sausage, pepper barbecue chicken & peri-peri chicken in a fresh pan crust",
                },
                {
                    name: "Veg Loaded",
                    price: "135",
                    img: "https://images.dominos.co.in/pizza_mania_veg_loaded.png",
                    description: "Tomato, Jalapeno, Corn, Grilled Mushroom & crushed Aranchini Patty in a fresh pan crust",
                },
                {
                    name: "Pepper Barbecue Chicken",
                    price: "105",
                    img: "https://images.dominos.co.in/pizza_mania_pepper_barbeque_chicken.png",
                    description: "Pepper barbecue chicken for that extra zing",
                },
                {
                    name: "Cheesy",
                    price: "99",
                    img: "https://images.dominos.co.in/pizza_mania_cheesy.png",
                    description: "Cheese lovers paradise, loaded with mozzarella, cheddar & gouda cheese",
                },
                {
                    name: "Paneer & Onion",
                    price: "95",
                    img: "https://images.dominos.co.in/pizza_mania_paneer_onion.png",
                    description: "Creamy Paneer & Onion",
                },
            ]
        });
    }
    addtocartbtn = (item) => {
        var obj = {
            name: item.name,
            price: item.price,
            img: item.img,
            itemcount: 1,
        }
        this.props.addincart(obj);

    }
    renderItems = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <View style={styles.upperview}>
                    <Image source={{ uri: item.img }} style={styles.image} />
                    <Text style={styles.price}>
                        ₹ {item.price}
                    </Text>
                </View>
                <View style={styles.lowerview}>
                    <View style={styles.detailview}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.addtocartbtn} onPress={() => this.addtocartbtn(item)}>
                        <Text style={styles.addtocarttext}> ADD TO CART</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItems}
                style={styles.container}
            />
        )
    }
}
let datas = [
    {
        value: 'Regular',
    },
    {
        value: 'Medium',
    },
    {
        value: 'Large',
    }
];
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f4ff',
        padding: normalize(15),
    },
    item: {
        backgroundColor: '#ffffff',
        marginTop: normalize(15),
        marginBottom: normalize(10)
    },
    upperview: {
        flex: 0.5,
    },
    lowerview: {
        flex: 0.5,
        padding: normalize(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16.5
    },
    desc: {
        fontSize: 15,
        marginTop: normalize(5),
    },
    image: {
        width: '100%',
        height: 150,
    },
    favicon: {
        height: 25,
        width: 25,

    },
    favbtn: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    selectionview: {
        flexDirection: 'row',
        marginTop: normalize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    sizeselect: {
        flex: 0.28,
    },
    sizetxt: {
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
    },
    addtocartbtn: {
        padding: normalize(5),
        backgroundColor: 'green',
        borderRadius: 2.5,
        flex: 0.32,
    },
    addtocarttext: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    price: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        position: 'absolute',
        top: 120,
        left: 10
    },
    crustselect: {
        flex: 0.4,
        marginHorizontal: 5
    },

    detailview: {
        flex: 0.68,
    }
});

const mapStateToProps = (state) => {
    const { arr } = state.cart_reducer;
    return { arr };
};
const mapDispatchToProps = (dispatch) => ({
    addincart: (obj) => dispatch(addInCart(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabPizzaMania);