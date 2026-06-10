# Anjini Nandina — Portfolio

A fully modular React + Vite + Tailwind CSS portfolio.
Every section is its own file. Just edit the data files and you're done.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── main.jsx                        # App entry point
├── App.jsx                         # Assembles all sections
├── index.css                       # Tailwind directives + global styles
│
├── context/
│   └── ThemeContext.jsx             # Dark/light theme provider
│
├── hooks/
│   ├── useTheme.js                  # OS-aware dark mode + localStorage
│   └── useInView.js                 # Scroll-triggered visibility
│
├── data/                           ← EDIT THESE to update content
│   ├── profile.js                   # Name, bio, email, links
│   ├── projects.js                  # Project cards
│   ├── skills.js                    # Technical + soft skills
│   ├── experience.js                # Internships / work history
│   ├── certifications.js            # Certifications
│   └── config.js                    # DISPLAY_LIMIT, NAV_LINKS
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx               # Fixed top nav + mobile menu
│   │   └── Footer.jsx               # Footer with links
│   │
│   ├── sections/                   ← One file per section
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   │
│   └── ui/                         ← Reusable primitives
│       ├── Badge.jsx                # Status badge with pulse dot
│       ├── Button.jsx               # primary / outline / ghost
│       ├── Card.jsx                 # Card wrapper with hover lift
│       ├── FadeIn.jsx               # Scroll-triggered animation wrapper
│       ├── SectionHeading.jsx       # Label + title + gradient line
│       ├── SkillBar.jsx             # Animated progress bar
│       ├── Tag.jsx                  # Pill tag (tech, labels)
│       └── ThemeToggle.jsx          # Sun/moon button
```

---

## ✏️ How to Customise

### Update personal info
Edit **`src/data/profile.js`** — name, bio, email, LinkedIn, GitHub, university.

### Add a project
Open **`src/data/projects.js`** and append a new object:
```js
{
  id:      6,
  title:   'My New Project',
  company: 'Company Name',
  desc:    'Short description of what you built.',
  tags:    ['React', 'Tailwind'],
  accent:  '#f59e0b',   // any hex colour
}
```
The "+X more" card appears automatically when count > `DISPLAY_LIMIT`.

### Add a skill
Open **`src/data/skills.js`** and add to `technicalSkills`:
```js
{ name: 'React', level: 75, icon: '⚛️' }
```

### Change display limit (5+ logic)
Edit `DISPLAY_LIMIT` in **`src/data/config.js`**.

### Add your photo
In **`src/components/sections/Hero.jsx`**, find the comment block
`── PHOTO AREA ──` and replace the placeholder `<div>` with:
```jsx
<img
  src="/your-photo.jpg"
  alt="Anjini Nandina"
  className="w-[clamp(220px,32vw,300px)] h-[clamp(220px,32vw,300px)]
             rounded-full object-cover border-4 border-indigo-500
             shadow-[0_20px_60px_rgba(79,70,229,0.25)]"
/>
```
Put your photo file in the **`public/`** folder.

### Change accent colour
The primary accent is indigo-600 (`#4f46e5`). To change it globally,
update the `accent` colour in **`tailwind.config.js`** and replace the
hex values in the gradient utilities in `src/index.css`.

---

## 🌗 Dark / Light Mode

- **Automatic** — follows your OS/phone display setting on first load.
- **Manual** — click the ☀️ / 🌙 button in the navbar; preference is saved to `localStorage`.
- **How it works** — Tailwind's `darkMode: 'class'` strategy. The `useTheme` hook
  adds/removes the `dark` class on `<html>`.

---

## 🧩 Reusable UI Components

Import any primitive anywhere in your app:

| Component | Usage |
|-----------|-------|
| `<Badge color="#10b981">Open</Badge>` | Status pill with pulse dot |
| `<Button href="#" variant="primary">` | primary / outline / ghost |
| `<Card className="p-6">` | White card with hover lift |
| `<FadeIn delay={100} direction="up">` | Scroll-in animation wrapper |
| `<SectionHeading label="Sub" title="Main">` | Section title |
| `<SkillBar name="JS" level={85} icon="⚡" index={0} visible={v}>` | Progress bar |
| `<Tag text="React" color="#0ea5e9">` | Tech pill tag |
| `<ThemeToggle />` | Dark/light toggle button |
