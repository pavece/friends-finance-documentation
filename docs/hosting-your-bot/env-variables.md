---
sidebar_position: 4
---

# Environment variables

This bot uses a series of environment variables in order to specify configuration details.

## Bot initialization

```text
#Get these the bot token you saved before
BOT_TOKEN=

#The app ID you saved before
BOT_ID=

#The mongo db connection URL you saved before
MONGO_CON_URL=
```

## Bot status configuration

```text
#Not much to say, the bot avatar
BOT_PROFILE_PICTURE=

#The message that the bot shows For example: Playing: "message"
BOT_STATUS_MESSAGE=
```

## Bot messages config

```text
#The bot will sow this after any money amount
CURRENCY="€"

#Users won't be able to create debts with an amount above this value
MAX_DEBT_AMOUNT=40
```

## Automatic notifications config

```text
#The ID from the channel where you want to send automated notifications related to debtors and creditors
NOTICE_CHANNEL_ID=""

#When you want to send those notifications (Cron expression, you can create your own here if you don't know exactly how it works https://crontab.guru/)
NOTICE_FREQUENCY="00 22 * * *"

#Timezone (IANA Timezone)
NOTICE_TIMEZONE="Europe/Madrid"
```
