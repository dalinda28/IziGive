import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: "100%",

        borderBottomColor: "#D7D7D7",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          borderBottomColor: getSelectionMode == 1 ? "#15AA49" : "#D7D7D7",
          borderBottomWidth: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#727070",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          borderBottomColor: getSelectionMode == 1 ? "#D7D7D7" : "#15AA49",
          borderBottomWidth: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#727070",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
