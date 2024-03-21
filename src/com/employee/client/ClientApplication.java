package com.employee.client;

import java.util.Scanner;

// ClientApplication
public class ClientApplication {
    public static void main(String x[]) {

    // Main menu loop
    do {
        // Display menu options
        System.out.println("Add New Employee");
        
        System.out.print("Enter Your Choice");
        Scanner scanner = new Scanner(System.in);
        int choice = scanner.nextInt();
        
        switch (choice) {
            case 1:
                scanner.nextLine();
                System.out.println("Enter Employee Name");
                String empName = scanner.nextLine();
                


                break;
        
            default:
                break;
        }
        
    } while (true);
    } 
}