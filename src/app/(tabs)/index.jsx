import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../../theme';
import Header from '../../components/Header';
import { properties, accommodationKinds, userProfile } from '../../data';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const [selectedKind, setSelectedKind] = useState('Service Room');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      {/* Top Bar with User Avatar & Location (Sketch: Hi Josh, you’re at Ho Chi Minh, Viet Nam) */}
      <View style={styles.topBar}>
        <View style={styles.locationGroup}>
          <Text style={[styles.greeting, { color: theme.textSecondary }]}>Hi Josh, you’re at</Text>
          <View style={styles.cityRow}>
            <Ionicons name="location-sharp" size={16} color={theme.primary} />
            <Text style={[styles.cityName, { color: theme.heading }]}>Ho Chi Minh, Viet Nam</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
          <Image source={userProfile.avatar} style={styles.avatarImg} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search Bar with Filter Trigger (Sketch: Looking for room) */}
        <View style={styles.searchSection}>
          <View style={[styles.searchBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Ionicons name="search" size={20} color={theme.textSecondary} />
            <TextInput
              style={[styles.searchInput, { color: theme.heading }]}
              placeholder="Looking for room, apartment..."
              placeholderTextColor={theme.textMuted}
              onFocus={() => router.push('/(tabs)/explore')}
            />
          </View>

          <TouchableOpacity
            style={[styles.filterBtn, { backgroundColor: theme.primary }]}
            onPress={() => router.push('/(tabs)/explore')}
          >
            <Ionicons name="options-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Categories: Kind of Accommodation (Service Room, Apartment, Studio, Villa) */}
        <Text style={[styles.sectionHeading, { color: theme.heading }]}>KIND OF ACCOMMODATION</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.kindScroll}>
          {accommodationKinds.map(k => {
            const isSelected = selectedKind === k.name;

            return (
              <TouchableOpacity
                key={k.id}
                activeOpacity={0.8}
                onPress={() => setSelectedKind(k.name)}
                style={[
                  styles.kindPill,
                  { backgroundColor: theme.surface, borderColor: isSelected ? theme.primary : theme.border },
                ]}
              >
                <Image source={k.image} style={styles.kindImg} resizeMode="cover" />
                <View style={styles.kindTexts}>
                  <Text style={[styles.kindName, { color: isSelected ? theme.primary : theme.heading }]}>
                    {k.name}
                  </Text>
                  <Text style={[styles.kindCount, { color: theme.textSecondary }]}>{k.count}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Featured Big Card (Sketch: Blue Vibe Room, $12.50/1 hour, District 1) */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionHeading, { color: theme.heading, marginTop: 0 }]}>RECOMMENDED ROOMS</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
            <Text style={[styles.seeAllText, { color: theme.primary }]}>See All</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push('/details')}
          style={[styles.featuredCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <Image source={properties[0].image} style={styles.featuredImg} resizeMode="cover" />

          <View style={styles.priceTag}>
            <Text style={styles.priceTagText}>${properties[0].hourlyPrice}/1 hour</Text>
          </View>

          <View style={styles.cardDetails}>
            <View style={styles.titleRow}>
              <Text style={[styles.roomTitle, { color: theme.heading }]}>{properties[0].title}</Text>
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={14} color="#FFD166" />
                <Text style={[styles.ratingText, { color: theme.heading }]}>{properties[0].rating}</Text>
              </View>
            </View>

            <View style={styles.locationSubRow}>
              <Ionicons name="navigate-outline" size={14} color={theme.textSecondary} />
              <Text style={[styles.locSubText, { color: theme.textSecondary }]}>
                {properties[0].location} · {properties[0].distance}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Nearby Popular List (Sketch Rooms_landscape: District 1, Cozy Studio, Luxury Villa) */}
        <Text style={[styles.sectionHeading, { color: theme.heading }]}>NEARBY YOU</Text>

        <View style={styles.nearbyList}>
          {properties.slice(1).map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => router.push('/details')}
              style={[styles.nearbyCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <Image source={item.image} style={styles.nearbyImg} resizeMode="cover" />

              <View style={styles.nearbyTexts}>
                <Text style={[styles.nearbyCategory, { color: theme.secondary }]}>{item.type}</Text>
                <Text style={[styles.nearbyTitle, { color: theme.heading }]} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={[styles.nearbyPrice, { color: theme.primary }]}>
                  ${item.hourlyPrice}/hr · ${item.monthlyPrice}/mo
                </Text>

                <View style={styles.nearbySpecs}>
                  <Text style={[styles.specItem, { color: theme.textSecondary }]}>{item.beds} Bed</Text>
                  <Text style={[styles.specDot, { color: theme.textMuted }]}>•</Text>
                  <Text style={[styles.specItem, { color: theme.textSecondary }]}>{item.baths} Bath</Text>
                  <Text style={[styles.specDot, { color: theme.textMuted }]}>•</Text>
                  <Text style={[styles.specItem, { color: theme.textSecondary }]}>{item.distance}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  locationGroup: {},
  greeting: {
    fontSize: 12,
    fontWeight: '600',
  },
  cityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    gap: 4,
  },
  cityName: {
    fontSize: 16,
    fontWeight: '800',
  },
  avatarImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#583EF2',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    paddingHorizontal: 16,
    height: 52,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  filterBtn: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginTop: 18,
    marginBottom: 12,
  },
  kindScroll: {
    marginHorizontal: -20,
    paddingLeft: 20,
    marginBottom: 10,
  },
  kindPill: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 18,
    marginRight: 12,
    borderWidth: 1.5,
  },
  kindImg: {
    width: 44,
    height: 44,
    borderRadius: 12,
    marginRight: 10,
  },
  kindTexts: {},
  kindName: {
    fontSize: 14,
    fontWeight: '800',
  },
  kindCount: {
    fontSize: 11,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '800',
  },
  featuredCard: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    position: 'relative',
    marginBottom: 20,
  },
  featuredImg: {
    width: '100%',
    height: 200,
  },
  priceTag: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: '#583EF2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  priceTagText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  cardDetails: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '800',
  },
  locationSubRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  locSubText: {
    fontSize: 12,
  },
  nearbyList: {
    gap: 12,
  },
  nearbyCard: {
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    padding: 10,
  },
  nearbyImg: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },
  nearbyTexts: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  nearbyCategory: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  nearbyTitle: {
    fontSize: 15,
    fontWeight: '800',
    marginTop: 2,
  },
  nearbyPrice: {
    fontSize: 14,
    fontWeight: '800',
    marginTop: 4,
  },
  nearbySpecs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  specItem: {
    fontSize: 11,
    fontWeight: '600',
  },
  specDot: {
    fontSize: 11,
  },
});
