### usage

It's a react-native Component that split a box into several pieces. It's a quick way to layout.

### install 

        npm install splitlayout --save

### example one: heade/body/info/button layout

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

### example two header/body/image/footer layout

        import SplitLayout from 'splitlayout'
        import React, { Component } from 'react'
        import { StyleSheet, Text, Image } from 'react-native'
    
        export default class Demo2 extends Component {
            render() {
                return (
                    <SplitLayout split="-" style={ style.item }>
                        <SplitLayout height={ 44 } style={ style.title }>
                            <Text>Some Tittle</Text>
                        </SplitLayout>
                        
                        {/* fix reate container, height is 33.33% of width */}
                        <SplitLayout height={ '33.33vw' }>
                            <Image style={ style.image } source={{ uri: 'https://www.google.com/logos/doodles/2016/james-welchs-76th-birthday-5636092473638912.2-hp.png' }} />
                        </SplitLayout>
                        
                        <SplitLayout split="|">
                            <SplitLayout flex={ 1 }>
                                <Text style={ style.desc } numberOfLines={ 1 }> Get Image from Today's Google</Text>
                            </SplitLayout>
    
                            <SplitLayout split='|' width={ 120 } style={ style.tags }>
                                <Text style={ style.tag }> Hot ↑</Text>
                            </SplitLayout>
                        </SplitLayout>
                    </SplitLayout>
                )
            }
        }
        
        let style = StyleSheet.create({
            item: {
                backgroundColor: '#fff',
                margin: 5,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#eee'
            },
            title: {
                justifyContent: 'center',
                borderBottomWidth: StyleSheet.hairlineWidth
            },
            image: {
                flex: 1, 
                resizeMode: 'cover'
            },
            desc: {
                color: '#ccc',
                fontSize: 12,
                lineHeight: 24
            },
            tags: {
                justifyContent: 'flex-end',
                alignItems: 'center'
            },
            tag: {
                color: '#fff',
                backgroundColor: '#f00'
            }
        })




