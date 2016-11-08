### usage

This Component named SplitLayout. It'll designed to split a box into several pieces.

### example


        import SplitLayout from 'splitlayout'
        import React, { Component } from 'react'
        import { StyleSheet, Text } from 'react-native'
    
        export class Demo1 extends Component {
            render() {
                return (
                    <SplitLayout split="-">
                        <SplitLayout height={ 44 }>
                            <Text>Top Tittle</Text>
                        </SplitLayout>
                        <SplitLayout flex={2} split="|">
                            <SplitLayout flex={ 3 }>
                                <Text>Info Part One</Text>
                            </SplitLayout>
                            <SplitLayout flex={ 2 }>
                                <Text>Info Part Two</Text>
                            </SplitLayout>
                            <SplitLayout width={ '33.33vw' }>
                                <Text>Perhaps One Button</Text>
                            </SplitLayout>
                        </SplitLayout>
                    </SplitLayout>
                )
            }
        }

        const styles = StyleSheet.create({
            bg1: {
                backgroundColor: '#ff0'
            },
            bg2: {
                backgroundColor: '#f0f'
            }
        })