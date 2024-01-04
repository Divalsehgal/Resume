import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';

import AddModal from '../components/AddModal';
import LoadingIndicator from '../components/LoadingIndicator'
import BrowserItem from '../components/BrowserItem'

import colors from '../config/colors';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})
function Browsers({url='https://google.com/myData.json'}) {

    const URL = url

    // Element of json
    // {"Browsers":[
    //     {
    //      "fullname": "Chrome",
    //      "linkToBrowser": "https://google.com",
    //      "image": "https://linktoimage.com/chrome.png",
    //      "minMemory": "1 GB",
    //      "currentVersion": "29.0.1",
    //      "minimumRAM": "2 GB",
    //      "description": "How much RAM do you have? Ha-ha",
    //      "windows": true,
    //      "mac": true,
    //      "linux": true,
    //      "ubuntu": true,
    //      "fedora": false,
    //      "stars": 4,
    //      "id":"chrome"
    //    },
    // ...
    // ]
    // }

    const [loading, setLoading] = useState(true)
    const [browsers, setBrowsers] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [description, setDescription] = useState("")

    const changeDescription = (description) => {
        setDescription(description)
        setModalVisible(!modalVisible)
    }

    const changeOpacity = () => {
        setModalVisible(!modalVisible)
        console.log('changeOpacity')
    }



    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.Browsers
            })
            .then(browsers => {
                setBrowsers(browsers)
                // console.log(browsers)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setLoading(false));
    }, [])


    return (
        <View style={styles.container}>
            {loading ? (
                <LoadingIndicator />
            ) : (
                    <View>
                        <AddModal 
                            modalVisible={modalVisible}
                            changeOpacity = {() => changeOpacity()}
                            description={description}
                        />
                        <FlatList
                            data={browsers}
                            keyExtractor={browser => browser.fullname}
                            renderItem={({ item }) =>
                                <BrowserItem
                                    fullname={item.fullname}
                                    image={item.image}
                                    linkToBrowser={item.linkToBrowser}
                                    minMemory={item.minMemory}
                                    currentVersion={item.currentVersion}
                                    minimumRAM={item.minimumRAM}
                                    description={item.description}
                                    windows={item.windows}
                                    mac={item.mac}
                                    linux={item.linux}
                                    ubuntu={item.ubuntu}
                                    fedora={item.fedora}
                                    stars={item.stars}
                                    changeDescription={() => changeDescription(item.description)}
                                />
                            }
                        />
                    </View>
                )
            }
        </View >
    );
};



export default Browsers;
