import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme';

export default function Header({
  title,
  subtitle,
  showBack = false,
  rightAction,
  onBack,
}) {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.left}>
        {showBack ? (
          <TouchableOpacity
            onPress={handleBack}
            style={[styles.iconBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
          >
            <Ionicons name="chevron-back" size={20} color={theme.heading} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={toggleTheme}
            style={[styles.iconBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
          >
            <Ionicons name={isDark ? 'sunny' : 'moon'} size={18} color={theme.primary} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.center}>
        {title && <Text style={[styles.title, { color: theme.heading }]}>{title}</Text>}
        {subtitle && <Text style={[styles.subtitle, { color: theme.textSecondary }]}>{subtitle}</Text>}
      </View>

      <View style={styles.right}>
        {rightAction ? (
          rightAction
        ) : (
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/messages')}
            style={[styles.iconBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={18} color={theme.heading} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  left: {
    width: 44,
    alignItems: 'flex-start',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    width: 44,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
