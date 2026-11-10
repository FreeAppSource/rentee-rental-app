import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme';
import Header from '../components/Header';
import { chatMessages } from '../data';

export default function ChatScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), sender: 'me', text: input.trim(), time: 'Just now' },
    ]);
    setInput('');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header
        title="Karen Smith"
        subtitle="Superhost · Online"
        showBack={true}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {messages.map(msg => {
            const isMe = msg.sender === 'me';

            return (
              <View
                key={msg.id}
                style={[
                  styles.msgRow,
                  isMe ? styles.msgRowMe : styles.msgRowOther,
                ]}
              >
                <View
                  style={[
                    styles.msgBubble,
                    isMe
                      ? [styles.bubbleMe, { backgroundColor: theme.primary }]
                      : [styles.bubbleOther, { backgroundColor: theme.surface, borderColor: theme.border }],
                  ]}
                >
                  <Text style={[styles.msgText, { color: isMe ? '#FFFFFF' : theme.heading }]}>
                    {msg.text}
                  </Text>
                  <Text style={[styles.msgTime, { color: isMe ? 'rgba(255,255,255,0.7)' : theme.textMuted }]}>
                    {msg.time}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={[styles.inputBar, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <TextInput
            style={[styles.input, { color: theme.heading }]}
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            placeholderTextColor={theme.textMuted}
          />
          <TouchableOpacity onPress={handleSend} style={[styles.sendBtn, { backgroundColor: theme.primary }]}>
            <Ionicons name="send" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  msgRow: {
    marginVertical: 6,
    flexDirection: 'row',
  },
  msgRowMe: {
    justifyContent: 'flex-end',
  },
  msgRowOther: {
    justifyContent: 'flex-start',
  },
  msgBubble: {
    maxWidth: '78%',
    borderRadius: 18,
    padding: 14,
  },
  bubbleMe: {
    borderBottomRightRadius: 4,
  },
  bubbleOther: {
    borderBottomLeftRadius: 4,
    borderWidth: 1,
  },
  msgText: {
    fontSize: 14,
    lineHeight: 20,
  },
  msgTime: {
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 14,
    paddingHorizontal: 12,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
