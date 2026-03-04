# 🚀 Deployment and Development Guide

## 📁 Adding Assets (Images, Icons, etc.)
- All static assets **must** be placed in the `/public` folder.
- **Why?** Next.js automatically copies everything from `/public` to the `/docs` folder when you run `npm run build`.
- **How to use in code:**
  - If you put an image at `/public/car.jpg`, you can use it in your components like this:
    ```tsx
    <img src="/car.jpg" alt="Car" />
    ```
- **Currently Required Images** (referenced in your code but missing):
  - `/public/luxury-car-on-mountain-road.jpg` (used in `hero.tsx`)
  - `/public/toyota-innova-suv-white.jpg` (used in `fleet.tsx`)
  - `/public/maruti-swift-sedan-silver.jpg` (used in `fleet.tsx`)

## 💻 Local Development
To see your changes instantly while coding:
1. Run the development server:
   ```bash
   npm run dev
   ```
2. Open your browser to [http://localhost:3000](http://localhost:3000).

## 🚢 Building and Deploying
1. **Generate the site**:
   ```bash
   npm run build
   ```
   *This command will create/update the `/docs` folder with your latest changes.*
   
2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

3. **GitHub Pages Setup (First time only)**:
   - Go to your repo on GitHub.
   - Go to **Settings > Pages**.
   - Under **Build and deployment**, set the Branch to `main` (or your default branch) and the folder to `/docs`.
   - Click **Save**.

## 🛠 Troubleshooting
- **Missing CNAME**: Ensure your domain name is in `public/CNAME`.
- **Styling Issues**: If styles don't update, run `npm run build` again to regenerate the CSS in the `docs/` folder.
- **Images Not Loading**: Double-check the filename in the `public/` folder (case-sensitive) and ensure it starts with a `/` in your code.
