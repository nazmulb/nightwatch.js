exports.command = function () {
    this
        .windowMaximize()
        .url(this.launchUrl)
        .waitForElementVisible('body', 3000)
        .setValue('#email', 'buyer.admin')
        .setValue('#password', 'buyer.admin')
        .pause(1000)
        .click('#Login > div > div > div > div > form > div:nth-child(5) > div > div.Median__row__item__3UTco.Median__row__item--omega__2CyQy > div > span > button > span')
        .pause(3000)
        //.assert.containsText('.logo', 'Field Nation')
        .pause(1000);

    return this;
};