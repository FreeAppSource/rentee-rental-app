import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme';
import Button from '../components/Button';
import { onboardingSlides } from '../data';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
      {/* Top Brand Banner */}
      <View style={styles.topHeader}>
        <Text style={[styles.brandLogo, { color: theme.primary }]}>Rentee</Text>
        <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
          <Text style={[styles.skipBtn, { color: theme.textSecondary }]}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Pager FlatList (Sketch: Onboarding 5, 6, 7) */}
      <FlatList
        ref={flatListRef}
        data={onboardingSlides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.imageBox}>
              <Image source={item.image} style={styles.slideImage} resizeMode="contain" />
            </View>

            <View style={styles.textContainer}>
              <Text style={[styles.title, { color: theme.heading }]}>{item.title}</Text>
              <Text style={[styles.desc, { color: theme.textSecondary }]}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      {/* Dots Indicator */}
      <View style={styles.dotsRow}>
        {onboardingSlides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i
                ? [styles.dotActive, { backgroundColor: theme.primary }]
                : [styles.dotInactive, { backgroundColor: theme.border }],
            ]}
          />
        ))}
      </View>

      {/* Bottom Triggers (Sketch Onboarding 7: Sign in & Sign up) */}
      <View style={styles.bottomArea}>
        {currentIndex === onboardingSlides.length - 1 ? (
          <View style={styles.authButtonsRow}>
            <Button
              title="Sign in"
              onPress={() => router.push('/login')}
              variant="outline"
              size="large"
              style={{ flex: 1, marginRight: 8 }}
            />
            <Button
              title="Sign up"
              onPress={() => router.push('/signup')}
              variant="primary"
              size="large"
              style={{ flex: 1, marginLeft: 8 }}
            />
          </View>
        ) : (
          <Button
            title="Next"
            onPress={handleNext}
            variant="primary"
            size="large"
            style={{ width: '100%' }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  brandLogo: {
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  skipBtn: {
    fontSize: 14,
    fontWeight: '700',
    padding: 6,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  imageBox: {
    width: width * 0.82,
    height: height * 0.42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 18,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 24,
  },
  dotInactive: {
    width: 8,
  },
  bottomArea: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  authButtonsRow: {
    flexDirection: 'row',
  },
});
