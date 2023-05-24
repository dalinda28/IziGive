import Toast from "react-native-toast-message";
export const showToastMessage = (type, message) => {
  Toast.show({
    type: type,
    text1: "IZIGIVE-APP",
    text2: message,
  });
};
