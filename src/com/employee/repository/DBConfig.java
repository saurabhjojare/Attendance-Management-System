package com.employee.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.employee.helper.PathHelper;

import resources.propertiesLoadingApp;



public class DBConfig {
    protected Connection connection;
    protected PreparedStatement preparedStatement;
    protected ResultSet resultSet;

    public DBConfig() {
        try {
            // Loading the JDBC driver
            String driverClassName = PathHelper.properties.getProperty("driverClassName");
            Class.forName(driverClassName);

            // Establishing database connection
            String url = PathHelper.properties.getProperty("url");
            String userName = PathHelper.properties.getProperty("userName");
            String password = PathHelper.properties.getProperty("paasword");
            connection = DriverManager.getConnection(url, userName, password);
        } catch (Exception e) {
            System.out.println("Exception occurred while connecting to the database: ");
            e.printStackTrace(); // Print full stack trace for debugging
        }
    }
    
}
