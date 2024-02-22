package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.bse.Baseclass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Fbsignin extends Baseclass {
	@Given("To launch the chrome browser and maximize window")
	public void to_launch_the_chrome_browser_and_maximize_window() {
		launchBrowser();

	}

	@When("To launch url of the facebook application")
	public void to_launch_url_of_the_facebook_application() throws InterruptedException {
		Thread.sleep(2000);
		LaunchUrl("https://www.facebook.com/");

	}

	@When("To pass valid username in email field")
	public void to_pass_valid_username_in_email_field() {
		WebElement email = driver.findElement(By.xpath("//input[@type='text']"));
		email.sendKeys("cristianoronaldo@gmail.com");

	}

	@When("To pass invalid password in password field")
	public void to_pass_invalid_password_in_password_field() {
		WebElement pswd = driver.findElement(By.xpath("//input[@type='password']"));
		pswd.sendKeys("");
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
		WebElement btn = driver.findElement(By.xpath("//button[@name='login']"));
		btn.click();
	}

	@When("To check whether it navigate to the homepage or not")
	public void to_check_whether_it_navigate_to_the_homepage_or_not() {
		System.out.println("Check whether navigate or not");
	}

	@Then("To close browser")
	public void to_close_browser() {
		closeEntireBrowser();

	}

	@When("User has to hit the facebook url")
	public void user_has_to_hit_the_facebook_url() throws InterruptedException {
		Thread.sleep(2000);
		LaunchUrl("https://www.facebook.com/");
	}

	@When("User has to pass the data{string} in email field")
	public void user_has_to_pass_the_data_in_email_field(String d) {

		WebElement m = driver.findElement(By.xpath("//input[@name='email']"));
		m.sendKeys(d);
	}

	@When("User has to pass the data{string} in password field")
	public void user_has_to_pass_the_data_in_password_field(String d) {
		WebElement p = driver.findElement(By.xpath("//input[@name='pass']"));
		p.sendKeys(d);
	}

	@When("User has to click the login button")
	public void user_has_to_click_the_login_button() {
		WebElement l = driver.findElement(By.xpath("//button[@name='login']"));
		l.click();
	}

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		closeEntireBrowser();
	}

	@Given("To launch the browser and maximise the window")
	public void to_launch_the_browser_and_maximise_the_window() throws InterruptedException {
		Thread.sleep(2000);
		launchBrowser();
	}

	@When("To launch url of fb application")
	public void to_launch_url_of_fb_application() {
		LaunchUrl("https://www.facebook.com/");

	}

	@When("To click the create new account button")
	public void to_click_the_create_new_account_button() {
		WebElement crtnew = driver.findElement(By.xpath("//a[text()='Create new account']"));
		crtnew.click();
	}

	@When("To pass firstname in firstname text box")
	public void to_pass_firstname_in_firstname_text_box(DataTable b) throws InterruptedException {
		Thread.sleep(2000);
		WebElement firstnm = driver.findElement(By.xpath("//input[@name='firstname']"));
		firstnm.sendKeys("firstname3");
		
	}

	@When("To pass secondname in secondname text box")
	public void to_pass_secondname_in_secondname_text_box() {
		WebElement lastnm = driver.findElement(By.xpath("(//input[@type='text'])[3]"));
		lastnm.sendKeys("Chillout");
	}

	@When("To pass mobileno or email in email text box")
	public void to_pass_mobileno_or_email_in_email_text_box(DataTable b) {
		WebElement email = driver.findElement(By.xpath("(//input[@type='text'])[4]"));
		email.sendKeys("password");
		
	}

	@When("To create new password using new password text box")
	public void to_create_new_password_using_new_password_text_box() {
		WebElement pswd = driver.findElement(By.xpath("(//input[@type='password'])[2]"));
		pswd.sendKeys("suiiiiiii");
	}

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
		closeEntireBrowser();

	}

}
