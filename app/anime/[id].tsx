import { GoBack } from "@/assets/icons/goBack";
import { useGlobalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import axios from "axios";

type Animes = {
  id: string;
  type: string;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    description: string;
    titles: {
      en: string;
      en_jp: string;
      ja_jp: string;
    };
    posterImage: {
      tiny: string;
      large: string;
      small: string;
      medium: string;
      original: string;
      meta: {
        dimensions: {
          tiny: {
            width: 110;
            height: 156;
          };
          large: {
            width: 550;
            height: 780;
          };
          small: {
            width: 284;
            height: 402;
          };
          medium: {
            width: 390;
            height: 554;
          };
        };
      };
    };
  };
};

const baseUrl = "https://kitsu.io/api/edge/anime/";

export default function Anime() {
  const [anime, setAnime] = useState<Animes[] | any>([]);
  const { id } = useGlobalSearchParams();

  useEffect(() => {
    axios.get(baseUrl + id).then((res) => {
      console.log(res.data.data.attributes.posterImage.original);
      
      setAnime(res.data.data);
    });
  },[]);

  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <Link href={"/"}>
        <GoBack />
      </Link>
      <FlatList
        data={anime}
        renderItem={({ item: anime }: { item: Animes }) => (
          <View style={{ flex: 1, height: '100%', width: '100%' }}>
            <Image
              source={{
                uri: anime.attributes.posterImage.original,
              }}
              width={100}
              height={100}
            />
            <Text>{anime.attributes.description}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}