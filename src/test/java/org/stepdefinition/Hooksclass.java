package org.stepdefinition;

import org.bse.Baseclass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooksclass extends Baseclass {

	@Before(order = 1)
	private void pre1() {
		launchBrowser();
		System.out.println("Launch the browser");
	}
	@Before(order = 2)
	private void pre2() {
		WindowMaximize();
		System.out.println("window maximize");
	}
	@Before(order = 3,value = "@Smoke")
	private void pre3() {
		System.out.println("pre3");
	}

	@After
	private void post1() {
		System.out.println("Take screenshot of scenerios");
	}
	@After
	private void post2() {
		closeEntireBrowser();
	}
}


