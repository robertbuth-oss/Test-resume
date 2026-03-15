# Public Assets Directory

This folder contains all static assets that will be served directly by the web server.

## 📂 Structure

```
/public/
  /assets/          ← All images and media files go here
    README.md       ← This file
  favicon.ico       ← (Optional) Your site favicon
  robots.txt        ← (Optional) SEO crawler instructions
```

## 📦 After Figma Make Export

When you export your code from Figma Make, this folder should be populated with:

1. **All portfolio images** (~50+ files)
2. **Profile photos**
3. **Company logos**
4. **Project screenshots**

## ✅ Expected Files

After proper export, you should see files like:

```
/public/assets/
  robert-profile.png
  montblanc-logo.png
  montblanc-campaign-1.png
  yello-strom-logo.png
  union-screenshot-1.png
  gambuu-design-1.png
  ... (and many more)
```

## 🚨 Important

If this folder is **empty** after export from Figma Make:

1. The automatic asset conversion might have failed
2. Run: `npm run check-ready` to diagnose
3. See: `FIGMA_ASSET_EXPORT_GUIDE.md` for manual export steps

## 🔗 Asset URLs

All files in `/public/assets/` are accessible at:

```
/assets/filename.png
```

**Example:**
```tsx
<img src="/assets/robert-profile.png" alt="Robert Buth" />
```

---

**Note:** Do NOT use relative paths like `./assets/` or `../assets/`.  
Always use absolute paths: `/assets/`
