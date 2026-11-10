import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../../theme';
import { properties } from '../../data';

const { width, height } = Dimensions.get('window');

export default function MapScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      {/* Map Backdrop (Sketch: map@4x 1) */}
      <View style={styles.mapWrap}>
        <Image
          source={require('../../assets/images/map_city.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Top Floating Search Strip */}
        <View style={[styles.floatingSearch, { backgroundColor: theme.surface }]}>
          <Ionicons name="search" size={20} color={theme.textSecondary} />
          <Text style={[styles.searchAddress, { color: theme.heading }]}>Sun Building, 1235 Brooklyn St</Text>
        </View>

        {/* Map Pins */}
        <TouchableOpacity
          style={[styles.pin, { top: height * 0.28, left: width * 0.24, backgroundColor: theme.primary }]}
          onPress={() => setSelectedProperty(properties[0])}
        >
          <Text style={styles.pinText}>$12.5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pin, { top: height * 0.36, right: width * 0.2, backgroundColor: theme.secondary }]}
          onPress={() => setSelectedProperty(properties[1])}
        >
          <Text style={styles.pinText}>$15.0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pin, { top: height * 0.48, left: width * 0.45, backgroundColor: theme.heading }]}
          onPress={() => setSelectedProperty(properties[2])}
        >
          <Text style={styles.pinText}>$11.0</Text>
        </TouchableOpacity>

        {/* Bottom Floating Card Preview (Sketch: Sun Building, Show route) */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push('/details')}
          style={[styles.bottomCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <Image source={selectedProperty.image} style={styles.cardThumb} resizeMode="cover" />

          <View style={styles.cardRight}>
            <View style={styles.cardTop}>
              <Text style={[styles.previewTitle, { color: theme.heading }]}>{selectedProperty.title}</Text>
              <Text style={[styles.previewPrice, { color: theme.primary }]}>
                ${selectedProperty.hourlyPrice}/hr
              </Text>
            </View>

            <Text style={[styles.previewLoc, { color: theme.textSecondary }]} numberOfLines={1}>
              {selectedProperty.address}
            </Text>

            <TouchableOpacity
              style={[styles.routeBtn, { backgroundColor: theme.primarySoft }]}
              onPress={() => router.push('/details')}
            >
              <Ionicons name="navigate" size={14} color={theme.primary} />
              <Text style={[styles.routeBtnText, { color: theme.primary }]}>Show route & details</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapWrap: {
    flex: 1,
    position: 'relative',
  },
  mapImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  floatingSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 16,
    height: 52,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    gap: 10,
  },
  searchAddress: {
    fontSize: 14,
    fontWeight: '700',
  },
  pin: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  pinText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
  },
  bottomCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 22,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  cardThumb: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  cardRight: {
    flex: 1,
    marginLeft: 14,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  previewTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  previewPrice: {
    fontSize: 14,
    fontWeight: '900',
  },
  previewLoc: {
    fontSize: 11,
    marginTop: 2,
  },
  routeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  routeBtnText: {
    fontSize: 11,
    fontWeight: '800',
  },
});
