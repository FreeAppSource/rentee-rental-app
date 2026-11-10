import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';

export default function ReviewScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('Great place! Everything was clean and comfortable.');

  const handleSubmit = () => {
    Alert.alert('Review Submitted! ⭐', 'Thank you for reviewing your stay with Rentee.', [
      { text: 'Done', onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
      <Header title="Review" showBack={true} />

      <View style={styles.content}>
        <View>
          <Text style={[styles.title, { color: theme.heading }]}>Rate Your Experience</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            How was your stay at Blue Vibe Room?
          </Text>

          {/* Star selector */}
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map(s => (
              <TouchableOpacity key={s} onPress={() => setRating(s)}>
                <Ionicons
                  name={s <= rating ? 'star' : 'star-outline'}
                  size={36}
                  color={s <= rating ? '#FFD166' : theme.textMuted}
                />
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.label, { color: theme.heading }]}>Your review</Text>
          <TextInput
            style={[styles.textArea, { backgroundColor: theme.inputBg, borderColor: theme.border, color: theme.heading }]}
            value={review}
            onChangeText={setReview}
            multiline
            numberOfLines={4}
            placeholder="Your review here..."
            placeholderTextColor={theme.textMuted}
          />

          <TouchableOpacity style={[styles.uploadBox, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <Ionicons name="camera-outline" size={24} color={theme.primary} />
            <Text style={[styles.uploadText, { color: theme.primary }]}>Upload photos (up to 3)</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Submit Review"
          onPress={handleSubmit}
          variant="primary"
          size="large"
          style={{ width: '100%', marginBottom: 16 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 24,
    paddingTop: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 20,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  textArea: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    height: 120,
    textAlignVertical: 'top',
    fontSize: 14,
  },
  uploadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: 18,
    marginTop: 16,
  },
  uploadText: {
    fontSize: 13,
    fontWeight: '700',
  },
});
