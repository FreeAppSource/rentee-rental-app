import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';

export default function VerifyScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [digits, setDigits] = useState(['1', '8', '4', '9']);

  const handleConfirm = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
      <Header title="Verify" showBack={true} />

      <View style={styles.content}>
        <View>
          <Text style={[styles.mainTitle, { color: theme.heading }]}>Verification Code</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Please enter the verification code sent to your phone number +84 4573 2374.
          </Text>

          {/* 4 Digit Boxes (Sketch: Your code here: 1 8 4 9) */}
          <View style={styles.codeRow}>
            {digits.map((d, i) => (
              <View key={i} style={[styles.codeBox, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
                <Text style={[styles.codeText, { color: theme.primary }]}>{d}</Text>
              </View>
            ))}
          </View>

          <View style={styles.timerRow}>
            <Text style={[styles.timerText, { color: theme.textMuted }]}>Expired after 12s</Text>
            <TouchableOpacity>
              <Text style={[styles.resendBtn, { color: theme.primary }]}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Confirm & Continue"
          onPress={handleConfirm}
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
  mainTitle: {
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 21,
    marginBottom: 28,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  codeBox: {
    width: 64,
    height: 64,
    borderRadius: 18,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeText: {
    fontSize: 26,
    fontWeight: '900',
  },
  timerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  timerText: {
    fontSize: 13,
  },
  resendBtn: {
    fontSize: 14,
    fontWeight: '800',
  },
});
