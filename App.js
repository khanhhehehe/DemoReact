import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [taskList,setTaskList] = useState([]) 
  const handleAddTask = (task)=>{
    setTaskList([...taskList,task])
  }
  const showDetailTask = (index)=> {
    let taskListtmp = [...taskList];
    Alert.alert(
      "Chi tiết",
      ""+taskListtmp[index],[
        // {
        //   text: "Cancel",onPress: () => {},
        // },
        {
          text: "OK",onPress: () => {}
        }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Todo Listt</Text>
      <ScrollView>
        {
          taskList.map((item,index) => {
            return <Task key={index} title={item} number={index+1} showDetail={()=>showDetailTask(index)}/> 
          })
        }
      </ScrollView>
      <Form addTask={handleAddTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
  },
  textHeader: {
    fontSize: 24,
    marginHorizontal: 25,
    marginTop: 50,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#039BE5',
  },
  
});
