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
import Button from '../../components/Button';
import { currentBooking, properties } from '../../data';

export default function BookingsTabScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [tab, setTab] = useState('Ongoing'); // Ongoing vs Past

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header
        title="Your booking"
        subtitle="Active & Past Stays"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Tab Switcher (Sketch: Ongoing vs Past) */}
        <View style={[styles.tabBar, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <TouchableOpacity
            style={[styles.tabBtn, tab === 'Ongoing' && { backgroundColor: theme.primary }]}
            onPress={() => setTab('Ongoing')}
          >
            <Text style={[styles.tabText, { color: tab === 'Ongoing' ? '#FFFFFF' : theme.textSecondary }]}>
              Ongoing (1)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, tab === 'Past' && { backgroundColor: theme.primary }]}
            onPress={() => setTab('Past')}
          >
            <Text style={[styles.tabText, { color: tab === 'Past' ? '#FFFFFF' : theme.textSecondary }]}>
              Past (3)
            </Text>
          </TouchableOpacity>
        </View>

        {tab === 'Ongoing' ? (
          <View style={styles.bookingCard}>
            <Image source={currentBooking.property.image} style={styles.bookingHero} resizeMode="cover" />

            <View style={[styles.cardBody, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <View style={styles.bookingTopRow}>
                <View>
                  <Text style={[styles.bookingTitle, { color: theme.heading }]}>
                    {currentBooking.property.title}
                  </Text>
                  <Text style={[styles.bookingTime, { color: theme.primary }]}>
                    {currentBooking.dateTime}
                  </Text>
                </View>
                <View style={[styles.statusPill, { backgroundColor: theme.primarySoft }]}>
                  <Text style={[styles.statusText, { color: theme.primary }]}>Active</Text>
                </View>
              </View>

              <Text style={[styles.bookingAddr, { color: theme.textSecondary }]}>
                {currentBooking.property.address}
              </Text>

              <View style={[styles.divider, { backgroundColor: theme.borderLight }]} />

              <View style={styles.actionsRow}>
                <Button
                  title="Message Host"
                  onPress={() => router.push('/chat')}
                  variant="outline"
                  size="small"
                  style={{ flex: 1, marginRight: 8 }}
                  icon={<Ionicons name="chatbubble-outline" size={16} color={theme.primary} />}
                />

                <Button
                  title="See Detail"
                  onPress={() => router.push('/details')}
                  variant="primary"
                  size="small"
                  style={{ flex: 1, marginLeft: 8 }}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.pastList}>
            {properties.slice(1, 3).map((p, idx) => (
              <View
                key={p.id}
                style={[styles.pastCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
              >
                <Image source={p.image} style={styles.pastImg} resizeMode="cover" />
                <View style={styles.pastInfo}>
                  <Text style={[styles.pastTitle, { color: theme.heading }]}>{p.title}</Text>
                  <Text style={[styles.pastDate, { color: theme.textSecondary }]}>Completed on 14 Nov</Text>
                  <View style={styles.pastBtnRow}>
                    <TouchableOpacity
                      style={[styles.reviewBtn, { backgroundColor: theme.primarySoft }]}
                      onPress={() => router.push('/review')}
                    >
                      <Ionicons name="star" size={14} color={theme.primary} />
                      <Text style={[styles.reviewBtnText, { color: theme.primary }]}>Write Review</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
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
  bookingCard: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  bookingHero: {
    width: '100%',
    height: 180,
  },
  cardBody: {
    padding: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderWidth: 1,
    borderTopWidth: 0,
  },
  bookingTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  bookingTime: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '800',
  },
  bookingAddr: {
    fontSize: 12,
    marginTop: 6,
  },
  divider: {
    height: 1,
    marginVertical: 14,
  },
  actionsRow: {
    flexDirection: 'row',
  },
  pastList: {
    gap: 14,
  },
  pastCard: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
  },
  pastImg: {
    width: 80,
    height: 80,
    borderRadius: 14,
  },
  pastInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  pastTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  pastDate: {
    fontSize: 12,
    marginTop: 2,
  },
  pastBtnRow: {
    marginTop: 8,
  },
  reviewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  reviewBtnText: {
    fontSize: 11,
    fontWeight: '800',
  },
});
