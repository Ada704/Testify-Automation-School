package com.Task16B;

public class ClassB extends ClassA {
    @Override
    public void display(String message) {
        System.out.println("Child method - Overridden display: " + message);
    }
    @Override
    public void show(int number) {
        System.out.println("Child method - Overridden show: " + number);
    }

    public static void main(String[] args) {
        ClassA parentObj = new ClassA();
        parentObj.display("Hello from Parent"); // Parent method
        parentObj.show(10); // Parent method

        ClassB childObj = new ClassB();
        childObj.display("Hi from Child"); // Overridden child method
        childObj.show(20); // Overridden child method
    }
}
