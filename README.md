# ચાલો અંગ્રેજી શીખીએ — Learn English (for Gujarati speakers)

A free, offline-capable English course for Gujarati speakers, built for an adult beginner.
Everything on screen is in Gujarati. English is only ever the thing being learned.

**Open it: https://rosgeller3.github.io/english-for-mom/**

## How it teaches

**Words first, then sentences.** You cannot build a sentence out of words you do not have, so
the course does not open with "What is your name?" as a phrase to parrot.

- **ભાગ 1 — 21 word packs, 310 single words.** Things in the house, kitchen, family, body, clothes,
  places, travel, nature, animals, time, numbers, colours, verbs, adjectives, pronouns, question words.
  One word per card: the word, its pronunciation **written in Gujarati script**, and the meaning.
- **ભાગ 2 — 30 sentence lessons, 320 phrases.** The same vocabulary, now ordered into sentences:
  is/am/are, have/has, can/want, the -ing form, past and future.

Every word carries its pronunciation in Gujarati script, because a learner who cannot yet read the
Latin alphabet otherwise has no way to say the word at all. Silent letters are written as they sound:
Knife is નાઇફ, not કનાઇફ. Hour is અવર. Wheel is વીલ.

## The daily session

The home screen is a 30-minute session, not a lesson. Four steps run one into the next:

| step | minutes | what happens |
|---|---|---|
| પુનરાવર્તન | 5 | revision, weakest words first |
| નવા શબ્દો | 12 | listen, see the pronunciation, say it aloud |
| ઝડપી અભ્યાસ | 6 | see the Gujarati, **say** the English, then reveal |
| કસોટી | 7 | mixed quiz, reading and listening |

Step 3 matters most: recognising a word among four options is far easier than producing it, and
producing it is what speaking actually is.

**Spaced repetition.** Every word has a strength level from 0 to 5. A right answer raises it, a wrong
answer drops it by two, and revision always pulls the weakest and least-recently-seen words first.

## Sharing progress

Progress is saved in the browser. There is no account, no server, and nothing is uploaded.

To show someone else how it is going, open **📈 પ્રગતિ** and tap *મારી પ્રગતિની લિંક બનાવો*. That
produces a short link (about 370 characters) that carries the progress inside it. Whoever opens the
link sees streaks, units finished, quiz averages, the last 14 days, and — most usefully — the
specific words still coming back wrong.

## Audio

Uses the browser's built-in speech synthesis, preferring an Indian English voice (Rishi on macOS).
macOS ships novelty voices (Boing, Zarvox, Bahh); those are filtered out of the picker.

## Running it locally

No build step. Any static server works:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Files

| file | what it is |
|---|---|
| `index.html` | the app |
| `progress.html` | opens a shared progress link |
| `styles.css` | light and dark themes |
| `app.js` | session, drill, quiz, spaced repetition, speech |
| `track.js` | progress encoding and the dashboard |
| `words.js` | ભાગ 1 — the 21 word packs |
| `lessons.js` | ભાગ 2 — the 30 sentence lessons |

To add content, append to `words.js` (`{id, t, tg, tip, w:[{e,p,g}]}`) or `lessons.js`
(`{d, t, tg, tip, w:[{e,p,g,se,sg}]}`). Two rules the quiz depends on: no English word may appear in
two packs, and a listening question must never offer a homophone as an option — Son/Sun, Right/Write,
Sea/See, Where/Wear, Their/There, Hear/Here, Eye/I and Flour/Flower are all in the data, so
`buildQuestions` filters any distractor sharing the answer's pronunciation.

## Licence

MIT for the code. The lesson content is free to use and adapt.
