import React from "react";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="releaseCalendar"
        options={{
          title: "Release calendar",
        }}
      />
      <Tabs.Screen
        name="mylist"
        options={{
          title: "My list",
        }}
      />
      <Tabs.Screen name="download" options={{ title: "Download" }} />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}