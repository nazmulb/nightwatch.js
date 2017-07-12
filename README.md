# Nightwatch.js

## What is Nightwatch?
Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver).

It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests. Nightwatch can also be used for writing Node.js unit tests.

## Overview of WebDriver
WebDriver is a general purpose library for automating web browsers. It was started as part of the Selenium project, which is a very popular and comprehensive set of tools for browser automation, initially written for Java but now with support for most programming languages.

Nightwatch uses the WebDriver API to perform the browser automation related tasks, like opening windows and clicking links for instance.

## Theory of Operation
Nightwatch works by communicating over a restful HTTP api with a WebDriver server (typically the Selenium server). The restful API protocol is defined by the W3C WebDriver API. See below for an example workflow for browser initialization.

<img src="http://nightwatchjs.org/img/operation.png" alt="Theory of Operation">

Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element.

## Installation

- Please install <a href="http://nodejs.org">Node.js</a>
- Install Nightwatch globally using npm: `npm install nightwatch -g`
- Create folder structure like as follows:

```js
lib/
  ├── selenium-server-standalone.jar
  ├── chromedriver
custom-commands/
reports/
  ├── screenshots/
tests/
  ├── learning/
        ├── test.js
```

- Selenium Server is a Java application which Nightwatch uses to connect to the various browsers. It runs separately on the machine with the browser you want to test. You will need to have the <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java Development Kit (JDK)</a> installed, minimum required version is 7. You can check this by running `java -version` from the command line.
- Download the latest version of the `selenium-server-standalone-{VERSION}.jar` file from the <a href="http://selenium-release.storage.googleapis.com/index.html">Selenium downloads</a> page and place it under `lib` folder.
- Now you need to setup Browser Drivers, binaries are available for download on the <a href="https://sites.google.com/a/chromium.org/chromedriver/downloads">ChromeDriver Downloads</a> page, for various platforms and place it under `lib` folder.

## Configuration

Nightwatch test runner expects a configuration file to be passed, using by default a `nightwatch.json` file. Let's create the `nightwatch.json` in the project's root folder and add this inside:

```json
{
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
        "start_process" : true,
        "server_path" : "./lib/selenium-server-standalone-3.4.0.jar",
        "start_session" : true,
        "live_output" : false,
        "log_path" : "reports",
        "host" : "127.0.0.1",
        "port" : 4444,
        "cli_args" : {
            "webdriver.chrome.driver" : "./lib/chromedriver"
        }
    },

  "test_settings" : {
    "default" : {
        "launch_url" : "https://mono-qa2.fndev.net",
        "selenium_port"  : 4444,
        "selenium_host"  : "localhost",
        "silent": true,
        "screenshots" : {
            "enabled" : true,
            "on_failure" : true,
            "on_error" : true,
            "path" : "./reports/screenshots"
        },
        "desiredCapabilities": {
            "browserName": "chrome",
            "javascriptEnabled": true,
            "acceptSslCerts": true,
            "start-maximized": true
        }
    }
  }
}
```

## Write your first test script

Please create a `test.js` file under `tests` folder and write the following code in that file.

```js
module.exports = {
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
      .pause(1000)
      .end();
  }          
};
```

## Run your tests

```js
nightwatch tests/learning/test.js
```

For more info, please read from <a href="http://nightwatchjs.org/gettingstarted/">nightwatch.org</a>.