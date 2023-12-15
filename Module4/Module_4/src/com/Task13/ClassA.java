package com.Task13;

public class ClassA {
    private int value;

    public ClassA() {
        System.out.println("Constructor 1");
        this.value = 0;
    }

    // Constructor 2
    public ClassA(int value) {
        System.out.println("Constructor 2");
        this.value = value;
    }

    // Constructor 3
    public ClassA(String strValue) {
        System.out.println("Constructor 3");
        this.value = Integer.parseInt(strValue);
    }

    public int getValue() {
        return value;
    }
}
