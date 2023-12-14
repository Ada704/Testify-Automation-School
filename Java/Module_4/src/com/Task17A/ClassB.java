package com.Task17A;

public class ClassB extends ClassA{
        @Override
        public void enterUsername(String username) {
            // Logic to enter username
            System.out.println("Entering username: " + username);
        }

        @Override
        public void enterPassword(String password) {
            // Logic to enter password
            System.out.println("Entering password: " + password);
        }

        @Override
        public void clickForgotPassword() {
            // Logic to handle forgot password
            System.out.println("Clicked Forgot Password");
        }

        @Override
        public void clickSignIn() {
            // Logic to perform sign-in action
            System.out.println("Clicked Sign In");
        }
        public static void main(String[] args) {
            // Creating an instance of a specific login page
            ClassB customLoginPage = new ClassB();

            // Using the methods defined in the abstract class through the specific implementation
            customLoginPage.enterUsername("user123");
            customLoginPage.enterPassword("pass456");
            customLoginPage.clickSignIn();
            customLoginPage.clickForgotPassword();
        }
    }
