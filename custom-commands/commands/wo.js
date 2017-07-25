var woCommands = {
    woCreate: function() {
        var browser = this.api;

        browser
            .click('#submit-preselect-form')
            .pause(1000)
            .setValue('#title', 'Test WO')
            .pause(500)
            .setValue('div[ng-model="workorder.description"] > div > div[ng-model=html]', "TESTING...")
            .execute('angular.element(document.querySelector(\'ng-model="workorder.description"\')).scope().workorder.description;')
            .execute('scrollTo(0,0)')
            .pause(500);

        this
            .click('@saveWO');
    },
    woPublish: function() {
        // TODO:
    }
};

module.exports = woCommands;