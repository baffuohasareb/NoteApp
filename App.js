import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='NoteList' screenOptions={{headerShown: false}}>
        <Stack.Screen name='NoteList' component={NoteList} />
        <Stack.Screen name='Note' component={Note} />
        <Stack.Screen name='NoteForm' component={NoteForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
