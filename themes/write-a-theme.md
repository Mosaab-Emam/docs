# أنشئ ثيماً

لكي تبدأ، ننصحك باستخدام المولد الخاص بنا لإنشاء ثيمك الأول

```bash
$ npm init slidev-theme
```

بعدها يمكنك تعديله كا تريد. يمكنك أيضا الرجوع إلى [الثيمات الرسمية](/themes/gallery) لأخذها كأمثلة.

## الإمكانيات

يمكن للثيم التحكم في النقاط التالية

- التنسيقات العامة (Global)
- تعيين الإعدادات الإفتراضية (الخطوط، الألوان، التطليل، ...الخ)
- توفير نسق خاص (layout) أو التعديل على تلك الموجودة مسبقاً.
- توفير أجزاء (components) مخصصة أو التعديل على تلك الموجودة مسبقاً.
- الزيادة على إعدادات Windi CSS
- إعداد أدوات مثل Monaco و Prism

## القواعد المتفق عليها

يتم نشر الثيمات على الـ `npm registry`، وعليها أن تتبع القواعد التالية

- اسم الحزمة يجب أن يبدأ بـ `slidev-theme-`, على سبيل المثال: `slidev-theme-awesome`
- قم بإضافة `slidev-theme` و `slidev` في خانة `keywords` في ملف `package.json` الخاص بك.

## إعداد البيئة

لإعداد بيئة الإختبار للثيم الخاص بك، يمكنك إنشاء ملف `example.md` مغ قسم التعريف أدناه لتعريف Slidev أنك تريد استخدام المجلد الحالي كثيم.

```md
---
theme: ./
---
```

إختيارياً، يمكنك أيضاً إضافة بعض ال الأوامر لملف `package.json` الخاص بك.

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

لنشر الثيم الخاص بك، قم بتنفيذ الأمر `npm publish` ومبارك عليك. لا توجد عملية بناء (build) أي يمكنك نشر ملفات من نوع `.vue` و `.ts` مباشرة، و Slidev ذكي بما فيه الكفاية للتعامل معها.

مشاركة الثيمات تخضع لنفس القواعد المتبعة في التخصيص محليا، ننصحك بالرجوع لـ [قواعد التسمية](/custom/). 

## الإعدادات الإفتراضية

> متاح منذ الإصدار v0.19

يمكن للثيم توفير [إعدادات افتراضية](/custom/#frontmatter-configures) عبر ملف `package.json`.

```json
// package.json
{
  "slidev": {
    "default": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

سيتم استيراد الخطوط تلقائيا من [خطوط قوقل](https://fonts.google.com/).

لمعرفة المزيد عن [الخطوط](/custom/fonts) و [إعدادات قسم التعريف](/custom/#frontmatter-configures).

## البيانات الوصفية للثيم

### الألوان

بشكل افتراضي, يفترض Slidev دعم الثيمات للوضع المظلم والعادي معاً. إن كنت تريد للثيم الخاص بك الظهور بنسق ألوان معين فعليك تعريف ذلك في ملف `package.json`

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

للوصول للوضع المظلم أثناء إنشائك لتنسيقات الثيم الخاص بك، يمكنك إحتواء التنسيقات المخصصة للوضع المظلم تحت class `dark`:

```css
/* general css here */

html:not(.dark) {
  /* light mode css here */
}

html.dark {
  /* dark mode css here */
}
```

يقوم Slidev بإلغاء وتفعيل class `dark` على وسم `html` لتغيير نسق الألوان.

### تلوين الكود

ألون الأكواد أيضا يتم توفيرها عبر الثيم، وندعم كلاً من [Prism](https://prismjs.com/) و [Shiki](https://github.com/shikijs/shiki). للمزيد من المعلومات يرجى الرجوع لـ [التوثيق الخاص بتلوين الكود](/custom/highlighters).

يمكنك دعم أي منهما أو كليهما. يرجى الرجوع للثيم الافتراضي لرؤية أمثلة على الإعدادات [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts).

تذكر أيضا أن تذكر التلوينات المدعومة في ملف `package.json` الخاص بك.

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "all"
  }
}
```

### إصدار Slidev

إذا كان الثيم يعتمد على إحدى ميزات Slidev المضافة حديثاً فيمكنك تحديد أقل إضدار من Slidev يلزم لتشغيل الثيم الخاص بك بشكل صحيح:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

إن كان لدى المستخدمين إصدار أقل من Slidev فسيتم إظهار خطأ بذلك.
