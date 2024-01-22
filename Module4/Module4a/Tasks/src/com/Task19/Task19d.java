package com.Task19;

public class Task19d {
    String instanceName = "Delta";

    public void printName(String userName) {
        System.out.println("Instance member: " + instanceName);
        System.out.println("User-entered name: " + userName);
    }

    public static void main(String[] args) {
        Task19d obj = new Task19d();


        obj.printName("Chioma");
    }
}