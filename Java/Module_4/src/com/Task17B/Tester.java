package com.Task17B;

public class Tester implements LoginTest {
    private String username = "testUser";
    private String password = "testPassword";

    @Override
    public void testCorrectUsername() {
        System.out.println("Test valid username");
    }

    @Override
    public void testCorrectPassword() {

        System.out.println("Test valid password");
    }

    @Override
    public void testSuccessfulLogin() {

        System.out.println("Testing successful login...");
    }

    public static void main(String[] args) {

        Tester tester = new Tester();

        tester.testCorrectUsername();
        tester.testCorrectPassword();
        tester.testSuccessfulLogin();
    }
}
