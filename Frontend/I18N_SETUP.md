# Angular i18n Setup - English & Bangla

## ✅ Configuration Complete

### Files Created:
1. **`src/locale/messages.xlf`** - Source English translations (auto-generated)
2. **`src/locale/messages.bn.xlf`** - Bangla translations

### Configuration Files Updated:
1. **`angular.json`** - Added i18n configuration with locales
2. **`hero.component.html`** - Added i18n attributes to text elements

## 📝 Translation Format

### XLIFF Structure:
```xml
<trans-unit id="hero.title" datatype="html">
  <source>For the Ummah, With the Sunnah</source>
  <target>উম্মাহর স্বার্থে, সুন্নাহর সাথে</target>
  <context-group purpose="location">
    <context context-type="sourcefile">src/app/components/hero/hero.component.html</context>
    <context context-type="linenumber">18,19</context>
  </context-group>
</trans-unit>
```

## 🚀 How to Use

### Build for Specific Locale:
```bash
# Build for English (default)
ng build --localize=false

# Build for Bangla
ng build --configuration production --localize bn

# Build for all locales
ng build --localize
```

### Serve with Specific Locale:
```bash
# Serve English version
ng serve

# Serve Bangla version
ng serve --configuration development --localize bn
```

## 📖 Adding New Translations

### Step 1: Add i18n attribute to HTML
```html
<h1 i18n="@@unique.id">English Text</h1>
```

### Step 2: Extract messages
```bash
ng extract-i18n --output-path src/locale
```

### Step 3: Add translation to messages.bn.xlf
```xml
<trans-unit id="unique.id" datatype="html">
  <source>English Text</source>
  <target>বাংলা টেক্সট</target>
</trans-unit>
```

## 🎯 Current Translations

### Hero Component:
- `hero.title` - For the Ummah, With the Sunnah → উম্মাহর স্বার্থে, সুন্নাহর সাথে
- `hero.subtitle` - Organization description
- `hero.donate` - Donate → দান করুন
- `hero.projects` - Our Projects → আমাদের প্রকল্পসমূহ
- `hero.programs` - Ongoing Programs → চলমান প্রোগ্রাম

## 🔧 Runtime Language Switching

For runtime language switching (without rebuilding), you would need to:
1. Use the custom TranslationService approach (already created)
2. OR deploy separate builds for each language and route users accordingly

## 📦 Build Output

When you build with `--localize`, Angular creates separate folders:
- `dist/Frontend/en/` - English version
- `dist/Frontend/bn/` - Bangla version

You can then serve these from different URLs or use server-side routing.
