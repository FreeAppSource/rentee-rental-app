import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme';
import Header from '../components/Header';
import { faqs } from '../data';

export default function SupportScreen() {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(0);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
      <Header title="Support" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Quick Contact Buttons (Sketch: Call & Chat) */}
        <View style={styles.contactRow}>
          <TouchableOpacity
            style={[styles.contactCard, { backgroundColor: theme.primarySoft }]}
            onPress={() => Alert.alert('Call Support', 'Dialing Rentee Hotline: +1 800 736 833')}
          >
            <Ionicons name="call" size={24} color={theme.primary} />
            <Text style={[styles.contactTitle, { color: theme.primary }]}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.contactCard, { backgroundColor: theme.secondarySoft }]}
            onPress={() => Alert.alert('Live Chat', 'Support Agent connecting in 30 seconds...')}
          >
            <Ionicons name="chatbubbles" size={24} color={theme.secondary} />
            <Text style={[styles.contactTitle, { color: theme.secondary }]}>Chat</Text>
          </TouchableOpacity>
        </View>

        {/* FAQs */}
        <Text style={[styles.sectionTitle, { color: theme.textSecondary, marginTop: 24 }]}>
          FREQUENTLY ASKED QUESTIONS
        </Text>

        <View style={styles.faqList}>
          {faqs.map((f, i) => {
            const isExp = expanded === i;

            return (
              <TouchableOpacity
                key={f.q}
                style={[styles.faqCard, { backgroundColor: theme.inputBg, borderColor: theme.border }]}
                onPress={() => setExpanded(isExp ? -1 : i)}
              >
                <View style={styles.faqHeader}>
                  <Text style={[styles.faqQ, { color: theme.heading }]}>{f.q}</Text>
                  <Ionicons name={isExp ? 'chevron-up' : 'chevron-down'} size={18} color={theme.textMuted} />
                </View>
                {isExp && <Text style={[styles.faqA, { color: theme.textSecondary }]}>{f.a}</Text>}
              </TouchableOpacity>
            );
          })}
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
    paddingBottom: 40,
  },
  contactRow: {
    flexDirection: 'row',
    gap: 14,
  },
  contactCard: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 8,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 10,
    marginLeft: 4,
  },
  faqList: {
    gap: 12,
  },
  faqCard: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQ: {
    fontSize: 14,
    fontWeight: '800',
    flex: 1,
    marginRight: 10,
  },
  faqA: {
    fontSize: 13,
    marginTop: 8,
    lineHeight: 18,
  },
});
