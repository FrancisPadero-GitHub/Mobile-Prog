import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";


const ListViews = () => {
  return (
    <View style={styles.container}>
      
      <SectionList  
        sections = {[ 
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson', 
              'James',
              'Jillion',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        // renderItem props uses the data inside
        renderItem = {({item}) => <Text style = {styles.item}>{item}</Text>} 
        // This one renders the title used on the data like an organizer
        renderSectionHeader = {({section}) => (<Text style={styles.sectionHeader}>{section.title}</Text>)
        }
        keyExtractor = {item => 'basicListEntry-${item}'}
      />

    </View>
  );
};
export default ListViews;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
