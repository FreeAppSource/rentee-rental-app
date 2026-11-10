import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';
import { userProfile } from '../data';

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [name, setName] = useState(userProfile.name);
  const [phone, setPhone] = useState(userProfile.phone);
  const [email, setEmail] = useState(userProfile.email);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.surface }]}>
      <Header title="Personal Info" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarSection}>
          <Image source={userProfile.avatar} style={styles.avatar} />
          <TouchableOpacity style={styles.changePhotoBtn}>
            <Text style={[styles.changePhotoText, { color: theme.primary }]}>Change your photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={[styles.label, { color: theme.heading }]}>Your name</Text>
          <View style={[styles.inputBox, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <TextInput style={[styles.input, { color: theme.heading }]} value={name} onChangeText={setName} />
          </View>

          <Text style={[styles.label, { color: theme.heading, marginTop: 18 }]}>Phone number</Text>
          <View style={[styles.inputBox, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <TextInput style={[styles.input, { color: theme.heading }]} value={phone} onChangeText={setPhone} />
          </View>

          <Text style={[styles.label, { color: theme.heading, marginTop: 18 }]}>Email</Text>
          <View style={[styles.inputBox, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
            <TextInput style={[styles.input, { color: theme.heading }]} value={email} onChangeText={setEmail} />
          </View>

          <Button
            title="Save Changes"
            onPress={() => router.back()}
            variant="primary"
            size="large"
            style={{ marginTop: 32 }}
          />
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
  avatarSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#583EF2',
  },
  changePhotoBtn: {
    marginTop: 10,
  },
  changePhotoText: {
    fontSize: 14,
    fontWeight: '800',
  },
  form: {
    marginTop: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  inputBox: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 54,
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    fontWeight: '700',
  },
});
