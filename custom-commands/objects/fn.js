var woCommands = require("../commands/wo.js");

module.exports = {
  commands: [woCommands],
  elements: {
    saveWO: { 
      selector: 'body > div.content > div.content-inner.newnav-content.content-inner-new > div.workorder > div.row.action-bar-row > div.action-bar-wrap.ng-scope.normal > div.action-bar > div > div:nth-child(2) > a.btn.btn-default.noncta.mrl' 
    }
  }
};