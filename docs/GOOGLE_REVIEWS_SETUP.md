# How to Enable Google Reviews on Your Website

The code to display your reviews is already built into the website! To turn it on, we need a **Google Places API Key**. This key allows your website to "talk" to Google and fetch your latest reviews automatically.

**Note:** You cannot get this key from your Google Business Profile dashboard. You must use the **Google Cloud Console**.

## Step 1: Go to Google Cloud Console
1.  Log in to your Google account (the same one you use for your business).
2.  Go to this URL: **[https://console.cloud.google.com/](https://console.cloud.google.com/)**

## Step 2: Create a Project
1.  If this is your first time, you will see a "Select a project" dropdown in the top left. Click it.
2.  Click **"New Project"** (top right of the popup).
3.  Name it something like "McKeen Law Website".
4.  Click **"Create"**.

## Step 3: Enable the "Places API"
1.  Once your project is created and selected, use the Search bar at the very top of the page.
2.  Type **"Places API (New)"** or just **"Places API"**.
3.  Select **"Places API (New)"** from the Marketplace results.
4.  Click the blue **"Enable"** button.
    *   *Note: Google may ask you to set up a billing account. This is required, but you get $200/month of free credit, which is more than enough for this website.*

## Step 4: Get Your API Key
1.  After enabling the API, go to the **"Credentials"** tab on the left sidebar (or search for "Credentials" in the top bar).
2.  Click **"+ CREATE CREDENTIALS"** at the top.
3.  Select **"API key"**.
4.  A popup will show your new key (it looks like a long string of random letters, e.g., `AIzaSy...`).
5.  **Copy this key.**

## Step 5: Send the Key to Me (or Add it Yourself)
You can simply paste the key in our chat, and I will add it for you.

**OR**

1.  Open the file `.env.local` in your project.
2.  Find the line: `GOOGLE_PLACES_API_KEY=`
3.  Paste your key after the equals sign.
    *   Example: `GOOGLE_PLACES_API_KEY=AIzaSyD...`
4.  Save the file.

Once this is done, refresh your website, and the reviews will appear!
