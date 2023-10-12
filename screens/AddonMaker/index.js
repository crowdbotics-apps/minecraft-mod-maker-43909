import { CheckBox } from "react-native-elements";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const AddonMaker = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.FjTHaviT} renderItem={({
        item
      }) => <View style={styles.NKESUvnl}><TextInput style={styles.OHLCCGtX}></TextInput></View>} ItemSeparatorComponent={() => <View style={styles.PlbfoWnR} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><FlatList style={styles.tQKbYloC} renderItem={({
        item
      }) => <View style={styles.wHwdomze}></View>} ItemSeparatorComponent={() => <View style={styles.nBuErbyW} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><Text style={styles.shQUrIeQ}>Lorem ipsum…</Text><CheckBox style={styles.cqlyEBZJ} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  FjTHaviT: {
    position: "absolute",
    width: 100,
    height: 150
  },
  NKESUvnl: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  PlbfoWnR: {
    backgroundColor: "#000000",
    height: 1
  },
  tQKbYloC: {
    position: "absolute",
    width: 100,
    height: 150,
    left: -107,
    top: 21
  },
  wHwdomze: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  nBuErbyW: {
    backgroundColor: "#000000",
    height: 1
  },
  OHLCCGtX: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 0
  },
  shQUrIeQ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  cqlyEBZJ: {
    width: 183,
    height: 69
  }
});
export default AddonMaker;