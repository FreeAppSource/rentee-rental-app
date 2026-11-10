import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../../theme';
import Header from '../../components/Header';
import { userProfile } from '../../data';

export default function ProfileScreen() {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header
        title="Profile"
        subtitle="Account Preferences"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* User Card (Sketch: Henry Quill, 320 points) */}
        <View style={[styles.userCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Image source={userProfile.avatar} style={styles.avatar} />
          <View style={styles.userTexts}>
            <Text style={[styles.userName, { color: theme.heading }]}>{userProfile.name}</Text>
            <View style={[styles.pointsBadge, { backgroundColor: theme.primarySoft }]}>
              <Ionicons name="ribbon-outline" size={14} color={theme.primary} />
              <Text style={[styles.pointsText, { color: theme.primary }]}>{userProfile.points} points</Text>
            </View>
          </View>
        </View>

        {/* Menu Items (Sketch: Personal Info, Setting, Support, Privacy & Policy) */}
        <View style={[styles.menuBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push('/personal-info')}
          >
            <View style={styles.menuLeft}>
              <View style={[styles.iconWrap, { backgroundColor: theme.primarySoft }]}>
                <Ionicons name="person-outline" size={20} color={theme.primary} />
              </View>
              <Text style={[styles.menuTitle, { color: theme.heading }]}>Personal Info</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: theme.borderLight }]} />

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push('/settings')}
          >
            <View style={styles.menuLeft}>
              <View style={[styles.iconWrap, { backgroundColor: theme.secondarySoft }]}>
                <Ionicons name="settings-outline" size={20} color={theme.secondary} />
              </View>
              <Text style={[styles.menuTitle, { color: theme.heading }]}>Setting</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: theme.borderLight }]} />

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push('/support')}
          >
            <View style={styles.menuLeft}>
              <View style={[styles.iconWrap, { backgroundColor: theme.primarySoft }]}>
                <Ionicons name="help-buoy-outline" size={20} color={theme.primary} />
              </View>
              <Text style={[styles.menuTitle, { color: theme.heading }]}>Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: theme.borderLight }]} />

          <TouchableOpacity
            style={styles.menuRow}
            onPress={toggleTheme}
          >
            <View style={styles.menuLeft}>
              <View style={[styles.iconWrap, { backgroundColor: theme.secondarySoft }]}>
                <Ionicons name={isDark ? 'sunny-outline' : 'moon-outline'} size={20} color={theme.secondary} />
              </View>
              <Text style={[styles.menuTitle, { color: theme.heading }]}>
                {isDark ? 'Bright Mode (Light)' : 'Black Mode (Dark)'}
              </Text>
            </View>
            <Text style={{ fontSize: 13, fontWeight: '700', color: theme.primary }}>
              {isDark ? 'ON' : 'OFF'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Log Out */}
        <TouchableOpacity
          style={[styles.logoutBtn, { backgroundColor: theme.secondarySoft }]}
          onPress={() => router.replace('/login')}
        >
          <Ionicons name="log-out-outline" size={20} color={theme.secondary} />
          <Text style={[styles.logoutText, { color: theme.secondary }]}>Log Out of Rentee</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    marginBottom: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#583EF2',
  },
  userTexts: {
    marginLeft: 16,
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
  },
  pointsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  pointsText: {
    fontSize: 12,
    fontWeight: '800',
  },
  menuBox: {
    borderRadius: 22,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  divider: {
    height: 1,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 18,
    paddingVertical: 16,
    marginTop: 24,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '800',
  },
});
