import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { colors } from "../../const/color";
import { fetchArtist, upArtist } from "../Request/http";

const renderItem = (item) => {
  const img = item.item.image;
  return (
    <View>
      <Image
        source={{
          uri: item.item.img,
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,
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

export default function Artist(props) {
  const [fetchDataArtist, setFetchDataArtist] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchArtist();
      setFetchDataArtist(data);
    }
    fetchData();
    const post = {
      id: 1,
      img: "ccc",
      name: "ddd",
      value: 2,
    };
    // upArtist(post);
  }, []);
  return (
    <View style={{ marginVertical: 24 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 20, left: 0 }}>
          Artists
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
        data={fetchDataArtist}
        key={Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
}
