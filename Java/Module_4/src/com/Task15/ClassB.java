package com.Task15;

public class ClassB extends ClassA{

        public void methodB1() {
            System.out.println("Method3");
        }

        public void methodB2() {
            System.out.println("Method4");
        }

        public static void main(String[] args) {
            ClassB update = new ClassB();

            update.method1();
            update.method2();
            update.method3();

            update.methodB1();
            update.methodB2();
        }
    }
