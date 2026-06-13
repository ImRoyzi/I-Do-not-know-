import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import InfoCard from '../components/InfoCard';

export default function HomeScreen() {
  const [vibe, setVibe] = useState('Loading your fun vibe...');

  const loadVibe = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/fun');
      const data = await response.json();
      setVibe(`${data.emoji ?? '✨'} ${data.message}`);
    } catch (error) {
      setVibe('⚠️ Backend is not running yet. Start it with npm run dev.');
    }
  };

  useEffect(() => {
    loadVibe();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 py-6">
        <Text className="mb-1 text-3xl font-bold text-slate-900">FunStarter</Text>
        <Text className="mb-4 text-base text-slate-600">
          A playful Expo + TypeScript app with a live backend vibe and a clean starter layout.
        </Text>

        <View className="mb-5 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 p-4 shadow-sm">
          <Text className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-100">Today’s vibe</Text>
          <Text className="mt-2 text-xl font-semibold text-white">{vibe}</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            className="mt-4 rounded-full bg-white/90 px-4 py-2 self-start"
            onPress={loadVibe}
          >
            <Text className="text-sm font-semibold text-indigo-700">Refresh vibe</Text>
          </TouchableOpacity>
        </View>

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
            title="Backdrop for your next idea"
            body="This starter is ready to become a real product with more screens, animations, and backend features."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
