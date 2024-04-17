import Colors from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../../types";

interface ProductListItemProps {
  product: Product;
}

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image ?? "" }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
});
