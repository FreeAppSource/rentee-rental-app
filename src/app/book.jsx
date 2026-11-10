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
import { useTheme } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';
import { properties } from '../data';

export default function BookScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const property = properties[0];

  const [hours, setHours] = useState(4);
  const [completed, setCompleted] = useState(false);
  const subtotal = property.hourlyPrice * hours;
  const serviceFee = 4.5;
  const total = subtotal + serviceFee;

  if (completed) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
        <View style={styles.completeContent}>
          <View style={[styles.successCircle, { backgroundColor: theme.primary }]}>
            <Ionicons name="checkmark" size={48} color="#FFFFFF" />
          </View>

          <Text style={[styles.completeTitle, { color: theme.heading }]}>
            Your booking has been completed!
          </Text>
          <Text style={[styles.completeSub, { color: theme.textSecondary }]}>
            We will make your room ready at 6:00 am on 12/12/2021.
          </Text>

          <View style={[styles.bookingCodeCard, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <Text style={[styles.codeLabel, { color: theme.textSecondary }]}>BOOKING CONFIRMATION CODE</Text>
            <Text style={[styles.codeVal, { color: theme.primary }]}>NVC35S</Text>
          </View>

          <Button
            title="See Booking Detail"
            onPress={() => router.replace('/(tabs)/bookings')}
            variant="primary"
            size="large"
            style={{ width: '100%', marginBottom: 12 }}
          />

          <Button
            title="Back to Home"
            onPress={() => router.replace('/(tabs)')}
            variant="outline"
            size="large"
            style={{ width: '100%' }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header title="Complete your booking" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Room Header Strip */}
        <View style={[styles.roomStrip, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Image source={property.image} style={styles.roomThumb} resizeMode="cover" />
          <View style={styles.roomTexts}>
            <Text style={[styles.stripTitle, { color: theme.heading }]}>{property.title}</Text>
            <Text style={[styles.stripPrice, { color: theme.primary }]}>${property.hourlyPrice}/1 hour</Text>
            <Text style={[styles.stripLoc, { color: theme.textSecondary }]}>{property.location}</Text>
          </View>
        </View>

        {/* Duration Selector */}
        <Text style={[styles.sectionHeading, { color: theme.textSecondary }]}>RENTAL DURATION</Text>
        <View style={[styles.stepperCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Text style={[styles.stepperLabel, { color: theme.heading }]}>Hours needed</Text>
          <View style={styles.stepperControls}>
            <TouchableOpacity
              onPress={() => setHours(Math.max(1, hours - 1))}
              style={[styles.stepperBtn, { backgroundColor: theme.inputBg }]}
            >
              <Ionicons name="remove" size={18} color={theme.heading} />
            </TouchableOpacity>
            <Text style={[styles.hoursNum, { color: theme.heading }]}>{hours} hrs</Text>
            <TouchableOpacity
              onPress={() => setHours(hours + 1)}
              style={[styles.stepperBtn, { backgroundColor: theme.inputBg }]}
            >
              <Ionicons name="add" size={18} color={theme.heading} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Price Breakdown */}
        <Text style={[styles.sectionHeading, { color: theme.textSecondary }]}>PRICE BREAKDOWN</Text>
        <View style={[styles.summaryCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.summaryRow}>
            <Text style={[styles.sumLabel, { color: theme.textSecondary }]}>
              ${property.hourlyPrice} × {hours} hours
            </Text>
            <Text style={[styles.sumVal, { color: theme.heading }]}>${subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={[styles.sumLabel, { color: theme.textSecondary }]}>Service fee</Text>
            <Text style={[styles.sumVal, { color: theme.heading }]}>${serviceFee.toFixed(2)}</Text>
          </View>

          <View style={[styles.divider, { backgroundColor: theme.borderLight }]} />

          <View style={styles.summaryRow}>
            <Text style={[styles.totalTitle, { color: theme.heading }]}>Total</Text>
            <Text style={[styles.totalAmount, { color: theme.primary }]}>${total.toFixed(2)}</Text>
          </View>
        </View>

        <Button
          title={`Confirm & Pay $${total.toFixed(2)}`}
          onPress={() => setCompleted(true)}
          variant="primary"
          size="large"
          style={{ marginTop: 24 }}
        />
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
  roomStrip: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
    marginBottom: 20,
  },
  roomThumb: {
    width: 80,
    height: 80,
    borderRadius: 14,
  },
  roomTexts: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  stripTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  stripPrice: {
    fontSize: 14,
    fontWeight: '900',
    marginTop: 2,
  },
  stripLoc: {
    fontSize: 11,
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  stepperCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 18,
  },
  stepperLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
  stepperControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stepperBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hoursNum: {
    fontSize: 16,
    fontWeight: '800',
  },
  summaryCard: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  sumLabel: {
    fontSize: 13,
  },
  sumVal: {
    fontSize: 14,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    marginVertical: 12,
  },
  totalTitle: {
    fontSize: 17,
    fontWeight: '900',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: '900',
  },
  completeContent: {
    flex: 1,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  completeTitle: {
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
  },
  completeSub: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  bookingCodeCard: {
    marginVertical: 28,
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    width: '100%',
  },
  codeLabel: {
    fontSize: 11,
    fontWeight: '800',
  },
  codeVal: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 4,
  },
});
