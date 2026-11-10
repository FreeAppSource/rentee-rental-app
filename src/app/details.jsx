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

export default function PropertyDetailScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const property = properties[0]; // Blue Vibe Room
  const [activeTab, setActiveTab] = useState('Description'); // Description vs Facilities vs Comments

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header
        title={property.title}
        subtitle={property.location}
        showBack={true}
        rightAction={
          <TouchableOpacity onPress={() => router.push('/chat')} style={styles.chatActionBtn}>
            <Ionicons name="chatbubble-outline" size={20} color={theme.primary} />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Main Gallery Banner */}
        <View style={styles.galleryWrap}>
          <Image source={property.image} style={styles.mainImg} resizeMode="cover" />
          <View style={styles.rateTag}>
            <Ionicons name="star" size={14} color="#FFD166" />
            <Text style={styles.rateTagText}>{property.rating}</Text>
          </View>
        </View>

        {/* Room Header Specs */}
        <View style={[styles.infoCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.titleRow}>
            <Text style={[styles.propName, { color: theme.heading }]}>{property.title}</Text>
            <Text style={[styles.priceTag, { color: theme.primary }]}>
              ${property.hourlyPrice}/1 hour
            </Text>
          </View>

          <View style={styles.addressRow}>
            <Ionicons name="location-outline" size={16} color={theme.textSecondary} />
            <Text style={[styles.propAddress, { color: theme.textSecondary }]}>{property.address}</Text>
          </View>

          {/* Quick Specs (1 Bed, 1 Bath, 1.2km) */}
          <View style={styles.specsRow}>
            <View style={[styles.specChip, { backgroundColor: theme.inputBg }]}>
              <Ionicons name="bed-outline" size={16} color={theme.primary} />
              <Text style={[styles.specChipText, { color: theme.heading }]}>{property.beds} Bedroom</Text>
            </View>

            <View style={[styles.specChip, { backgroundColor: theme.inputBg }]}>
              <Ionicons name="water-outline" size={16} color={theme.primary} />
              <Text style={[styles.specChipText, { color: theme.heading }]}>{property.baths} Bathroom</Text>
            </View>

            <View style={[styles.specChip, { backgroundColor: theme.inputBg }]}>
              <Ionicons name="navigate-outline" size={16} color={theme.primary} />
              <Text style={[styles.specChipText, { color: theme.heading }]}>{property.distance}</Text>
            </View>
          </View>
        </View>

        {/* Tabs: Description / Facilities / Comments (Sketch artboards 13 & 30) */}
        <View style={[styles.tabsRow, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          {['Description', 'Facilities', 'Comments (28)'].map(t => (
            <TouchableOpacity
              key={t}
              style={[styles.tabBtn, activeTab === t && { backgroundColor: theme.primary }]}
              onPress={() => setActiveTab(t)}
            >
              <Text style={[styles.tabText, { color: activeTab === t ? '#FFFFFF' : theme.textSecondary }]}>
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === 'Description' ? (
          <View style={[styles.cardBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Text style={[styles.descBody, { color: theme.text }]}>{property.description}</Text>
          </View>
        ) : activeTab === 'Facilities' ? (
          <View style={[styles.cardBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.facilitiesGrid}>
              {property.facilities.map(f => (
                <View key={f} style={styles.facilityItem}>
                  <Ionicons name="checkmark-circle" size={18} color={theme.primary} />
                  <Text style={[styles.facilityText, { color: theme.heading }]}>{f}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={[styles.cardBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.reviewHeader}>
              <Image source={require('../assets/images/reviewer_hilary.png')} style={styles.revAvatar} />
              <View>
                <Text style={[styles.revName, { color: theme.heading }]}>Hilary Vance</Text>
                <Text style={[styles.revDate, { color: theme.textMuted }]}>2 days ago</Text>
              </View>
            </View>
            <Text style={[styles.revText, { color: theme.text }]}>
              The room was spotless and check-in was seamless. Karen was very hospitable!
            </Text>
          </View>
        )}

        {/* Host Info Box */}
        <View style={[styles.hostCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Image source={property.host.avatar} style={styles.hostImg} />
          <View style={styles.hostTexts}>
            <Text style={[styles.hostName, { color: theme.heading }]}>{property.host.name}</Text>
            <Text style={[styles.hostRole, { color: theme.textSecondary }]}>
              {property.host.role} · Response rate {property.host.responseRate}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.msgHostBtn, { backgroundColor: theme.primarySoft }]}
            onPress={() => router.push('/chat')}
          >
            <Ionicons name="chatbubbles" size={16} color={theme.primary} />
          </TouchableOpacity>
        </View>

        {/* Booking CTA */}
        <Button
          title="Book This Room"
          onPress={() => router.push('/book')}
          variant="primary"
          size="large"
          style={{ marginTop: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatActionBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  galleryWrap: {
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    marginVertical: 10,
  },
  mainImg: {
    width: '100%',
    height: 220,
  },
  rateTag: {
    position: 'absolute',
    top: 14,
    right: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  rateTagText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },
  infoCard: {
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propName: {
    fontSize: 20,
    fontWeight: '800',
  },
  priceTag: {
    fontSize: 17,
    fontWeight: '900',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  propAddress: {
    fontSize: 12,
  },
  specsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  specChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  specChipText: {
    fontSize: 12,
    fontWeight: '700',
  },
  tabsRow: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 4,
    borderWidth: 1,
    marginBottom: 14,
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
  cardBox: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    marginBottom: 14,
  },
  descBody: {
    fontSize: 14,
    lineHeight: 22,
  },
  facilitiesGrid: {
    gap: 12,
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  facilityText: {
    fontSize: 14,
    fontWeight: '700',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  revAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  revName: {
    fontSize: 14,
    fontWeight: '800',
  },
  revDate: {
    fontSize: 11,
  },
  revText: {
    fontSize: 13,
    lineHeight: 18,
  },
  hostCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    marginTop: 6,
  },
  hostImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  hostTexts: {
    flex: 1,
    marginLeft: 14,
  },
  hostName: {
    fontSize: 15,
    fontWeight: '800',
  },
  hostRole: {
    fontSize: 12,
    marginTop: 2,
  },
  msgHostBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
