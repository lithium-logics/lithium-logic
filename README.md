# Lithium Logic: portfolio website

Plain HTML, CSS and JavaScript. No build step, no installs.

## ফাইল কোনটা কী
- `data.js`: **এখানেই আপনি সব এডিট করবেন**: প্রজেক্ট, স্কিল, সার্ভিস, টাইমলাইন, কন্টাক্ট লিংক।
- `images/`: প্রজেক্টের স্ক্রিনশট এখানে রাখুন।
- `index.html`: পেজের কাঠামো। `style.css`: ডিজাইন ও রং। `script.js`: ফিচারের কোড। এগুলো সাধারণত ছুঁতে হবে না।

## নতুন প্রজেক্ট যোগ করা
1. ছবিগুলো `images/` ফোল্ডারে রাখুন (যেমন `li-01-home.png`, `li-01-login.png`)।
2. `data.js` খুলে একটা প্রজেক্ট ব্লক কপি করে নিচে পেস্ট করুন, মাঝে কমা রাখুন।
3. `images: ["images/li-01-home.png", "images/li-01-login.png"]` লিখুন। প্রথম ছবি কার্ডের কভার হবে।
4. `type` হবে `app`, `website`, `extension` বা `tool`। ফিল্টার বাটন নিজে থেকে তৈরি হয়।

## GitHub + Vercel দিয়ে প্রকাশ
1. GitHub এ নতুন repository খুলুন (যেমন `lithium-logic`)।
2. **Add file → Upload files** দিয়ে এই ফোল্ডারের সব ফাইল আর `images` ফোল্ডারসহ আপলোড করে Commit করুন। (`index.html` যেন repo-র একদম উপরের স্তরে থাকে।)
3. vercel.com এ GitHub দিয়ে লগইন করে **Add New → Project** চাপুন, repository বেছে **Import** করুন।
4. Framework Preset: **Other**। Build Command ও Output Directory ফাঁকা রেখে **Deploy** চাপুন।
5. এরপর থেকে `data.js` বা ছবি GitHub এ বদলালেই Vercel নিজে সাইট আপডেট করে দেবে।

## লোকালি দেখা
`index.html` ডাবল ক্লিক করলেই ব্রাউজারে খুলবে।
