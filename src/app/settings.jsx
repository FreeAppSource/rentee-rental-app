import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme';
import Header from '../components/Header';

export default function SettingsScreen() {
  const { theme } = useTheme();
  const [bookingAct, setBookingAct] = useState(true);
  const [messages, setMessages] = useState(true);
  const [promotions, setPromotions] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
      <Header title="Setting" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Language (Sketch: Language - English with flag) */}
        <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>LANGUAGE</Text>
        <View style={[styles.card, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
          <View style={styles.langLeft}>
            <Image
              source={require('../assets/images/flag_en.png')}
              style={styles.flagIcon}
              resizeMode="contain"
            />
            <Text style={[styles.langText, { color: theme.heading }]}>English (US)</Text>
          </View>
        </View>

        {/* Notifications (Sketch: Booking activities, Messages, Promotions) */}
        <Text style={[styles.sectionTitle, { color: theme.textSecondary, marginTop: 24 }]}>
          NOTIFICATIONS
        </Text>

        <View style={[styles.card, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
          <View style={styles.switchRow}>
            <Text style={[styles.switchLabel, { color: theme.heading }]}>Booking activities</Text>
            <Switch value={bookingAct} onValueChange={setBookingAct} trackColor={{ false: theme.border, true: theme.primary }} />
          </View>

          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          <View style={styles.switchRow}>
            <Text style={[styles.switchLabel, { color: theme.heading }]}>Messages</Text>
            <Switch value={messages} onValueChange={setMessages} trackColor={{ false: theme.border, true: theme.primary }} />
          </View>

          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          <View style={styles.switchRow}>
            <Text style={[styles.switchLabel, { color: theme.heading }]}>Promotions</Text>
            <Switch value={promotions} onValueChange={setPromotions} trackColor={{ false: theme.border, true: theme.primary }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
  },
  langLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  flagIcon: {
    width: 28,
    height: 18,
    borderRadius: 3,
  },
  langText: {
    fontSize: 15,
    fontWeight: '700',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  switchLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
});
