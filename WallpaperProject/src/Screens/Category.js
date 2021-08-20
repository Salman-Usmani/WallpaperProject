import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {DataTable} from 'react-native-paper';

const Category = () => {
  const [data, setData] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch('https://awanwoodworkshop.store/react_API/api/AllGallery').then(
      // fetch('https://awanwoodworkshop.store/react_API/api/gallery').then(
      res => {
        res.json().then(resp => {
          console.log('result', resp);
          setGallery(resp.gallery);
          let abc = [resp.gallery];
          console.log(abc);
          setData(resp);
          console.log(JSON.stringify(data[0].gallery));
        });
      },
    );
  }, []);
  return (
    <SafeAreaView>
      <DataTable>
        {data.map(item => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.cat_name}</DataTable.Cell>
            <DataTable.Cell>{item.description}</DataTable.Cell>
            <DataTable.Cell>{item.image}</DataTable.Cell>
            <DataTable.Cell>{item.cat_id}</DataTable.Cell>
          </DataTable.Row>
        ))}
        {/* <Text>{gallery[0].id}</Text> */}
        {/* {
                    data.map((item) =>
                        <DataTable.Row>
                            <DataTable.Cell>{item.id}</DataTable.Cell>
                            <DataTable.Cell>{item.image}</DataTable.Cell>
                            <DataTable.Cell>{item.cat_id}</DataTable.Cell>
                        </DataTable.Row>
                    )
                } */}
      </DataTable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Category;
