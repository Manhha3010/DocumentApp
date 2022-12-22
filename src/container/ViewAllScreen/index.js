import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import {CustomizeHeader} from '../../components/Header';
import React from 'react';

export function ViewAllScreen() {
  const data = [
    {
      name: 'Chuyện tình nhà thơ',
      image: '../../assets/img/lock.png',
    },
    {
      name: 'Phải chia tay thôi',
      image: '../../assets/img/lock.png',
    },
    {
      name: 'Yêu em',
      image: '../../assets/img/lock.png',
    },
    {
      name: 'Bài hát gì đó đang hót hót',
      image: '../../assets/img/lock.png',
    },
  ];
  const renderItem = item => {
    return (
      <TouchableOpacity>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View>
            <Image
              source={{
                uri: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/283801840_169618485471409_7959856456520608362_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YNjb1J6G0J4AX96B4Ie&_nc_ht=scontent.fhan14-1.fna&oh=00_AfC4G2wiuZ-PE5SNlXJl9ulA86-XJPlrOWrXBNjOIFQ8eg&oe=63898F3D',
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                marginHorizontal: 15,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 10,
                fontSize: 16,
                paddingTop: 12,
              }}>
              {item.item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <CustomizeHeader title="Tất cả bài đăng" isBack={true} />
      <FlatList data={data} key={Math.random()} renderItem={renderItem} />
    </>
  );
}
