@Feature2
Feature: To validate the account creation of fb application

@Sanity
Scenario: To create new account
Given To launch the browser and maximise the window
When To launch url of fb application
And To click the create new account button

And To pass firstname in firstname text box
|firstnamel | Samuel    |
|firstname2 | janani    |
|firstname3 | sangeetha |
|firstname4 | Peneal    |

And To pass secondname in secondname text box

And To pass mobileno or email in email text box
| password1 | password2 | password3 |
|986545664 | djdieje | nksnkn@ |
|62626265 | njngjnj@!@ | sdfgsd|
| jdnjngj1223 | asddsaf | garag |
| fgaga | hafgga | gafrgarg |

And To create new password using new password text box
Then To close the chrome browser