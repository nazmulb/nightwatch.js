exports.command = function () {
    this
        .windowMaximize()
        .url(this.launchUrl)
        .waitForElementVisible('body', 1000)
        .setValue('[name="username"]', 'buyer.admin')
        .setValue('[name="password"]', 'buyer.admin')
        .verify.value( '[name="btnSumbit"]', 'Log in' )
        .click('[name="btnSumbit"]')
        .pause(1000)
        .assert.containsText('.logo', 'Field Nation')
        .pause(1000);

    return this;
};