---
sidebar_position: 1
---

# Hosting a mongo DB instance for the bot

The bot needs a mongo DB database in order to work. You can host a mongo DB instance for free in the mongo db atlas platform.

## Mongo DB Atlas

[Atlas](https://www.mongodb.com/atlas) is a developer data platform that allows us to get free mongo DB instances with up to 512 Mb of data storage. Witch is surprisingly good.

## Steps

* Create a new project and build a database
* Wait for atlas to create the database
* Add a custom username and password (Remember them)
* Add the the bot server IP to the IP allowlist (Network access tab). If you don't know the server IP you can use allow any IP (0.0.0.0/0).
* Click "Connect" -> "Connect your application" --> Copy the ur and add the password to it.

Thats all, you have a ready to use mongo db instance.

:::danger Take note

If you use 0.0.0.0/0 in the IP allowlist you will be letting any person with the database user and password access the database. If you want more security use the server's specific IP
:::
