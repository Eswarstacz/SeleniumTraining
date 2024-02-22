$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Testsample.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbsignin.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch url of the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "Fbsignin.to_launch_url_of_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether it navigate to the homepage or not",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_check_whether_it_navigate_to_the_homepage_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbsignin.to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data\"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the data\"\u003cPassworddatas\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "Passworddatas"
      ]
    },
    {
      "cells": [
        "seleniuminmakes@gmail.com",
        "865845"
      ]
    },
    {
      "cells": [
        "testing@inmakes.com",
        "654897"
      ]
    },
    {
      "cells": [
        "automation@inmakes.com",
        "ufjhyuv"
      ]
    },
    {
      "cells": [
        "appium@inmakes.com",
        "jkhkjkbi"
      ]
    },
    {
      "cells": [
        "javaselenium@inmakes.com",
        "asdfafddaf"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbsignin.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fbsignin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"seleniuminmakes@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"865845\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbsignin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbsignin.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fbsignin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"testing@inmakes.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"654897\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbsignin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbsignin.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fbsignin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"automation@inmakes.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"ufjhyuv\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbsignin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbsignin.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fbsignin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"appium@inmakes.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"jkhkjkbi\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbsignin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbsignin.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fbsignin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"javaselenium@inmakes.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data\"asdfafddaf\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbsignin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/fblogin.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbsignin.to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Fbsignin.to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_click_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass firstname in firstname text box",
  "rows": [
    {
      "cells": [
        "firstnamel",
        "Samuel"
      ]
    },
    {
      "cells": [
        "firstname2",
        "janani"
      ]
    },
    {
      "cells": [
        "firstname3",
        "sangeetha"
      ]
    },
    {
      "cells": [
        "firstname4",
        "Peneal"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_pass_firstname_in_firstname_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass secondname in secondname text box",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_pass_secondname_in_secondname_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or email in email text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "986545664",
        "djdieje",
        "nksnkn@"
      ]
    },
    {
      "cells": [
        "62626265",
        "njngjnj@!@",
        "sdfgsd"
      ]
    },
    {
      "cells": [
        "jdnjngj1223",
        "asddsaf",
        "garag"
      ]
    },
    {
      "cells": [
        "fgaga",
        "hafgga",
        "gafrgarg"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_pass_mobileno_or_email_in_email_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To create new password using new password text box",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignin.to_create_new_password_using_new_password_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbsignin.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
});