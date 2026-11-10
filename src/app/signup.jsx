import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';

export default function SignUpScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [fullName, setFullName] = useState('Henry Quill');
  const [phone, setPhone] = useState('+84 4573 2374');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    router.push('/verify');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
      <Header title="" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.brandBox}>
          <Text style={[styles.brandName, { color: theme.primary }]}>Rentee</Text>
          <Text style={[styles.welcomeSubtitle, { color: theme.textSecondary }]}>
            Create your account to start booking
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={[styles.inputLabel, { color: theme.heading }]}>Your full name</Text>
          <View style={[styles.inputWrap, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <Ionicons name="person-outline" size={20} color={theme.textSecondary} style={{ marginRight: 10 }} />
            <TextInput
              style={[styles.input, { color: theme.heading }]}
              value={fullName}
              onChangeText={setFullName}
              placeholder="E.g. John Smith"
              placeholderTextColor={theme.textMuted}
            />
          </View>

          <Text style={[styles.inputLabel, { color: theme.heading, marginTop: 18 }]}>Phone number</Text>
          <View style={[styles.inputWrap, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <Ionicons name="call-outline" size={20} color={theme.textSecondary} style={{ marginRight: 10 }} />
            <TextInput
              style={[styles.input, { color: theme.heading }]}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholder="Your phone number here"
              placeholderTextColor={theme.textMuted}
            />
          </View>

          <Text style={[styles.inputLabel, { color: theme.heading, marginTop: 18 }]}>Password</Text>
          <View style={[styles.inputWrap, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <Ionicons name="lock-closed-outline" size={20} color={theme.textSecondary} style={{ marginRight: 10 }} />
            <TextInput
              style={[styles.input, { color: theme.heading }]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Minimum 8 characters"
              placeholderTextColor={theme.textMuted}
            />
          </View>

          <Button
            title="Sign up"
            onPress={handleNext}
            variant="primary"
            size="large"
            style={{ marginTop: 28 }}
          />

          <TouchableOpacity onPress={() => router.push('/login')} style={styles.switchAuth}>
            <Text style={[styles.switchText, { color: theme.textSecondary }]}>
              Already have an account? <Text style={[styles.switchHighlight, { color: theme.primary }]}>Sign in</Text>
            </Text>
          </TouchableOpacity>
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
    paddingBottom: 40,
  },
  brandBox: {
    marginTop: 20,
    marginBottom: 32,
  },
  brandName: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  welcomeSubtitle: {
    fontSize: 15,
    marginTop: 6,
  },
  form: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  switchAuth: {
    alignItems: 'center',
    marginTop: 28,
  },
  switchText: {
    fontSize: 14,
  },
  switchHighlight: {
    fontWeight: '800',
  },
});
