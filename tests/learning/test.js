module.exports = {
  '@tags': ['wolc'],

  'before': function (browser){
    //do nothing.
  },

  'FN LogIn Test' : function (browser) {
    browser
        .windowMaximize()
        .url(browser.launchUrl)
        .waitForElementVisible('body', 1000)
        .setValue('[name="username"]', 'buyer.admin')
        .setValue('[name="password"]', 'buyer.admin')
        .verify.value( '[name="btnSumbit"]', 'Log in' )
        .click('[name="btnSumbit"]')
        .pause(1000)
        .assert.containsText('.logo', 'Field Nation')
        .pause(1000);

        
  },

  'Click the wo create button': function (browser) {
      browser
        .click('body > div.top-bar > div.new-wo-button > a')
        .waitForElementVisible('#submit-preselect-form', 2000);
  },

  'Create WO': function (browser) {
      browser
        .click('#submit-preselect-form')
        .pause(1000)
        .setValue('#title', 'Test WO')
        .pause(500)
        .setValue('div[ng-model="workorder.description"] > div > div[ng-model=html]', "TESTING...")
        .execute('angular.element(document.querySelector(\'ng-model="workorder.description"\')).scope().workorder.description;')
        .execute('scrollTo(0,0)')
        .pause(500)
        .click('body > div.content > div.content-inner.newnav-content.content-inner-new > div.workorder > div.row.action-bar-row > div.action-bar-wrap.ng-scope.normal > div.action-bar > div > div:nth-child(2) > a.btn.btn-default.noncta.mrl');
  },

    
  'after': function(browser) {
    browser
        .pause(10000)
        //.end();
  }
};