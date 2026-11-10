import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../../theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { properties } from '../../data';

export default function ExploreScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [filterModal, setFilterModal] = useState(false);
  const [priceType, setPriceType] = useState('Hourly'); // Hourly vs Monthly
  const [bedsCount, setBedsCount] = useState(1);
  const [bathsCount, setBathsCount] = useState(1);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header
        title="Find Accommodation"
        subtitle="Rooms, Lofts & Villas"
        showBack={false}
        rightAction={
          <TouchableOpacity
            style={[styles.filterTrigger, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={() => setFilterModal(true)}
          >
            <Ionicons name="filter" size={18} color={theme.primary} />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Listings Catalog (Sketch artboard Product) */}
        {properties.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            onPress={() => router.push('/details')}
            style={[styles.listingCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
          >
            <Image source={item.image} style={styles.cardImage} resizeMode="cover" />

            <View style={styles.cardInfo}>
              <View style={styles.topInfo}>
                <Text style={[styles.cardType, { color: theme.secondary }]}>{item.type.toUpperCase()}</Text>
                <Text style={[styles.cardPrice, { color: theme.primary }]}>
                  ${item.hourlyPrice}/1 hour
                </Text>
              </View>

              <Text style={[styles.cardTitle, { color: theme.heading }]}>{item.title}</Text>
              <Text style={[styles.cardAddress, { color: theme.textSecondary }]} numberOfLines={1}>
                {item.address}
              </Text>

              <View style={[styles.divider, { backgroundColor: theme.borderLight }]} />

              <View style={styles.specsRow}>
                <View style={styles.specBox}>
                  <Ionicons name="bed-outline" size={16} color={theme.textSecondary} />
                  <Text style={[styles.specValue, { color: theme.heading }]}>{item.beds} Bed</Text>
                </View>

                <View style={styles.specBox}>
                  <Ionicons name="water-outline" size={16} color={theme.textSecondary} />
                  <Text style={[styles.specValue, { color: theme.heading }]}>{item.baths} Bath</Text>
                </View>

                <View style={styles.specBox}>
                  <Ionicons name="star" size={14} color="#FFD166" />
                  <Text style={[styles.specValue, { color: theme.heading }]}>{item.rating} ({item.reviewsCount})</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filter Modal (Sketch artboard Searching Filter) */}
      <Modal visible={filterModal} animationType="slide" transparent>
        <View style={styles.modalBackdrop}>
          <View style={[styles.filterSheet, { backgroundColor: theme.surface }]}>
            <View style={styles.sheetHeader}>
              <Text style={[styles.sheetTitle, { color: theme.heading }]}>Searching Filter</Text>
              <TouchableOpacity onPress={() => setFilterModal(false)}>
                <Ionicons name="close" size={24} color={theme.heading} />
              </TouchableOpacity>
            </View>

            {/* Sort Price By (Sketch: Hourly vs Monthly) */}
            <Text style={[styles.filterLabel, { color: theme.textSecondary }]}>SORT PRICE BY</Text>
            <View style={[styles.toggleRow, { backgroundColor: theme.inputBg }]}>
              {['Hourly', 'Monthly'].map(mode => (
                <TouchableOpacity
                  key={mode}
                  style={[styles.toggleBtn, priceType === mode && { backgroundColor: theme.primary }]}
                  onPress={() => setPriceType(mode)}
                >
                  <Text style={[styles.toggleText, { color: priceType === mode ? '#FFFFFF' : theme.textSecondary }]}>
                    {mode}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Price Range */}
            <Text style={[styles.filterLabel, { color: theme.textSecondary, marginTop: 18 }]}>
              PRICE RANGE: $10 - $100 / HR
            </Text>
            <View style={[styles.rangeBar, { backgroundColor: theme.inputBg }]}>
              <View style={[styles.rangeSelected, { backgroundColor: theme.primary }]} />
            </View>

            {/* Bed & Bath Steppers */}
            <View style={styles.stepperRow}>
              <View style={styles.stepperBlock}>
                <Text style={[styles.stepperTitle, { color: theme.heading }]}>Bedrooms</Text>
                <View style={styles.counterGroup}>
                  <TouchableOpacity
                    onPress={() => setBedsCount(Math.max(1, bedsCount - 1))}
                    style={[styles.cntBtn, { backgroundColor: theme.inputBg }]}
                  >
                    <Ionicons name="remove" size={16} color={theme.heading} />
                  </TouchableOpacity>
                  <Text style={[styles.cntVal, { color: theme.heading }]}>{bedsCount}</Text>
                  <TouchableOpacity
                    onPress={() => setBedsCount(bedsCount + 1)}
                    style={[styles.cntBtn, { backgroundColor: theme.inputBg }]}
                  >
                    <Ionicons name="add" size={16} color={theme.heading} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.stepperBlock}>
                <Text style={[styles.stepperTitle, { color: theme.heading }]}>Bathrooms</Text>
                <View style={styles.counterGroup}>
                  <TouchableOpacity
                    onPress={() => setBathsCount(Math.max(1, bathsCount - 1))}
                    style={[styles.cntBtn, { backgroundColor: theme.inputBg }]}
                  >
                    <Ionicons name="remove" size={16} color={theme.heading} />
                  </TouchableOpacity>
                  <Text style={[styles.cntVal, { color: theme.heading }]}>{bathsCount}</Text>
                  <TouchableOpacity
                    onPress={() => setBathsCount(bathsCount + 1)}
                    style={[styles.cntBtn, { backgroundColor: theme.inputBg }]}
                  >
                    <Ionicons name="add" size={16} color={theme.heading} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Button
              title="Apply Filters"
              onPress={() => setFilterModal(false)}
              variant="primary"
              style={{ marginTop: 24 }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterTrigger: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 8,
  },
  listingCard: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    marginBottom: 18,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardInfo: {
    padding: 16,
  },
  topInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '900',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 4,
  },
  cardAddress: {
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    height: 1,
    marginVertical: 12,
  },
  specsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  specValue: {
    fontSize: 13,
    fontWeight: '700',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  filterSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  filterLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  toggleRow: {
    flexDirection: 'row',
    borderRadius: 14,
    padding: 4,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  toggleText: {
    fontSize: 13,
    fontWeight: '700',
  },
  rangeBar: {
    height: 8,
    borderRadius: 4,
    marginVertical: 8,
    overflow: 'hidden',
  },
  rangeSelected: {
    width: '60%',
    height: '100%',
    borderRadius: 4,
  },
  stepperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  stepperBlock: {
    width: '46%',
  },
  stepperTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  counterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cntBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cntVal: {
    fontSize: 16,
    fontWeight: '800',
  },
});
