class TelegramDriver {

  async sendRaw(response, ctx) {
    if (!response) {
      return;
    }
    await ctx.reply(response);
  }

}

module.exports = {
  TelegramDriver
};
