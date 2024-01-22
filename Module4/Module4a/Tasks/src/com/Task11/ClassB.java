package com.Task11;

public class ClassB {
    public static void main(String[] args) {
        ClassA name = new ClassA();

        String result = name.getName("Chioma");
        System.out.println("Content from Class A: " + result);
    }
}
