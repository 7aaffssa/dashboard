import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations } from '../translations';

type Language = 'en' | 'fr' | 'ar';

interface ThemeState {
  isDarkMode: boolean;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      isDarkMode: false,
      language: 'en',
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setLanguage: (language) => set({ language }),
      t: (key: string, params?: Record<string, any>) => {
        const state = get();
        let translation = translations[state.language]?.[key] || key;
        
        if (params) {
          Object.entries(params).forEach(([key, value]) => {
            translation = translation.replace(`{${key}}`, String(value));
          });
        }
        
        return translation;
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);