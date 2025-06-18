# Chatbot Next.js

Ini adalah proyek chatbot berbasis [Next.js](https://nextjs.org) yang menggunakan API OpenAI GPT untuk menjawab pertanyaan pengguna secara real-time.

## Fitur

- Chat interaktif antara user dan AI (OpenAI GPT)
- UI modern dengan Tailwind CSS
- Dukungan loading state ("Typing...") saat AI memproses jawaban
- Avatar berbeda untuk user dan AI

## Instalasi

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/AgusRakhmatHaryanto/chatbot.git
   cd chatbot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Konfigurasi API Key OpenAI:**
   - Salin file `.env.local.example` menjadi `.env.local`
   - Isi `OPENAI_API_KEY` dengan API key dari [OpenAI](https://platform.openai.com/account/api-keys)

   ```
   OPENAI_API_KEY=sk-...
   ```

## Menjalankan Aplikasi

```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Struktur Proyek

- `src/app/page.js` — Halaman utama chatbot
- `src/app/api/chat/route.js` — API route untuk komunikasi dengan OpenAI
- `public/` — Asset gambar (avatar, ikon, dll)
- `src/app/globals.css` — Styling global dengan Tailwind CSS

## Deployment

Aplikasi ini dapat dideploy dengan mudah ke [Vercel](https://vercel.com/) atau platform hosting Next.js lainnya.

## Kontribusi

Kontribusi sangat diterima! Silakan buat issue atau pull request di repositori ini.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).