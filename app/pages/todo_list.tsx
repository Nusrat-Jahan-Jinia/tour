import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, FlatList, Alert, TextInput, Modal, Pressable, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { alertDialog } from '../../helper/generalAlert';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter, Link, router } from 'expo-router';
import { toDoList } from '../../fixtures/dummyNestedList';
import { itemType } from '../../types/listType';
import { PaperProvider, Button, IconButton, Tooltip } from 'react-native-paper';



type Item = {
  id: string;
  title: string;
  occurrence: string,
  subItems?: Item[];
};

export default function ToDoList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listData, setListData] = useState(toDoList);
   const [newList, setNewList] = useState('');
  const [occurrence, setOccurrence] = useState('daily');

  const handleAddList = () => {
    console.log("hello, add list");
     if (newList.trim()) {
      listData.push({
        id: (toDoList.length + 1).toString(),
        title: newList,
        occurrence: occurrence
      });
      setNewList('');
      setModalVisible(false);
    }
  };
  
    const renderSubItem = ({ item }: { item: Item }) => (
    <View style={styles.subItemContainer}>
      <Text style={styles.subItemText}>{item.title}</Text>
    </View>
    );
     const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
         <Text style={styles.itemText}>{item.title}</Text>
         <Text style={styles.occurrence}>{item.occurrence}</Text>
      <FlatList
        data={item.subItems}
        renderItem={renderSubItem}
        keyExtractor={(subItem) => subItem.id}
      />
    </View>
  );


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>My New Plan</Text>
                 <TextInput
                    style={styles.input}
                    placeholder="Enter new country"
                    value={newList}
                    onChangeText={setNewList}
                />
                 
                <Picker
                    selectedValue={occurrence}
                    style={styles.input}
                    onValueChange={ (itemValue: string) =>
                      setOccurrence(itemValue)
                    }
                  >
                    <Picker.Item label="Higher" value="higher" />
                    <Picker.Item label="Moderate" value="moderate" />
                    <Picker.Item label="Lower" value="lower" />
                </Picker>
                <Button style={styles.submitBtn } mode="contained" onPress={handleAddList}>
                  <Text style={styles.textStyle}>Submit</Text>
                </Button>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
          <View>
            <Link href={"/(tabs)/"}>
             <Image
                style={styles.tinyLogo}
                source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
              />
            </Link>
            
            
          </View> 

          <View>
               <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add Checklist</Text>
              </Pressable>
          </View>
        <View style={styles.display}>
          <Text style={styles.headline}> My Plans</Text>
        </View>
            <FlatList
                data={toDoList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
          />
          </PaperProvider>
        </SafeAreaView>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  display: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:20,
  },
headline: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
    itemContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subItemContainer: {
    paddingLeft: 20,
    paddingVertical: 5,
  },
  subItemText: {
    fontSize: 16,
    color: '#555',
  },
  plus: {
    width: 40,
    height: 40,
  },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtn: {
    backgroundColor: "green", 
    },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'green',
    margin: 20,
  },
  buttonClose: {
    backgroundColor: 'gray',
    marginTop: 26,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
   modalButtonContainer: {
    margin: 10,
  },
  occurrence: {
    fontSize: 16,
    fontWeight: 300,
  },
    tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
