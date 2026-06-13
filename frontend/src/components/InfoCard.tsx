import React from 'react';
import { Text, View } from 'react-native';

type InfoCardProps = {
  title: string;
  body: string;
};

export default function InfoCard({ title, body }: InfoCardProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <Text className="mb-1 text-base font-semibold text-slate-900">{title}</Text>
      <Text className="text-sm text-slate-600">{body}</Text>
    </View>
  );
}
