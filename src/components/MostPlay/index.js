import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { colors } from "../../const/color";

const data = [
  {
    name: "Chuyện tình nhà thơ",
    image: "../../assets/img/lock.png",
  },
  {
    name: "Phải chia tay thôi",
    image: "../../assets/img/lock.png",
  },
  {
    name: "Yêu em",
    image: "../../assets/img/lock.png",
  },
  {
    name: "Bài hát gì đó đang hót hót",
    image: "../../assets/img/lock.png",
  },
];
const renderItem = (item) => {
  const img = item.item.image;
  return (
    <View>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          marginHorizontal: 15,
          marginTop: 10,
        }}
      />
      <Text style={{ fontWeight: "700", textAlign: "center", marginTop: 10 }}>
        {item.item.name}
      </Text>
    </View>
  );
};

export default function MostPlay(props) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 20, left: 0 }}>
          MostPlay
        </Text>
        <TouchableOpacity>
          <Text
            style={{ color: colors.primary, fontWeight: "700", fontSize: 16 }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        key={Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
}
