# Muhammad Ismail Ibrahim — SEO Expert Portfolio

Single-page portfolio website — Dark Premium design, WhatsApp-first contact, fully SEO optimized (meta tags, Open Graph, JSON-LD schema).

## 📁 Files

| File | Kaam |
|------|------|
| `index.html` | Poori website (HTML + CSS + JS sab isi mein) |
| `profile.jpg` | Aap ki photo (hero + about section mein) — **upload zaroori hai** |
| `gsc-proof.jpg` | GSC results screenshot (Results section) — **upload zaroori hai** |
| `digital-ismail.png` | Original photo (backup — GitHub par upload karne ki zaroorat NahI) |
| `money site.jpg` | Original GSC screenshot (backup — upload karne ki zaroorat NahI) |
| `README.md` | Ye file — deploy instructions |

---

## ✏️ Pehle Ye Update Karein (index.html mein)

File ko khol kar sab se neeche `<script>` section mein `CONFIG` object hai — sirf wahan changes karein:

### 1. WhatsApp Number
```js
whatsapp: "923338498005",             // apna number (bina + ke)
whatsappDisplay: "+92 333 8498005",   // footer mein dikhne wala format
```

### 2. Email
```js
email: "ismaelibraheem05@gmail.com",
```

### 3. Location
```js
location: "Pakistan",
```

### 4. Social Links
```js
socials: {
  facebook: "https://facebook.com/apna-page",
  linkedin: "https://linkedin.com/in/apna-profile",
  instagram: "https://instagram.com/apna-id"
}
```

### 5. Projects (20+ sites ke links)
`projects` array mein har site ke liye ek entry:
```js
{ name: "Site Ka Naam", desc: "Short description", type: "tool", link: "https://example.com" }
```
- `type: "tool"` → Tools Site
- `type: "apk"` → APK Site
- `type: "service"` → Service Site (agency, client, local business)
- `type: "info"` → Info Site

Jitni sites hain utni entries add kar dein — site automatic format kar legi.

### 6. Photo Change Karna (Optional)
Photo already wired hai (`profile.jpg`). Nayi photo lagane ke liye bas nayi image ko `profile.jpg` naam se isi folder mein replace kar dein — size 800px width aur 200KB se kam rakhein (fast loading ke liye).

---

## 🚀 GitHub Pages Par Deploy Karna (5 Minute)

### Step 1 — GitHub Account
[Github.com](https://github.com/signup) par account banaen:
- **Email:** ismaelibraheem05@gmail.com
- **Username:** ismaelibraheem05
- **Password:** jo aap ne set kiya hai

Email par verification link aayega — click karein.

### Step 2 — New Repository
1. **New Repository** button dabayen (ya github.com/new kholein)
2. Naam: **`digitalwithismail`** (exactly yehi — permalink isi se banega)
3. **Public** rakhein
4. **Create Repository**

### Step 3 — Files Upload Karein
1. Repository mein **Add file → Upload files** par click karein
2. Ye **4 files** drag-drop karein: `index.html`, `README.md`, `profile.jpg`, `gsc-proof.jpg`
3. **Commit changes** dabayen

### Step 4 — GitHub Pages On Karein
1. Repository mein **Settings** → left side mein **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` → Folder: `/ (root)` → **Save**
4. 1-2 minute wait karein

### Step 5 — Live! 🎉
Site live ho jayegi:
```
https://ismaelibraheem05.github.io/digitalwithismail/
```

---

## 🌐 Custom Domain (Optional)

1. GitHub repo → Settings → Pages → **Custom domain** mein apna domain likhen (e.g. `ismailibrahim.com`)
2. Apne domain registrar mein DNS records set karein:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Ya `CNAME` record → `apna-username.github.io`
3. **Enforce HTTPS** check karein (thodi der baad enable hota hai)

---

## 📱 Testing Checklist

- [ ] WhatsApp button dabane par sahi chat khulti hai
- [ ] Email link sahi email par le jaata hai
- [ ] Mobile par site sahi dikhti hai
- [ ] Saare project links kaam kar rahe hain
- [ ] WhatsApp par khud ko site ka link bhej kar preview check karein (OG tags)

---

© Muhammad Ismail Ibrahim — SEO Expert & Web Designer
