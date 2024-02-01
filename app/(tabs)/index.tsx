import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useRouter } from "expo-router";

type Animes = {
  id: string;
  type: string;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    synopsis: string;
    description: string;
    coverImageTopOffset: number;
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
    averageRating: number;
  };
};

const baseUrl = "https://kitsu.io/api/edge/anime";

const Index = () => {
  const [anime, setAnime] = useState<Animes[] | null>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setAnime(res.data.data);
    });
  }, []);
  return (
    <ScrollView>
      <View>
        <Image source={require("../../assets/Image.png")} />
        <View style={{ position: "absolute" }}>
          <Image
            source={require("../../assets/Logo.png")}
            style={{ position: "absolute", top: 80, left: 30 }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              top: 280,
              left: 24,
            }}
          >
            Demon Slayer: Kimetsu ...
          </Text>
          <Text style={{ color: "white", top: 280, left: 24 }}>
            Action, Shounen, Martial Arts, Adventure, ...
          </Text>
          <Text style={styles.playButton}>Play</Text>
          <Text style={styles.listButton}>My list</Text>
        </View>
        <View style={{ padding: 24 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Top Hits Animes
            </Text>
            <Link href={"/releaseCalendar"} style={{ color: "green" }}>
              <Text>See all</Text>
            </Link>
          </View>
          <FlatList
            data={anime}
            renderItem={({ item: anime }: { item: Animes }) => (
              <TouchableOpacity
                onPress={() => router.push(`/anime/${anime.id}`)}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 36,
                      color: "white",
                      position: "absolute",
                      bottom: 10,
                      zIndex: 1,
                      left: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {anime.id}
                  </Text>
                  <View style={styles.rate}>
                    <Text
                      style={{
                        backgroundColor: "#06C149",
                        borderRadius: 6,
                        paddingHorizontal: 10,
                        color: "white",
                      }}
                    >
                      {anime.attributes.averageRating}
                    </Text>
                  </View>
                  <Image
                    source={{ uri: anime.attributes.posterImage.large }}
                    height={200}
                    width={150}
                    style={{
                      marginRight: 8,
                      borderRadius: 10,
                      marginTop: 24,
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
            horizontal={true}
          ></FlatList>
        </View>

        {/* 2 section */}

        <View style={{ padding: 24 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              New Episode Releases
            </Text>
            <Link href={"/mylist"} style={{ color: "green" }}>
              <Text>See all</Text>
            </Link>
          </View>
          <FlatList
            data={anime}
            renderItem={({ item: anime }: { item: Animes }) => (
              <TouchableOpacity
                onPress={() => router.push(`/anime/${anime.id}`)}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 36,
                      color: "white",
                      position: "absolute",
                      bottom: 30,
                      zIndex: 1,
                      left: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {anime.id}
                  </Text>
                  <View style={styles.rate}>
                    <Text
                      style={{
                        backgroundColor: "#06C149",
                        borderRadius: 6,
                        paddingHorizontal: 10,
                        color: "white",
                      }}
                    >
                      {anime.attributes.averageRating}
                    </Text>
                  </View>
                  <Image
                    source={{ uri: anime.attributes.posterImage.large }}
                    height={200}
                    width={150}
                    style={{
                      marginRight: 8,
                      borderRadius: 10,
                      marginBottom: 24,
                      marginTop: 24,
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
            horizontal={true}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  playButton: {
    borderWidth: 1,
    borderColor: "#06C149",
    width: 84,
    height: 32,
    top: 290,
    left: 24,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#06C149",
    color: "white",
    borderRadius: 100,
  },
  listButton: {
    borderWidth: 1,
    borderColor: "white",
    width: 103,
    height: 32,
    top: 260,
    left: 120,
    padding: 5,
    textAlign: "center",
    color: "white",
    borderRadius: 100,
  },
  rate: {
    position: "absolute",
    top: 36,
    left: 12,
    borderRadius: 6,
    zIndex: 1,
  },
});

export default Index;