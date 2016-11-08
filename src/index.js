import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'

let _winsize = Dimensions.get('window'),
    vw = _winsize.width / 100,
    vh = _winsize.height / 100

export default class SplitLayout extends Component {

    render() {

        let { style=[], width, height, flex, split, ...others } = this.props
        // to array
        style = [].concat(style)

        let widthNum = parseFloat(width, 10)
        let props = [width, height]
        // process width
        props.forEach((val, index) => {
            let prop = index === 0 ? 'width' : 'height'

            numVal = parseFloat(val, 10)
            numVal = /vw$/.test(val) ? numVal * vw : numVal
            numVal = /vh$/.test(val) ? numVal * vh : numVal

            if(numVal) {
                // default added put first , it'll be overwrite then
                style.unshift({
                    flex: 0
                })
                // specified style can't be overwirtted
                style.push({
                    [prop]: numVal
                })
            }
        })

        // process flex
        if(flex) {
            style.push({
                flex: flex
            })
        }
        // process split
        if(split) {
            style.push({
                flexDirection: split === '|' ? 'row' : 'column'
            })

            style.unshift({
                alignItems: 'stretch',
                justifyContent: 'center'
            })
        }

        return (
            <View style={ style } { ...others }>
                { this.props.children }
            </View>
        )
    }
}
