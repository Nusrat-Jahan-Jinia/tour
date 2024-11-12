import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,
         Button, Modal,
                 TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { alertDialog } from '../../helper/generalAlert';
import { toDoList } from '../../fixtures/dummayList';
import { itemType } from '../../types/toDoType';

const showAddHabitModal = () => {
  // Add modal logic here
  const [modalVisible, setModalVisible] = useState(false);
  const [newHabit, setNewHabit] = useState('');
  const [occurrence, setOccurrence] = useState('daily');
  const [habitsData, setHabitsData] = useState(toDoList);

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      habitsData.push({
        id: (toDoList.length + 1).toString(),
        name: newHabit,
        occurrence: occurrence
      });
      setNewHabit('');
      setModalVisible(false);
    }
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Enter new habit"
            value={newHabit}
            onChangeText={setNewHabit}
          />

          <Picker
            selectedValue={occurrence}
            style={styles.picker}
            onValueChange={ (itemValue: string) =>
              setOccurrence(itemValue)
            }
          >
            <Picker.Item label="Daily" value="daily" />
            <Picker.Item label="Weekly" value="weekly" />
            <Picker.Item label="Monthly" value="monthly" />
          </Picker>

          <View style={styles.modalButtonContainer}>
            <Button title="Add Habit" onPress={handleAddHabit} />
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Button onPress={() => setModalVisible(true)} title="Add a new habit" />
    </>
  );
}

const HabitListScreen = () => {
  const [habitsData, setHabitsData] = useState(toDoList);

  const deleteHabit = (id: string) => {
    const index = habitsData.findIndex(habit => habit.id === id);
    habitsData.splice(index, 1);
    setHabitsData([...habitsData]);
    alertDialog('Habit Deleted', 'Habit has been deleted successfully');
  };

  const renderItem = ({ item }: { item: itemType }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Delete"
                color="#841584"
                onPress={() => deleteHabit(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Habits</Text>
      </View>
      <FlatList
        data={toDoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.innerContainer}>
        {showAddHabitModal()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  innerContainer: {
    paddingVertical: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 200,
    height: '20%',
  },
  modalView: {
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 10,
    borderColor: '#777',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '50%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  modalButtonContainer: {
    margin: 10,
  },
  picker: {
    height: 50,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  }
});

export default HabitListScreen;