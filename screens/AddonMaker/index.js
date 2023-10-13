import { useSelector } from "react-redux";
import { rest_auth_user_retrieve } from "../../store/minecraftmodmakerAPI/userDetails.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";

const MinecraftWeaponMaker = () => {
  const {
    entities: Signups
  } = useSelector(state => state.Signups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rest_auth_user_retrieve());
  }, []);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minecraft Weapon Maker</Text>
      <View style={styles.buttonContainer}>
        <Button color="yellow" title="Create Weapon" onPress={() => {}} data={Signups} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 20
  },
  buttonContainer: {
    width: "80%"
  }
});
export default MinecraftWeaponMaker;