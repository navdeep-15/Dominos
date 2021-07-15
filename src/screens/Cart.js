import React from 'react'
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import { connect } from 'react-redux';
import { addInCart, billing } from '../action/index';
import { normalize } from '../dimension'

export class Cart extends React.PureComponent {
    componentDidMount() {
        this.setState({
            itemsdata: [
                {
                    img: "https://images.dominos.co.in/BEV0119_1.jpg",
                    name: "Pepsi (500ml)",
                    price: "60",
                },
                {
                    img: "https://images.dominos.co.in/7up_new_2202.jpg",
                    name: "7Up (500ml)",
                    price: "60",
                },
                {
                    img: "https://images.dominos.co.in/Choco_Lava.png",
                    name: "Choco Lava Cake",
                    price: "99",
                },
                {
                    img: "https://images.dominos.co.in/SACHET.JPG",
                    name: "Tomato Ketchup",
                    price: "1",
                },
                {
                    img: "https://images.dominos.co.in/Crinkle_Fries.png",
                    name: "Crinkle Fries",
                    price: "59",
                },
                {
                    img: "https://images.dominos.co.in/Garlic_bread.png",
                    name: "Garlic Breadsticks",
                    price: "99",
                },
                {
                    img: "https://images.dominos.co.in/new_jalapeno.png",
                    name: "Cheesy Jalapeno Dip",
                    price: "25",
                },
                {
                    img: "https://images.dominos.co.in/Brownie_Fantasy.png",
                    name: "Brownie Fantasy",
                    price: "59",
                },
                {
                    img: "https://images.dominos.co.in/new_cheesy.png",
                    name: "Cheesy Dip",
                    price: "25",
                },
                {
                    img: "https://images.dominos.co.in/Stuffed_garlic_Bread.png",
                    name: "Classic Stuffed Garlic Bread",
                    price: "149",
                },
            ]
        });

        let sum = 0
        this.state.data.map((item) => {
            sum += parseInt(item.item.price);
        });
        this.setState({ total: sum });
        let relaxation = 0.4 * sum;
        this.setState({ discount: relaxation.toFixed(2) });
        let tax = 0.05 * sum;
        this.setState({ taxandcharges: tax.toFixed(2) });
        let subtotal = sum - relaxation + tax;
        this.setState({ grandtotal: subtotal.toFixed(2) });
    }
    decrementbtn = (index) => {
        let newarr = this.state.data;

        if (newarr[index].item.itemcount > 1)
            newarr[index].item.itemcount -= 1;
        else
            newarr = newarr.filter((element) => element != newarr[index]);
        this.setState({ data: newarr });

        let newprice = (this.state.data[index].item.itemcount * this.state.data[index].item.price);
        this.setState({ total: newprice });

        let relaxation = 0.4 * newprice;
        this.setState({ discount: relaxation.toFixed(2) });

        let tax = 0.05 * newprice;
        this.setState({ taxandcharges: tax.toFixed(2) });
        
        let subtotal = newprice - relaxation + tax;
        this.setState({ grandtotal: subtotal.toFixed(2) });
    }
    incrementbtn = (index) => {
        let newarr = this.state.data;
        newarr[index].item.itemcount += 1;
        this.setState({ data: newarr });

        let newprice = (this.state.data[index].item.itemcount * this.state.data[index].item.price);
        this.setState({ total: newprice });

        let relaxation = 0.4 * newprice;
        this.setState({ discount: relaxation.toFixed(2) });

        let tax = 0.05 * newprice;
        this.setState({ taxandcharges: tax.toFixed(2) });

        let subtotal = newprice - relaxation + tax;
        this.setState({ grandtotal: subtotal.toFixed(2) });
    }
    constructor(props) {
        super(props);
        this.state = { data: this.props.arr, itemsdata: [], total: 0, discount: 0, taxandcharges: 0, grandtotal: 0 };
    }
    addbtn = (element) => {
        var obj = {
            name: element.name,
            price: element.price,
            img: element.img,
            itemcount: 1,
            size: null,
        };
        this.props.addincart(obj);
        this.setState({ data: this.props.arr })
    }
    placeorderbutton = () => {
        let itemarr = [];
        this.state.data.map((element) => itemarr.push(element.item.name));
        let itemscountarr = [];
        this.state.data.map((element) => itemscountarr.push(element.item.itemcount));
        let itemspricearr = [];
        this.state.data.map((element) => itemspricearr.push(element.item.price * element.item.itemcount));

        var billdetails = {
            itemnames: itemarr,
            itemcount: itemscountarr,
            itemprice: itemspricearr,
            subtotal: this.state.total,
            gst: this.state.taxandcharges,
            discount: this.state.discount,
            grandtotal: this.state.grandtotal,
        };
        this.props.billing(billdetails);
        this.props.navigation.navigate('OrderConfirmedScreen');
    }
    render() {
        if (this.state.data.length == 0) {
            return (
                <View style={styles.if_container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                            <Image
                                source={require('../assets/arrow.png')}
                                style={styles.backimg}
                            />
                        </TouchableOpacity>
                        <Text style={styles.exploremenutext}>Cart</Text>
                    </View>
                    <Image source={{ uri: 'https://pizzaonline.dominos.co.in/static/assets/empty_cart@2x.png' }}
                        style={styles.emptyimg}
                    />
                    <Text style={styles.emptytxt1}>YOUR CART IS EMPTY</Text>
                    <Text style={styles.emptytxt2}>Please add some items from the menu.</Text>
                    <TouchableOpacity style={styles.if_exploremenubtn} onPress={() => this.props.navigation.navigate('TabNavigator')}>
                        <Text style={styles.placeordertext}>EXPLORE MENU</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                            <Image
                                source={require('../assets/arrow.png')}
                                style={styles.backimg}
                            />
                        </TouchableOpacity>
                        <Text style={styles.exploremenutext}>Cart</Text>
                    </View>
                    <View style={styles.upper}>
                        <ScrollView>
                            {this.state.data.map((item, index) => {
                                return (
                                    <View style={styles.listitem}>
                                        <Image
                                            source={{ uri: item.item.img }}
                                            style={styles.img}
                                            resizeMode={'cover'}
                                        />
                                        <View style={styles.detail}>
                                            <Text style={styles.pizzaname}>{item.item.name}</Text>

                                            {item.item.size != null ? <Text style={styles.pizzasize}>{item.item.size} | New Hand Tossed</Text> : <Text> </Text>}
                                            <View style={styles.counter_price}>
                                                <View style={styles.counter}>
                                                    <TouchableOpacity onPress={() => this.decrementbtn(index)}>
                                                        <Image
                                                            source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/trash--v2.png' }}
                                                            style={styles.counterbtn}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text style={styles.countertext}>{item.item.itemcount}</Text>
                                                    <TouchableOpacity onPress={() => this.incrementbtn(index)}>
                                                        <Image
                                                            source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/plus-math--v1.png' }}
                                                            style={styles.counterbtn}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={styles.pizzaprice}>₹ {item.item.price * item.item.itemcount}.00</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
                            <View style={styles.head}>
                                <Text style={styles.menuheading}>Frequently Bought Together</Text>
                                <TouchableOpacity style={styles.exploremenubtn} onPress={() => this.props.navigation.navigate('TabNavigator')}>
                                    <Text style={styles.exploremenutxt}>EXPLORE MENU</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal={true}>
                                {this.state.itemsdata.map((element) => {
                                    return (
                                        <View style={styles.main}>
                                            <View style={styles.top}>
                                                <Image source={{ uri: element.img }} style={styles.img} />
                                                <View style={styles.itemdetails}>
                                                    <Text style={styles.itemname}>{element.name}</Text>
                                                    <Text style={styles.itemprice}>₹ {element.price}</Text>
                                                </View>
                                            </View>
                                            {/* <TouchableOpacity onPress={() => this.addbtn(element)}>
                                                <Text style={styles.addbtntext}>ADD</Text>
                                            </TouchableOpacity> */}
                                        </View>
                                    );
                                })}
                            </ScrollView>
                            <View style={styles.bill}>
                                <View style={styles.billrow}>
                                    <Text style={styles.key}>Sub Total                                   :</Text>
                                    <Text style={styles.value}>₹ {this.state.total}.00</Text>
                                </View>
                                <View style={styles.billrow}>
                                    <Text style={styles.key}>Discount                                    :</Text>
                                    <Text style={styles.value}>₹ {this.state.discount}</Text>
                                </View>
                                <View style={styles.billrow}>
                                    <Text style={styles.key}>Taxes and Charges ℹ️            :</Text>
                                    <Text style={styles.value}>₹ {this.state.taxandcharges}</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                        marginBottom: 10
                                    }}
                                />
                                <View style={styles.billrow}>
                                    <Text style={styles.key}>Grand Total                               :</Text>
                                    <Text style={styles.value}>₹ {this.state.grandtotal}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.lower}>
                        <View style={styles.lower1}>
                            <Text style={styles.deliverystatus}>Delivering to</Text>
                            <Text style={styles.address}>WA-58, Rose Villa, Shakarpur, Delhi-110092</Text>
                        </View>
                        <View style={styles.lower2}>
                            <TouchableOpacity style={styles.placeorderbtn} onPress={() => this.placeorderbutton()}>
                                <Text style={styles.placeordertext}>PLACE ORDER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f4ff'
    },
    if_container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    upper: {
        flex: 0.7,
        padding: 10,
    },
    lower: {
        flex: 0.3,
    },
    listitem: {
        backgroundColor: '#ffffff',
        padding: normalize(15),
        marginTop: normalize(10),
        marginBottom: normalize(10),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: normalize(8)
    },
    img: {
        width: normalize(70),
        height: normalize(70),
        flex: 0.2,
        marginRight: normalize(10)
    },
    counter: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        width: normalize(90),
        justifyContent: 'center',
        padding: 2,
        borderColor: 'gray',
        flex: 0.3
    },
    counterbtn: {
        width: normalize(18),
        height: normalize(18),
    },
    detail: {
        flex: 0.8,
    },
    countertext: {
        fontSize: 14,
        marginHorizontal: normalize(12)
    },
    pizzaname: {
        fontWeight: 'bold'
    },
    pizzasize: {
        fontWeight: 'bold',
        marginTop: normalize(5),
        color: 'gray'
    },
    counter_price: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(10),
    },
    pizzaprice: {
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 0.7
    },
    menuheading: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 0.7,
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(40),
        marginBottom: normalize(20),
    },
    exploremenutxt: {
        color: '#0066a7',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    exploremenubtn: {
        flex: 0.3
    },
    main: {
        padding: normalize(10),
        backgroundColor: '#fff',
        marginRight: normalize(10),
        borderRadius: normalize(8),
        height: normalize(130),
    },
    top: {
        flexDirection: 'row',
    },
    addbtntext: {
        color: 'green',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: normalize(20)
    },
    itemname: {
        fontSize: 13,
    },
    itemprice: {
        fontWeight: 'bold',
        marginTop: normalize(40)
    },
    bill: {
        backgroundColor: '#fff',
        padding: normalize(20),
        marginTop: normalize(20),
        borderRadius: normalize(8)
    },
    billrow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: normalize(15)
    },
    key: {
        flex: 0.7
    },
    value: {
        flex: 0.3,
        textAlign: 'right'
    },
    lower1: {
        backgroundColor: '#e6faff',
        padding: normalize(15),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.8 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
    },
    lower2: {
        backgroundColor: '#fff',
        padding: normalize(15),
        shadowColor: '#00ccff',
        shadowOffset: { width: 0, height: 0.8 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
    },
    placeorderbtn: {
        backgroundColor: '#82bb37',
        padding: 15,
        borderRadius: 5
    },
    placeordertext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    deliverystatus: {
        fontWeight: 'bold',
        fontSize: 15
    },
    address: {
        marginTop: 10
    },
    emptyimg: {
        width: 250,
        height: 250,
        alignSelf: 'flex-end'
    },
    emptytxt1: {
        marginTop: normalize(100),
        fontSize: 30,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    emptytxt2: {
        marginTop: normalize(10),
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    if_exploremenubtn: {
        backgroundColor: '#82bb37',
        padding: 15,
        borderRadius: 5,
        marginHorizontal: '25%',
        marginTop: normalize(40)
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#0a5c91',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? normalize(50) : normalize(25),
        padding: normalize(15),
    },
    exploremenutext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: normalize(20),
    },
    backimg: {
        width: 25,
        height: 25,
    }
});

const mapStateToProps = (state) => {
    const { arr, billobj } = state.cart_reducer;
    return { arr, billobj };
};
const mapDispatchToProps = (dispatch) => ({
    addincart: (obj) => dispatch(addInCart(obj)),
    billing: (obj) => dispatch(billing(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
