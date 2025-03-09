# India Cricket Pulse

A Chrome extension that displays live cricket scores for matches involving Team India, built using free APIs available online.

## Background

I used to keep a separate tab open to check live cricket scores, and it worked pretty well. However, I wanted a more convenient solution that integrates directly into my browser. So, I decided to create my own Chrome extension using freely available APIs to fetch real-time cricket data, specifically tailored to show India matches.

## Features

- Displays live scores for cricket matches involving India
- Shows "No live matches for Team India" when India isn't playing
- Modern UI with a card-based design and gradient background
- Handles cases where a team has "yet to bat" with empty score fields
- Refresh button to manually update scores
- Built with the free Cricket Live Line API from RapidAPI

## Demo
https://github.com/user-attachments/assets/4881bb3d-b3fe-41db-b237-900229458fa0

## Installation

1. Clone or download this repository
2. Sign up for a RapidAPI account and get an API key for the [Cricket Live Line API](https://rapidapi.com/cricketapilive/api/cricket-live-line1)
3. Open `popup.js` and replace `'YOUR_API_KEY_HERE'` with your RapidAPI key
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode" in the top right
6. Click "Load unpacked" and select the project folder
7. The extension will appear in your Chrome toolbar

## Files

- `manifest.json`: Extension configuration
- `popup.html`: HTML structure and styles for the popup
- `popup.js`: JavaScript logic for fetching and displaying scores
- `icon16.png`, `icon48.png`, `icon128.png`: Extension icons (add your own)

## Usage

- Click the extension icon in your Chrome toolbar to open the popup
- See the current score if India is playing, or a message if no match is live
- Click "Refresh Score" to update the display manually

## API

This extension uses the [Cricket Live Line API](https://rapidapi.com/cricketapilive/api/cricket-live-line1) from RapidAPI. The free tier provides sufficient access for personal use, but check the rate limits for your needs.

## Future Enhancements

- Auto-refresh scores every minute
- Add team flags or logos
- Display match status (live, completed, etc.)
- Show additional details like overs or run rate
