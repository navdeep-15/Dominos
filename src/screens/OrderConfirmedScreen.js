import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView,Platform } from 'react-native'
import { connect } from 'react-redux';
import { addInCart, billing } from '../action/index';
import {normalize} from '../dimension'

export class OrderConfirmedScreen extends React.PureComponent {
    render() {
        var item = this.props.billobj;
        var today = new Date();
        var date = today.getFullYear() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return (
            <View style={styles.container}>
                <View style={styles.blueheader}>
                    <View style={styles.titlebar}>
                        <Text style={styles.titlebartext}>Thank You for Your Order </Text>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('DrawerNavigator');
                            this.props.arr=[];
                        }}>
                            <Image source={require('../assets/homeicon.png')}
                                style={styles.homeicon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detail}>
                        <Image source={require('../assets/success.png')} style={styles.sucesslogo} />
                        <View style={styles.innerdetail}>
                            <Text style={styles.orderconfirmedtxt}>
                                Order Confirmed
                            </Text>
                            <View style={styles.innerbottomdetail}>
                                <Text style={styles.innerdetailtext}>
                                    Order No {Math.floor(Math.random() * 90 + 10)}
                                </Text>
                                <Text style={styles.innerdetailtext}>
                                    {date}
                                </Text>
                                <Text style={styles.innerdetailtext}>
                                    {time}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.menuheading}>
                        Order Summary
                    </Text>
                    <Text style={styles.headingtext}>
                        Delivery Address
                    </Text>
                    <Text style={styles.subheadingtext}>
                        WA-58, Rose Villa, Delhi-110092
                    </Text>
                    <Text style={styles.headingtext}>
                        Payment Mode
                    </Text>
                    <Text style={styles.subheadingtext}>
                        Credit Card
                    </Text>
                    <Text style={styles.headingtext}>
                        Items
                    </Text>
                    <ScrollView>
                        {
                            this.props.billobj.itemnames.map((item, index) => {
                                return (
                                    <View style={{ flexDirection: 'row', width: 350, marginTop: 10, marginLeft: 15 }}>
                                        <Text style={styles.itemname}>{item}</Text>
                                        <Text style={styles.itemquantity}>{this.props.billobj.itemcount[index]}</Text>
                                        <Text style={styles.itemprice}>₹ {this.props.billobj.itemprice[index]}</Text>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginTop:20
                        }}
                    />
                    <View style={styles.totalview}>
                        <Text style={styles.totaltext}>Sub Total</Text>
                        <Text style={styles.totaltext}>₹ {this.props.billobj.subtotal}</Text>
                    </View>
                    <View style={styles.totalview}>
                        <Text style={styles.totaltext}>GST</Text>
                        <Text style={styles.totaltext}>₹ {this.props.billobj.gst}</Text>
                    </View>
                    <View style={styles.totalview}>
                        <Text style={styles.totaltext}>Discount</Text>
                        <Text style={styles.totaltext}>- ₹ {this.props.billobj.discount}</Text>
                    </View>
                    <View style={styles.totalview}>
                        <Text style={styles.totaltext}>Grand Total</Text>
                        <Text style={styles.totaltext}>₹ {this.props.billobj.grandtotal}</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    blueheader: {
        backgroundColor: '#0a5c91',
        paddingTop: Platform.OS === 'ios'?normalize(60):normalize(22),
        padding: normalize(20),
    },
    titlebar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titlebartext: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1
    },
    homeicon: {
        width: 20,
        height: 20,
    },
    sucesslogo: {
        width: 40,
        height: 40,
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginTop: normalize(10),
    },
    innerdetail: {
        flex: 1,
        marginLeft: normalize(10)
    },
    orderconfirmedtxt: {
        fontWeight: 'bold',
        color: "#e6faff",
        fontSize: 25,
    },
    innerbottomdetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(8)
    },
    innerdetailtext: {
        color: 'white',
        fontWeight: 'bold',
        flex: 0.33,
        fontSize: 13,
        marginRight: normalize(12),
    },
    content: {
        padding: normalize(12),
    },
    menuheading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: normalize(15),
    },
    headingtext: {
        fontWeight: 'bold',
        marginTop: normalize(20),
        fontSize: 15
    },
    subheadingtext: {
        marginTop: normalize(10),
        marginLeft: normalize(10)
    },
    itemname: {
        fontWeight: 'bold',
        flex: 0.7
    },
    itemquantity: {
        fontWeight: 'bold',
        flex: 0.1

    },
    itemprice: {
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 0.2

    },
    totalview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    totaltext: {
        flex: 0.5,
        textAlign: 'right',
        fontWeight: 'bold',
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmedScreen);

