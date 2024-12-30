import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}

export const ChatWindow = () => {
  const { t } = useThemeStore();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'Agent',
      content: 'Hello! How can I help you today?',
      timestamp: new Date()
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        content: message,
        timestamp: new Date()
      }]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-4 border-b dark:border-gray-700">
        <h3 className="text-lg font-semibold">{t('chat.title')}</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] rounded-lg p-3 ${
              msg.sender === 'You'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700'
            }`}>
              <p className="text-sm font-semibold mb-1">{msg.sender}</p>
              <p>{msg.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t dark:border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('chat.placeholder')}
            className="flex-1 px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};