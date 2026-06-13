import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import InfoCard from '../components/InfoCard';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 py-6">
        <Text className="mb-2 text-3xl font-bold text-slate-900">AppTest</Text>
        <Text className="mb-6 text-base text-slate-600">
          A clean Expo + TypeScript starting point with Tailwind-friendly styling.
        </Text>

        <View className="space-y-4">
          <InfoCard
            title="Human-first structure"
            body="The app is split into simple screens and components so the project stays easy to read as it grows."
          />
          <InfoCard
            title="React Native + TypeScript"
            body="The frontend uses Expo and TypeScript by default, keeping the codebase modern and predictable."
          />
          <InfoCard
            title="Tailwind-ready styling"
            body="NativeWind lets you use utility classes for consistent UI without losing the React Native feel."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
