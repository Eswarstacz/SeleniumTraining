package org.pojo;

import org.bse.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Signin extends Baseclass {
	public Signin() {
		PageFactory.initElements(driver, this);

	}
	@FindBy(xpath = "//a[text()='Create new account']")
	public WebElement createNewAcc;

	@FindBy(xpath = "((//input[@type='text'])[2]")
	public WebElement firstNameTxtBox;

	@FindBy(name = "lastname")
	public WebElement secondNameTxtBox;

	@FindBy(xpath = "//input[@name='reg_email__']")
	public WebElement mobileorEmailTextBox;

	@FindBy(xpath = "//input[@name='reg_passwd__']")
	public WebElement newPassword;

	public WebElement getCreateNewAcc() {
		return createNewAcc;
	}

	public WebElement getFirstNameTxtBox() {
		return firstNameTxtBox;
	}

	public WebElement getSecondNameTxtBox() {
		return secondNameTxtBox;
	}

	public WebElement getMobileorEmailTextBox() {
		return mobileorEmailTextBox;
	}

	public WebElement getNewPassword() {
		return newPassword;
	}
	

}
