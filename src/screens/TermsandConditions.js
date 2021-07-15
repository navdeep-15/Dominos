import React from 'react';
import { Text, View, SectionList, StyleSheet, TouchableOpacity,Image ,Platform} from 'react-native'
import { normalize } from '../dimension'

export default class TermsandConditions extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false, currentsection: [],
            terms: [
                {
                    title: 'THANKYOU Offer T&Cs',
                    data: ['Use code THANKYOU and get Rs.100 Off on orders above Rs.400',
                        'Offer cannot be combined with any other offer/coupon.',
                        'Coupon will not be applied at all if EDV, Combo is present in cart.',
                        'This offer is applicable only on orders via Domino’s App, website and Mobile site.',
                        'Offer valid for 4 orders per mobile number or till 24th September, whichever is earlier.',
                        'You will need to log in with your mobile number to avail the offer.',
                        'Offer is applicable everyday only from 10 AM to 10:30 PM.']
                },
                {
                    title: 'Everyday Value Offers',
                    data: ['Offer applicable only on purchase of every 2 pizzas from Everyday Value Offers Section.',
                        'Everyday Value Offer is applicable only Regular and Medium size Pizzas.',
                        'Everyday Value Offer does not apply to Pizza Mania OR Combos.',
                        'Offer Not Applicable on In Store (Offline) Orders, Desktop Website and Aggregators.',
                        'Offer cannot be combined with any other offer/coupons.',
                        'Pizza Customisation or Crust Upgrade will be charged extra.',
                        'Everyday Value pricing is excluding any taxes or delivery charges.',
                        'For Delivery Charges, refer Delivery charges T&C.']
                },
                {
                    title: 'Order Delivery',
                    data: ['Your address falling in the defined delivery area of the nearest restaurant',
                        'The delivery address being mapped to the nearest restaurant that delivers in your area',
                        'Availability of the restaurant online',
                        'In case the delivery locality is not listed in the restaurant locator, delivery of orders cannot be placed; However you may choose to pick up your order from the nearest Domino restaurant']
                },
                {
                    title: 'Menu',
                    data: ['In case certain menu items are not listed in the menu page, the particular restaurant does not carry those items in the menu',
                        'In case of non-availability of ordered product at the mapped restaurant, the order would not be executed. Same would be informed by the restaurant near you',
                        'Drinks (350ml) shall be available at the discounted rate of Rs.40 solely with the Pizza Mania range',
                        'The term “Drink (350ml)” shall denote 350ml of drinks dispensed through PMX machine']
                },
                {
                    title: 'Dominos Essential Items',
                    data: ['Delivery of essential items are available only in selected area(s) serviceable by the restaurants, during defined days and serviceable hours',
                        'The defined days and serviceable hours can be different for each restaurant and are subject to change at Domino’s sole discretion',
                        'Domino’s shall attempt delivery within 24 serviceable hours of the order being placed. The order placed for essential items of grocery does not constitute any guarantee of delivery, as it is subject to availability and is solely to provide its customers essential commodities in the period of lockdown',
                        'The items/order are non-returnable',
                        'The orders can be placed through Domino’s mobile app only',
                        'For online pre-paid orders only. E- Gift Card/EGV/Gift Card are not applicable',
                        'Service Guarantee of 30 minutes or free/TSG would not be applicable on the orders',
                        'The delivery of orders shall be as per the available stock. Any order once delivered shall not be replaced',
                        'The order cannot be combined with any other Domino’s Pizza offer or item',
                        'All disputes subject to Delhi jurisdiction only',
                        'Customers cannot buy more than 2 combos per order',
                        'Minimum order value of Rs 300 apply for all delivery orders',
                        'A nominal delivery charge of Rs 30 will be levied on all orders',
                        'In case of non-availability of items, refunds shall be made to the source of payment']
                },
                {
                    title: '30 Minutes or Free & Total Satisfaction Gurantee',
                    data: ['The maximum liability of Domino’s is limited up to 300 Wallet points in case of late delivery. In case of late delivery, orders under INR 300 bill value will be eligible for Service credit of Dominos points upto Bill Value. Orders above INR 300 bill value will be eligible to get a maximum credit of 300 Dominos points. Subject to applicability.',
                        'Service guarantee of less than 30 minutes or free shall not be valid on bulk orders. Bulk Orders are orders for 5 or more baked products (including sides and/or Pizza).',
                        'Delivery guarantee is applicable at the first barrier point (security guard/reception etc.)',
                        'Dominos Pizza does not penalize its drivers for late delivery.',
                        'Dominos Pizza reserves the right to withdraw the service guarantee without prior intimation.',
                        'For online orders, TSG and Late Delivery refund points will be credited to Domino’s Wallet only. Refer Dominos Wallet Statement for Credit status & validity of points.',
                        '1 dominos point is equivalent to 1 INR. Dominos Points can be redeemed while placing your next order on Dominos App only.',
                        'Service guarantee of less than 30 minutes or free shall not be valid on bulk orders. Bulk Orders are orders of 5 or more baked products (including sides and/or Pizza).30 minutes delivery guarantee shall not be applicable on festivals/big occasions like New Year eve, Ganesh Festival, Christmas, Durga Pooja, etc. Service Guarantee may be withdrawn temporarily in view of difficult operating conditions for delivery. Service Guarantee offered by Dominos is Subject to change without prior notice.',
                        'Cash on Delivery Orders, Guest has to pay complete amount upfront to get the benefits of Service Guarantee policy.',
                        'Product Prices mentioned on Dominos assets are exclusive of all taxes. Product Prices are subject to change without prior notice. Total amount is rounded off to the nearest rupee.',
                        'Service Guarantee to Domino’s wallet is not applicable if payment is done through EGV (Electronic Gift Voucher).',
                        'Service Guarantee on orders from 11 PM – 3 AM is applicable for non-bulk Orders delivered after 45 mins.',
                        'Credit of points to the wallet will be processed with in 24hrs.',
                        'Conditions apply']
                }
            ]
        }
    }
    renderItems = ({ item }) => {
        if (this.state.currentsection.includes(item) && this.state.selected)
            return (
                <View style={styles.item}>
                    <Text>▪️ </Text>
                    <Text style={styles.item}>{item}</Text>
                </View>
            );
        return null;

    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('../assets/arrow.png')}
                            style={styles.backimg}
                        />
                    </TouchableOpacity>
                    <Text style={styles.exploremenutext}>Terms & Conditions</Text>
                </View>
                <Text style={styles.disclaimertext}>Disclaimer</Text>
                <SectionList
                    sections={this.state.terms}
                    keyExtractor={(item, index) => index.toString()}
                    renderSectionHeader={({ section }) => (
                        <TouchableOpacity
                            style={styles.sectionHeader}
                            onPress={() => {
                                this.setState({ currentsection: section.data });
                                this.setState({ selected: !this.state.selected });
                            }}>
                            <Text style={styles.sectiontitle}>
                                {section.title}
                            </Text>
                            <Text style={styles.sectionbtn}>
                                +
                            </Text>
                        </TouchableOpacity>
                    )}
                    renderItem={this.renderItems}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionHeader: {
        padding: normalize(10),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        marginBottom:normalize(10),
    },
    sectiontitle: {
        fontSize: 16,
        flex: 0.95,
    },
    sectionbtn: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 0.05
    },
    itemtext: {
        fontSize: 18,
        textAlign: 'justify',
    },
    item: {
        padding: normalize(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    disclaimertext: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: normalize(50),
        marginBottom:normalize(10),
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#0a5c91',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? normalize(50) : normalize(22),
        padding: 15,
    },
    exploremenutext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
    },
    backimg: {
        width: 25,
        height: 25,
    },
});