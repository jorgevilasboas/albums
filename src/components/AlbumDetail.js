import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';


const AlbumDetail = (props) => {
    return (
        <Text>{props.album.title}</Text>
    );    
}

export default AlbumDetail;