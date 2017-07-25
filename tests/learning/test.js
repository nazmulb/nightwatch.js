module.exports = {
  '@tags': ['wolc'],

  'before': function (browser){
    //do nothing.
  },

  'FN LogIn Test' : function (browser) {
      browser
        .login();   
  },

  'Click the wo create button': function (browser) {
      browser
        .click('body > div.top-bar > div.new-wo-button > a')
        .waitForElementVisible('#submit-preselect-form', 2000);
  },

  'Create WO': function (browser) {
      var fn = browser.page.fn();

      fn
        .woCreate();
  },

    
  'after': function(browser) {
    browser
        .pause(10000)
        .logout()
        .pause(3000)
        .end();
  }
};