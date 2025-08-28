# Internationalization (i18n) System

This project includes a comprehensive internationalization system that supports multiple languages with RTL (Right-to-Left) layout support.

## Features

- 🌍 **Multi-language Support**: Currently supports English and Arabic
- 🔄 **Language Switching**: Easy language switching with flag indicators
- 📱 **RTL Support**: Automatic RTL layout for Arabic language
- 💾 **Persistent Storage**: Language preference saved in localStorage
- 🎨 **Responsive Design**: Mobile-friendly language switcher
- 🚀 **Performance**: Efficient translation lookup system

## Supported Languages

| Language | Code | Flag | RTL Support |
|----------|------|------|-------------|
| English  | `en` | 🇺🇸 | No (LTR)    |
| Arabic   | `ar` | 🇸🇦 | Yes (RTL)   |

## Quick Start

### 1. Using the Language Hook

```jsx
import { useLanguage } from '../context/LanguageContext';

const MyComponent = () => {
  const { t, currentLanguage, changeLanguage, isRTL } = useLanguage();

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <h1>{t('titles.whoWeAre')}</h1>
      <p>{t('texts.missionText')}</p>
      
      <button onClick={() => changeLanguage('ar')}>
        Switch to Arabic
      </button>
    </div>
  );
};
```

### 2. Translation Keys Structure

The translation system uses dot notation for nested keys:

```json
{
  "titles": {
    "whoWeAre": "Who We Are",
    "theTechnology": "The Technology"
  },
  "texts": {
    "missionText": "We exist to make counterfeiting obsolete..."
  },
  "common": {
    "submit": "Submit",
    "cancel": "Cancel"
  }
}
```

Access translations using:
- `t('titles.whoWeAre')` → "Who We Are"
- `t('texts.missionText')` → "We exist to make counterfeiting obsolete..."
- `t('common.submit')` → "Submit"

### 3. Language Switching

```jsx
const { changeLanguage, availableLanguages } = useLanguage();

// Switch to specific language
changeLanguage('ar'); // Arabic
changeLanguage('en'); // English

// Display available languages
availableLanguages.map(lang => (
  <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
    {lang.flag} {lang.name}
  </button>
))
```

### 4. RTL Layout Support

The system automatically handles RTL layout for Arabic:

```jsx
const { isRTL } = useLanguage();

return (
  <div className={`my-component ${isRTL ? 'rtl' : 'ltr'}`}>
    {/* Content automatically adjusts for RTL */}
  </div>
);
```

## Adding New Languages

### 1. Create Translation File

Create a new file in `src/locales/[language-code]/translation.json`:

```json
{
  "titles": {
    "whoWeAre": "Qui sommes-nous",
    "theTechnology": "La Technologie"
  }
}
```

### 2. Update Language Context

Add the new language to `src/context/LanguageContext.js`:

```jsx
import frTranslations from '../locales/fr/translation.json';

// In the availableLanguages array:
availableLanguages: [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' } // New language
]

// In the changeLanguage function:
const newTranslations = language === 'ar' ? arTranslations : 
                       language === 'fr' ? frTranslations : 
                       enTranslations;
```

## Translation Keys Reference

### Core Sections

- **titles**: Main page titles and navigation labels
- **texts**: Content text and descriptions
- **buttons**: Button labels and CTAs
- **labels**: Form labels and input placeholders
- **navigation**: Menu items and navigation text
- **common**: Reusable UI elements (submit, cancel, etc.)

### How It Works Section

- **howItWorks**: Main section content
- **steps**: Individual step information (step1, step2, step3)

### Contact Section

- **contact**: Contact form labels and messages
- **footer**: Footer content and social media text

## Best Practices

### 1. Use Descriptive Keys

```json
// Good
"titles.whoWeAre": "Who We Are"

// Avoid
"title1": "Who We Are"
```

### 2. Group Related Content

```json
{
  "steps": {
    "step1": {
      "title": "Step 1: Discovery",
      "description": "Description text",
      "boldText": "Important highlight"
    }
  }
}
```

### 3. Handle Missing Translations

The system automatically falls back to the key name if a translation is missing:

```jsx
// If 'titles.newSection' doesn't exist, it will display "titles.newSection"
{t('titles.newSection')}
```

### 4. RTL Considerations

- Use CSS classes for RTL-specific styling
- Test layout in both directions
- Consider text length differences between languages

## CSS RTL Support

### Basic RTL Classes

```css
.my-component.rtl {
  direction: rtl;
  text-align: right;
}

.my-component.ltr {
  direction: ltr;
  text-align: left;
}
```

### RTL-Specific Styling

```css
/* Left border for LTR */
.ltr .section-title {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
}

/* Right border for RTL */
.rtl .section-title {
  border-right: 4px solid #007bff;
  padding-right: 1rem;
}
```

## Troubleshooting

### Common Issues

1. **Translation not found**: Check the key path and ensure it exists in both language files
2. **RTL not working**: Verify the `isRTL` value and CSS classes
3. **Language not switching**: Check localStorage permissions and the changeLanguage function

### Debug Mode

Enable debug logging by adding to the `t` function:

```jsx
const t = (key) => {
  // ... existing code ...
  
  if (!value) {
    console.warn(`Translation key not found: ${key}`);
  }
  
  return value || key;
};
```

## Performance Tips

1. **Memoize translations** for frequently used keys
2. **Lazy load** language files for better initial load time
3. **Use translation keys** instead of hardcoded strings
4. **Cache language preference** to avoid unnecessary re-renders

## Contributing

When adding new translations:

1. Update both English and Arabic files
2. Test RTL layout for Arabic
3. Ensure all keys are consistent between languages
4. Add new keys to this documentation
5. Test language switching functionality

## Support

For questions or issues with the internationalization system, please refer to:

- Translation files: `src/locales/`
- Language context: `src/context/LanguageContext.js`
- Demo component: `src/components/TranslationDemo/`
- This documentation file
