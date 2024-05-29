# Web3Fruity.com App

## Overview

Web3Fruity.com is an application that provides users with the latest web3 earning opportunities, such as airdrops, reward for tasks, play to earn games, giveaways and more. Moreso, it provides cryptocurrency news, insights, and information about rewards for completing various tasks. The app leverages modern web technologies and blockchain integration to deliver up-to-date information and interactive features.

## Features

- **Airdrops**: Discover and participate in exciting airdrops.
- **Play to Earn Games**: Find the most rewarding and fun play to earn games.
- **Cryptocurrency News**: Stay updated with the latest news and insights from the world of cryptocurrency.
- **Rewards for Tasks**: Discover and participate in various tasks to earn cryptocurrency rewards.
- **Detailed Token Information**: Get detailed information about various tokens including their prices and market cap.

## Technology Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **API**: RESTful API with endpoints for rewards, games, airdrops, and news

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/web3fruity.git
   cd web3fruity/frontend
   cd web3fruity/backend
    ````

2. **Install dependencies on both frontend and backend directories**:
    ```bash
    npm install
    ```

3. **Run frontend application**:
    ```bash
    npm run dev
    ```

4. **Run backend application**:
    ```bash
    nom run dev
    ```

4. **Open frontend in browser**:
    ```bash
    localhost:3000
    ```


# API Documentation

## **Base URL**:
    ```bash
    localhost:1225
    ```

## Endpoints

### Get Airdrops

- **Endpoint**: `/airdrops`
- **Method**: `GET`
- **Description**: Fetches the airdrops.
- **Response**:
  ```json
  [
    {
      "fields": {
        "logo": "URL_TO_LOGO",
        "title": "AIRDROP_TITLE",
        "description": "TOKEN_PROJECT_DESCRIPTION",
        "rewardPool": "TOKEN_AIRDROP_POOL",
        " rewardPercentFromSupply": "TOKEN_AIRDROP_TO_SUPPLY_PERCENTAGE",
        "endDate": "AIRDROP_END_DATE",
        "platformType": "AIRDROP_PROJECT_TYPE",
        "chain": "AIRDROP_BLOCKCHAIN",
        "website": "AIRDROP_OFFICIAL_WEBSITE",
        "guide": "AIRDROP_GUIDE"
      }
    },
  ]
   ```

### Get Play to earn games

- **Endpoint**: `/games`
- **Method**: `GET`
- **Description**: Fetches the games.
- **Response**:
  ```json
  [
    {
      "fields": {
        "image": "URL_TO_IMAGE",
        "title": "GAME_TITLE",
        "description": "GANE_DESCRIPTION",
        "token": "GAME_TOKEN",
        "platform": "GAME_DEVICE_PLATFORM",
        "genre": "GANE_GENRE",
        "free2play": "IS_FREE",
        "developer": "GAME_DEVELOPER",
        "website": "GAME_OFFICIAL_WEBSITE",
        "trailer": "GAME_TRAILER",
        "guide": "GAME_GUIDE"
      }
    },
  ]
  ```

### Get Reward for Tasks

- **Endpoint**: `/reward-tasks`
- **Method**: `GET`
- **Description**: Fetches the reward tasks.
- **Response**:
  ```json
  [
    {
    "logo": "URL_TO_LOGO",
    "title": "TASK_TITLE",
    "activities": "TASK_DESCRIPTION",
    "token": "TOKEN_NAME",
    "free": "IS_FREE",
    "active": "IS_ACTIVE",
    "website": "URL_TO_TASK"
  },
  ]
    ```

### Get otken farms

- **Endpoint**: `/farm-tokens`
- **Method**: `GET`
- **Description**: Fetches the tokens that can be farmed.
- **Response**:
  ```json
  [
    {
      "fields": {
        "logo": "URL_TO_LOGO",
        "title": "TOKEN_FARM_TITLE",
        "blockchain": "AIRDROP_BLOCKCHAIN",
        "status": "IS_ACTIVE",
        "guide": "AIRDROP_GUIDE"
      }
    },
  ]
    ```



### Get Cryptocurrency News

- **Endpoint**: `/crypto-news`
- **Method**: `GET`
- **Description**: Fetches the latest cryptocurrency news.
- **Response**:
  ```json
  [
    {
      "fields": {
        "newsThumbnailLink": "URL_TO_THUMBNAIL",
        "cryptoNewsTitle": "NEWS_TITLE",
        "cryptoNewsDescription": "NEWS_DESCRIPTION",
        "websiteUrl": "URL_TO_NEWS_ARTICLE",
        "timestamp": "TIMESTAMP",
        "cryptoNewsSiteName": "NEWS_SITE_NAME"
      }
    },
  ]
  ```

## Example Usage

### **Fetching airdrops**:
    ```bash
    curl -X GET http://localhost:1225/airdrops
    ```

### **Fetching games**:
    ```bash
    curl -X GET http://localhost:1225/games
    ```

## License

### This project is licensed under the MIT License