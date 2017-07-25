exports.command = function () {
    this
        .click('a[data-target="settings-dropdown"]')
        .click('div > a[class="fnbutton"]');

    return this;
};