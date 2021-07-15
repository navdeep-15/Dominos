import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addInCart } from '../action/index';
import { Dropdown } from 'react-native-material-dropdown';
import { normalize } from '../dimension'

export class TabBestsellers extends React.PureComponent {
    constructor() {
        super();
        this.state = { data: [], selected: false, sizevalue: 'medium' };
    }
    componentDidMount() {
        this.setState({
            data: [
                {
                    name: "The Unthinkable Pizza",
                    regular: "235",
                    medium: "450",
                    large: "695",
                    img: "https://images.dominos.co.in/PIZ0167.jpg",
                    description: "Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza",
                },
                {
                    name: "Margherita",
                    regular: "99",
                    medium: "199",
                    large: "395",
                    img: "https://images.dominos.co.in/new_margherita_2502.jpg",
                    description: "Classic delight with 100% real mozzarella cheese",
                },
                {
                    name: "Farmhouse",
                    regular: "215",
                    medium: "395",
                    large: "595",
                    img: "https://images.dominos.co.in/farmhouse.png",
                    description: "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                },
                {
                    name: "Peppy Paneer",
                    regular: "215",
                    medium: "395",
                    large: "595",
                    img: "https://images.dominos.co.in/new_peppy_paneer.jpg",
                    description: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
                },
                {
                    name: "Veg Extravaganza",
                    regular: "235",
                    medium: "450",
                    large: "695",
                    img: "https://images.dominos.co.in/new_veg_extravaganza.jpg",
                    description: "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
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
        padding: 5,
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

export default connect(mapStateToProps, mapDispatchToProps)(TabBestsellers);