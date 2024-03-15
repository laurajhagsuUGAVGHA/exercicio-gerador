import { View, StyleSheet, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PaginaSenhas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Minhas avaliação
                </Text>
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#4D1610"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    }

})