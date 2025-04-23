import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function RouteInputModal({ visible, onSave, onCancel }) {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  const handleSave = () => {
    if (name.trim()) {
      onSave({ name, difficulty });
      setName("");
      setDifficulty("easy");
    }
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
     
        <View style={styles.modalContent}>
        
          <Text style={styles.label}>Reitin nimi</Text>
          <TextInput
            placeholder="Reitin nimi"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <Text style={styles.label}>Difficulty</Text>
          <Picker
            selectedValue={difficulty}
            onValueChange={(itemValue) => setDifficulty(itemValue)}
          >
            <Picker.Item label="Easy" value="easy" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="Hard" value="hard" />
          </Picker>

          <View style={styles.buttons}>
            <Button title="Peruuta" onPress={onCancel} />
            <Button title="Tallenna reitti" onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
    color: "gray",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});