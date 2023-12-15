package com.Task17A;

public class ClassB extends ClassA{
        @Override
        public void enterUsername(String username) {

            System.out.println("Entering username: " + username);
        }
        @Override
        public void enterPassword(String password) {

            System.out.println("Entering password: " + password);
        }

        @Override
        public void clickForgotPassword() {

            System.out.println("Clicked Forgot Password");
        }

        @Override
        public void clickSignIn() {

            System.out.println("Clicked Sign In");
        }
        public static void main(String[] args) {

            ClassB customLoginPage = new ClassB();

            customLoginPage.enterUsername("user123");
            customLoginPage.enterPassword("pass456");
            customLoginPage.clickSignIn();
            customLoginPage.clickForgotPassword();
        }
    }
