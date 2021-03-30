import { StyleSheet } from "react-native"
import Colors from "../../Constants/Colors"

export const styles = StyleSheet.create({
    footer: {
        backgroundColor: Colors.grey,
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 10,
        marginTop: -10
    },
    footerText: {
        color: Colors.light,
    },
    footerLinkText: {
        color: Colors.blue,
        fontWeight: "bold",
        marginLeft: 5
    }
});