import React, { useState } from 'react';
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

export default function MessagesScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Chat'); // Chat vs Notification

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header
        title="Message"
        subtitle="Host Chats & Updates"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Tab Switcher (Sketch: Chat vs Service / Notification) */}
        <View style={[styles.tabBar, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'Chat' && { backgroundColor: theme.primary }]}
            onPress={() => setActiveTab('Chat')}
          >
            <Text style={[styles.tabText, { color: activeTab === 'Chat' ? '#FFFFFF' : theme.textSecondary }]}>
              Chat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'Notification' && { backgroundColor: theme.primary }]}
            onPress={() => setActiveTab('Notification')}
          >
            <Text style={[styles.tabText, { color: activeTab === 'Notification' ? '#FFFFFF' : theme.textSecondary }]}>
              Notification
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Chat' ? (
          <View style={styles.chatList}>
            {/* Karen Smith (Sketch: Karen Smith - Did you come in time...) */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push('/chat')}
              style={[styles.chatCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <Image source={require('../../assets/images/host_karen.png')} style={styles.avatar} />
              <View style={styles.chatTexts}>
                <View style={styles.chatTop}>
                  <Text style={[styles.contactName, { color: theme.heading }]}>Karen Smith</Text>
                  <Text style={[styles.timeText, { color: theme.textMuted }]}>3 hours ago</Text>
                </View>
                <Text style={[styles.lastMsg, { color: theme.textSecondary }]} numberOfLines={1}>
                  Did you come in time? Please tell the receptionist...
                </Text>
              </View>
            </TouchableOpacity>

            {/* Hilary */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push('/chat')}
              style={[styles.chatCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <Image source={require('../../assets/images/reviewer_hilary.png')} style={styles.avatar} />
              <View style={styles.chatTexts}>
                <View style={styles.chatTop}>
                  <Text style={[styles.contactName, { color: theme.heading }]}>Hilary</Text>
                  <Text style={[styles.timeText, { color: theme.textMuted }]}>3 hours ago</Text>
                </View>
                <Text style={[styles.lastMsg, { color: theme.textSecondary }]} numberOfLines={1}>
                  I would like to prepare fresh towels for your arrival...
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.notifList}>
            {/* Special Promo (Sketch: Special offer, 50% off for all service) */}
            <View style={[styles.promoCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <View style={styles.promoHeader}>
                <Ionicons name="pricetag" size={20} color={theme.secondary} />
                <Text style={[styles.promoTitle, { color: theme.heading }]}>Special offer, 50% off!</Text>
              </View>
              <Text style={[styles.promoDesc, { color: theme.textSecondary }]}>
                Valid from 3rd to 6th June for all hourly and monthly bookings. Use code NVC35S.
              </Text>
            </View>

            {/* Booking Update */}
            <View style={[styles.notifCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <View style={styles.notifTop}>
                <Ionicons name="checkmark-circle" size={20} color={theme.success} />
                <Text style={[styles.notifTitle, { color: theme.heading }]}>Your booking has been completed</Text>
              </View>
              <Text style={[styles.notifSub, { color: theme.textSecondary }]}>
                Room ready at 6:00 am on 12/12/2021.
              </Text>
            </View>
          </View>
        )}
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
  tabBar: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 4,
    borderWidth: 1,
    marginBottom: 20,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '800',
  },
  chatList: {
    gap: 12,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  chatTexts: {
    flex: 1,
    marginLeft: 14,
  },
  chatTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: '800',
  },
  timeText: {
    fontSize: 11,
  },
  lastMsg: {
    fontSize: 13,
    marginTop: 4,
  },
  notifList: {
    gap: 14,
  },
  promoCard: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
  },
  promoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  promoDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  notifCard: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
  },
  notifTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  notifTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  notifSub: {
    fontSize: 12,
  },
});
