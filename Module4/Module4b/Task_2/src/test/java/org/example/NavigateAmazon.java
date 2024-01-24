package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NavigateAmazon {

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/Users/user/Downloads/Testify-Automation-School/Module4/Module4b/Task_2/src/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.amazon.com/");
    }
}




