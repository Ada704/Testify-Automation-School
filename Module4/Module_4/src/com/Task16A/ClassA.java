package com.Task16A;

public class ClassA {

    // Method Overloading 1: Different number of parameters
    public void display(int num) {
        System.out.println("Method with one parameter: " + num);
    }

    public void display(int num1, int num2) {
        System.out.println("Method with two parameters: " + num1 + " and " + num2);
    }

    // Method Overloading 2: Different types of parameters
    public void display(String message) {
        System.out.println("Method with String parameter: " + message);
    }

    public void display(double num) {
        System.out.println("Method with double parameter: " + num);
    }

    // Method Overloading 3: Different sequence of parameters
    public void display(char character, int num) {
        System.out.println("Method with char and int parameters: " + character + " and " + num);
    }

    public void display(int num, char character) {
        System.out.println("Method with int and char parameters: " + num + " and " + character);
    }

    public static void main(String[] args) {
        ClassA load = new ClassA();

        // Calling methods with different overloaded signatures
        load.display(10);
        load.display(20, 30);
        load.display("Hello");
        load.display(3.14);
        load.display('A', 5);
        load.display(8, 'B');
    }
}
