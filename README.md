# Steps to run
- in root folder run `yarn` (if yarn is not installed run: `npm i -g yarn`) to install the dependencies
- using BotFather of telegram create 2 new bots
- create .env file same as .env.example
- copy the token in .env against TELEGRAM_TOKEN_1, TELEGRAM_TOKEN_2 keys
- run `node boot.js` OR run `nodemon boot.js` (if you want to use nodemon)
- got to each bot in telegram and interact with them, you'll receive `hello from instance 1` from first bot and `hello from instance 2` from second bot.