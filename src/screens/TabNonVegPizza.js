import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addInCart } from '../action/index';
import { Dropdown } from 'react-native-material-dropdown';
import { normalize } from '../dimension'

export class TabNonVegPizza extends React.PureComponent {
    constructor() {
        super();
        this.state = { data: [], selected: false, sizevalue: 'medium' };
    }
    componentDidMount() {
        this.setState({
            data: [
                {
                    name: "Creamy Tomato Pasta Pizza - Non Veg",
                    regular: "215",
                    medium: "395",
                    large: "595",
                    img: "https://images.dominos.co.in/CreamyTomatoPPNV_N.jpg",
                    description: "Loaded with a delicious creamy tomato pasta topping, BBQ pepper chicken, green capsicum, crunchy red and yellow bell peppers.",
                },
                {
                    name: "Moroccan Spice Pasta Pizza - Non Veg",
                    regular: "185",
                    medium: "335",
                    large: "695",
                    img: "https://images.dominos.co.in/MoroccanSpicePPNV_N.jpg",
                    description: "A pizza loaded with a spicy combination of Harissa sauce, Peri Peri chicken chunks and delicious pasta.",
                },
                {
                    name: "Chicken Golden Delight",
                    regular: "235",
                    medium: "450",
                    large: "695",
                    img: "https://images.dominos.co.in/new_chicken_golden_delight.jpg",
                    description: "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
                },
                {
                    name: "Non Veg Supreme",
                    regular: "305",
                    medium: "570",
                    large: "835",
                    img: "https://images.dominos.co.in/new_non_veg_supreme.jpg",
                    description: "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers",
                },
                {
                    name: "Chicken Pepperoni",
                    regular: "305",
                    medium: "570",
                    large: "835",
                    img: "https://images.dominos.co.in/cheesepepperoni.png",
                    description: "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
                },
            ]
        });
    }
    addtocartbtn = (item) => {
        var obj = {
            name: item.name,
            price: item[this.state.sizevalue],
            img: item.img,
            itemcount: 1,
            size: this.state.sizevalue,
        }
        this.props.addincart(obj);

    }
    renderItems = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <View style={styles.upperview}>
                    <Image source={{ uri: item.img }} style={styles.image} />
                    <Text style={styles.price}>
                        ₹ {item[this.state.sizevalue]}
                    </Text>
                </View>
                <View style={styles.lowerview}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                    <View style={styles.selectionview}>
                        <View style={styles.sizeselect}>
                            <Dropdown
                                label='Size'
                                data={datas}
                                value={'Medium'}
                                onChangeText={(value) => {
                                    this.setState({ sizevalue: value.toLowerCase() })
                                    // let newarr=this.state.data;
                                    // newarr[index].size=value.toLowerCase();
                                    // this.setState({data:newarr});
                                    // console.log('mera data hai ',this.state.data);
                                }}

                            />
                        </View>
                        <View style={styles.crustselect}>
                            <Text>Crust</Text>
                            <Text>New Hand Tossed</Text>
                        </View>
                        <TouchableOpacity style={styles.addtocartbtn} onPress={() => this.addtocartbtn(item)}>
                            <Text style={styles.addtocarttext}> ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
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
        marginHorizontal: normalize(5)
    }
});

const mapStateToProps = (state) => {
    const { arr } = state.cart_reducer;
    return { arr };
};
const mapDispatchToProps = (dispatch) => ({
    addincart: (obj) => dispatch(addInCart(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNonVegPizza);