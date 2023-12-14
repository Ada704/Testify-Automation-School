package com.Task13;

public class ClassB {
    public static void main(String[] args) {

        ClassA type1 = new ClassA();
        ClassA type2 = new ClassA(10);
        ClassA type3 = new ClassA("20");

        System.out.println("Value of obj1: " + type1.getValue());
        System.out.println("Value of obj2: " + type2.getValue());
        System.out.println("Value of obj3: " + type3.getValue());
    }
}
