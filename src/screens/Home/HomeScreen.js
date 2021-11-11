import React from 'react';
import {Text, ScrollView, TouchableOpacity, View, FlatList} from 'react-native';
import styles from './styles';
import Colors from '../../theme/Colors';
import space from '../../utils/spacing';
import {SFProTextMedium} from '../../utils/BaseValues';
import FontSize from '../../theme/FontSize';

const data = [
  {
    id: 1,
    name: 'Sữa rửa mặt',
  },
  {
    id: 2,
    name: 'Kem chống nắng',
  },
  {
    id: 3,
    name: 'Mặt nạ',
  },
  {
    id: 4,
    name: 'Nước hoa',
  },
  {
    id: 5,
    name: 'Bông tẩy trang',
  },
];

const HomeScreen = () => {
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity key={item.id} style={styles.item}>
        <Text style={{fontFamily: SFProTextMedium}}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          marginTop: space.hd10,
          paddingHorizontal: space.hd10,
          fontFamily: SFProTextMedium,
          fontSize: FontSize.font16,
        }}>
        {'Danh mục'}
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={data}
        renderItem={(item, index) => _renderItem(item, index)}
      />
      <Text
        style={{
          marginTop: space.hd10,
          paddingHorizontal: space.hd10,
          fontFamily: SFProTextMedium,
          fontSize: FontSize.font16,
        }}>
        {'Hàng bán chạy'}
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
