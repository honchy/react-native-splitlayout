### usage

It's a react-native Component that split a box into several pieces. It's a quick way to layout.

### install 

        npm install splitlayout --save

### example

        import SplitLayout from 'splitlayout'
        import React, { Component } from 'react'
        import { StyleSheet, Text } from 'react-native'
    
        export default class Demo1 extends Component {
            render() {
                return (
                    <SplitLayout split="-" style={ styles.box }>{/* flexDirection column */}
                        
                        {/* fixedHight tittle */}
                        <SplitLayout height={ 44 } style={ styles.title }>
                            <Text>Top Tittle</Text>
                        </SplitLayout>
    
                        {/* flex body */}
                        <SplitLayout flex={ 1 } split="|" style={ styles.body }>
                            
                            {/* width rate */}
                            <SplitLayout flex={ 3 } style={ styles.part1 }>
                                <Text>Info Part One</Text>
                            </SplitLayout>
                            <SplitLayout flex={ 2 } style={ styles.part2 }>
                                <Text>Info Part Two</Text>
                            </SplitLayout>
    
                            {/* percentage width */}
                            <SplitLayout width={ '33.33vw' } style={ styles.action }>
                                <Text>Perhaps One Button</Text>
                            </SplitLayout>
                        </SplitLayout>
                    </SplitLayout>
                )
            }
        }
    
        const styles = StyleSheet.create({
            box: {
                borderWidth: 1,
                height: 200
            },
            title:  {
                justifyContent: 'center'
            },
            body: {
                backgroundColor: '#ccc'
            },
            part1: {
                borderRightWidth: 1
            },
            action: {
                borderLeftWidth: 1  
            }
        })

