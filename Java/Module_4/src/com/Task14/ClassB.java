package com.Task14;

public class ClassB {
    public static void main(String[] args) {
        ClassA square = new ClassA();

        square.setShapeLength(5);
        square.setShapeBreadth(5);

        int length = square.getShapeLength();
        int breadth = square.getShapeBreadth();

        int area = length * breadth;

        System.out.println("The area of a square of length: " + length +
                " and breadth " + breadth + " is " + area);
    }
}
