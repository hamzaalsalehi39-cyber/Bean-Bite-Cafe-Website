# Bean & Bite Café - University Web Design Project

## التشغيل بدون Internet

هذا الإصدار مجهز للعمل Offline أثناء العرض في الجامعة.

### المتطلبات المحلية
- Bootstrap 5.3.x: `css/bootstrap.rtl.min.css` + `js/bootstrap.bundle.min.js`
- jQuery: `js/jquery.min.js`
- Font Awesome: `css/vendor/fontawesome-local.css` + `webfonts/`
- WOWSlider local integration: `css/vendor/wowslider.css` + `js/vendor/wowslider.js`
- Toast Notification: `css/vendor/toastr-local.css` + `js/vendor/toastr-local.js`

لا توجد روابط CDN داخل صفحات الموقع.

## تشغيل المشروع

يفضل تشغيله من Local Server لأن Ajax يحتاج HTTP محليًا:

1. افتح مجلد المشروع في VS Code.
2. شغل `index.html` باستخدام Live Server.
3. افتح العنوان المحلي مثل `http://127.0.0.1:5500/`.
4. لا تحتاج إلى Internet.

يمكن أيضًا تشغيله بخادم Python محلي:

```bash
python -m http.server 8000
```

ثم افتح:

```text
http://127.0.0.1:8000/
```

## متطلبات المشروع المطبقة

- HTML5 Semantic Layout: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`
- 7 صفحات: Home, Menu, Offers, About, Contact, Login, Register
- Font Awesome محلي Offline
- Login / Register + Validation
- WOWSlider في الصفحة الرئيسية
- CSS Grid وFlexbox
- Responsive Design + Media Queries
- Notification Toast محلي
- 2 Ajax Modals: عرض اليوم + معلومات القائمة
- Bootstrap
- jQuery
- صور محلية
- مجلدات `css`, `js`, `images`, `videos`, `html`

## ملاحظة عن WOWSlider

تم وضع ملفات WOWSlider داخل المشروع وعدم الاعتماد على CDN. يمكن استبدال/تحديث ملف `js/vendor/wowslider.js` بملف التصدير الرسمي الناتج من WOWSlider عند استخدام برنامج WOWSlider نفسه، مع الإبقاء على نفس مكان التكامل أو تعديل المسار فقط.

## GitHub

بعد اختبار المشروع محليًا بدون Internet، يمكن رفع المجلد كاملًا إلى GitHub عند توفر Internet.


## Offline Demo Notes

- The project is designed to run locally without Internet access.
- Bootstrap, jQuery, Font Awesome, the local Toast implementation, and the local WOWSlider-style integration are stored inside the project.
- A price table has been added to `menu.html` to satisfy the HTML table requirement.
- The current Toast and WOWSlider files are local/offline implementations; they are **not** being represented here as the official Toastr/WOWSlider distribution files.
\n\n## Offline Library Status\n- Toast notifications: Toastify JS 1.12.0 is bundled locally (`js/vendor/toastify.js` + `css/vendor/toastify.css`), so no Internet/CDN is required.\n- Slider: the existing project slider files remain bundled locally under `wowslider/`. They are configured for offline operation. The project does not claim these files are an official WOWSlider export. For a strict official-WOWSlider requirement, replace the slider folder with the official Publish-to-Folder output from WOWSlider.\n

## Official WOWSlider Integration
- WOWSlider 9.0 Free generated/published files are included locally under `wowslider/engine1` and `wowslider/data1`.
- The slider on `index.html` uses the official WOWSlider-generated structure and scripts (`wowslider.js` + `script.js`).
- The external Google Fonts import from the generated stylesheet was removed so the university demo remains offline.
- The project still uses its existing local jQuery 3.7.1; the official WOWSlider package's `engine1/jquery.js` is retained as part of the published files but is not loaded a second time to avoid conflicting jQuery versions.
