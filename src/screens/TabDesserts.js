import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addInCart } from '../action/index';
import { Dropdown } from 'react-native-material-dropdown';
import { normalize } from '../dimension'

export class TabDesserts extends React.PureComponent {
    constructor() {
        super();
        this.state = { data: [], selected: false, sizevalue: 'medium' };
    }
    componentDidMount() {
        this.setState({
            data: [
                {
                    name: "Red Velvet Lava Cake",
                    price: "129",
                    img: "https://images.dominos.co.in/CAKE03.jpg",
                    description: "A truly indulgent experience with sweet and rich red velvet cake on a creamy cheese flavoured base to give a burst of flavour in every bite!",
                },
                {
                    name: "Choco Lava Cake",
                    price: "99",
                    img: "https://images.dominos.co.in/Choco_Lava.png",
                    description: "Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake",
                },
                {
                    name: "Butterscotch Mousse Cake",
                    price: "99",
                    img: "https://images.dominos.co.in/Butterscotch.png",
                    description: "Sweet temptation! Butterscotch flavored mousse",
                },
                {
                    name: "Brownie Fantasy",
                    price: "59",
                    img: "https://images.dominos.co.in/Brownie_Fantasy.png",
                    description: "Sweet Temptation! Hot Chocolate Brownie drizzled with chocolate fudge sauce",
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
        marginHorizontal: normalize(5)
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

export default connect(mapStateToProps, mapDispatchToProps)(TabDesserts);