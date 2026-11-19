# 💍 Royal Wedding Countdown & Guest Book Website
### **Abhirami S L & Ajeesh R**

An exquisite, mobile-responsive wedding invitation and countdown website created with **Pink & Gold White** royal theme, authentic card opening animation, serene traditional Kerala flute & tanpura melody, and persistent SQLite database for the guest book.

---

## ✨ Features Included

1. **💌 Royal Wedding Card Opening Animation**:
   - 3D interactive royal pink & gold envelope with metallic gold filigree borders.
   - Embossed 3D wax seal stamped with couple's monogram **"A & A"**.
   - Tap-to-open interaction with wax seal breaking, top flap folding open, golden sparkles & rose petal celebration burst (`canvas-confetti`).
   - "Replay Card Opening" button to relive the opening experience anytime.

2. **🌸 Divine Invocation & Reference Details**:
   - Sacred emblem & prayer of **Sree Narayana Gurudev** (*"ദൈവമേ! കാത്തുകൊൾകങ്ങു കൈവിടാതിങ്ങു ഞങ്ങളെ"*).
   - Inviting parents: **K. Sanjayan & Leena. R** (Kunnuvila Veedu, Chathanpara, Thottakkadu P.O, Attingal).
   - Groom's parents: **Mr. Reghunathan. S & Mrs. Ushakumari. S** (Thrayambakam, Parakkulam, Thottakkadu P.O).
   - Auspicious Date: **Sunday, 24 January 2027** (10 Makaram 1202).
   - Muhurtham: **Between 10.05 am & 10.50 am**.
   - Compliments: **Hayzen, Adithi, Adithya & Relatives**.

3. **⏳ Real-Time Live Countdown Timer**:
   - Live Days, Hours, Minutes, and Seconds countdown to 10:05 AM IST on 24 Jan 2027.
   - **Add to Google Calendar** direct link (pre-filled with dates, location, and reminder).
   - **Download .ics Calendar File** for Apple Calendar & Outlook on iPhone/Mac/Windows.

4. **📅 Ceremony & Events Timeline**:
   - **09:30 AM**: Morning Welcome & Reception (Sivagiri Sarada Mutt, Varkala)
   - **10:05 AM – 10:50 AM**: Sacred Wedding Muhurtham (താലികെട്ട്)
   - **11:30 AM Onwards**: Traditional Kerala Wedding Sadhya (Feast)
   - **04:30 PM Onwards**: Grand Evening Reception (Harizon Plaza, Alamcode)

5. **📍 Interactive Venues & Navigation**:
   - **Sivagiri Sarada Mutt, Varkala** & **Harizon Plaza, Alamcode**.
   - Direct Google Maps navigation links.
   - Direct turn-by-turn directions buttons.
   - QR codes for friends to scan on their phones.

6. **📖 Guest Book & Wishes Wall (Persistent SQLite Database)**:
   - Full-stack database integration (`wedding_wishes.db`) so comments and blessings are **never lost**.
   - Guest form with Name, Relationship tag (Bride's Friend, Groom's Friend, Family, etc.), Blessing Emoji stamps, and message.
   - Instant confetti celebration on submitting a wish.
   - Heart ❤️ like button with live database like counter.
   - Category filtering (All, Friends, Family, Most Loved).

7. **🎶 Traditional Wedding Music & Equalizer**:
   - Procedural Web Audio API authentic flute & drone melody in raga Mohanam / Kalyani.
   - Zero external audio download dependencies; loads instantly and works offline.
   - Floating audio wave button at top right for easy play/pause/mute.

8. **📱 Mobile-First Responsive Design**:
   - Floating quick navigation bar at the bottom for smartphones.
   - Direct WhatsApp sharing button with pre-written greeting and invitation link.
   - One-tap "Call Bride's Family" button (+91 90487 28978).
   - High-resolution viewer modal for the original printed invitation card.

---

## 🚀 How to Run Locally

### Option 1: Double Click
Simply double-click the `start.bat` file in this folder. It will launch the backend server and automatically open `http://localhost:5000` in your browser.

### Option 2: Terminal / Command Line
```bash
# Start the production server (Frontend + Backend on Port 5000)
npm start

# Or develop with hot-reloading:
npm run dev
```

Visit: `http://localhost:5000`

---

## 🌐 How to Share with Friends Over the Internet

### 1. Instant sharing with LocalTunnel or Ngrok (Free, 30 seconds):
Run in terminal:
```bash
npx localtunnel --port 5000
```
This gives you a public HTTPS URL (e.g. `https://abhirami-wedding.loca.lt`) you can send immediately to friends on WhatsApp!

### 2. Deploy to Free Cloud (Render / Railway / Fly.io):
1. Push this folder to a GitHub repository.
2. In [Render.com](https://render.com) or [Railway.app](https://railway.app), create a new Web Service from your repo.
3. Build command: `npm install && npm run build`
4. Start command: `npm start`
5. Your wedding website is live with permanent SQLite database storage!
