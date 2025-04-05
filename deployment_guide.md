# Akhil Kalia Professional Website - Deployment Guide

This document provides instructions on how to deploy your professional website to various hosting platforms.

## Website Contents

The `website.zip` file contains a complete, ready-to-deploy professional website with the following structure:

```
website/
├── css/
│   ├── styles.css
│   └── dark-mode.css
├── js/
│   └── main.js
├── images/
└── index.html
```

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub account if you don't have one: https://github.com/signup
2. Create a new repository named `yourusername.github.io` (replace "yourusername" with your GitHub username)
3. Upload the contents of the website folder (not the folder itself) to this repository
4. Your website will be available at `https://yourusername.github.io`

### Option 2: Netlify (Free tier available)

1. Create a Netlify account: https://app.netlify.com/signup
2. Go to the Netlify dashboard and click "Add new site" > "Deploy manually"
3. Drag and drop the website folder to the upload area
4. Your website will be deployed with a random URL (e.g., random-name.netlify.app)
5. You can set up a custom domain if desired

### Option 3: Vercel (Free tier available)

1. Create a Vercel account: https://vercel.com/signup
2. Install the Vercel CLI: `npm i -g vercel`
3. Navigate to your website folder in the terminal
4. Run `vercel` and follow the prompts
5. Your website will be deployed to a Vercel URL

### Option 4: Traditional Web Hosting

1. Sign up for a web hosting service (e.g., Bluehost, HostGator, DreamHost)
2. Access your hosting control panel
3. Use the file manager or FTP to upload the contents of the website folder to the public_html directory
4. Your website will be available at your domain name

## Customization

To customize your website:

1. Edit `index.html` to update content
2. Modify `css/styles.css` to change the styling
3. Adjust `js/main.js` for behavior changes

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Interactive timeline for work experience
- Animated skill bars
- Expandable sections for detailed information
- Print-to-PDF functionality for CV download
- Contact form (requires backend setup for actual submission)

## Need Help?

If you need assistance with deployment or customization, you can:

1. Refer to the documentation of your chosen hosting platform
2. Hire a web developer for specific customizations
3. Use website builder platforms like Wix or Squarespace if you prefer a more managed solution

## Future Updates

To update your website in the future:

1. Make changes to the local files
2. Re-upload the modified files to your hosting platform
3. For GitHub Pages, commit and push the changes to your repository
