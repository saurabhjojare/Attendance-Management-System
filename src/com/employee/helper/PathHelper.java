package com.employee.helper;

import java.io.FileInputStream;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.Properties;

// Helper class to manage file paths and properties loading.

public class PathHelper {
    // Complete path for the properties file
    public static String completePath = " ";
    
    // Properties object to hold properties
    public static Properties properties = new Properties();

    // Method to load properties from a file.

    private static void loadProperties() {
        try {
                // Get the current directory path
                Path currentDirectoryPath = FileSystems.getDefault().getPath("");
                String currentDirectoryName = currentDirectoryPath.toAbsolutePath().toString();
                
                // Construct complete path for the properties file
                completePath = currentDirectoryName + FileSystems.getDefault().getSeparator() + "src"
                    + FileSystems.getDefault().getSeparator() + "resources" + FileSystems.getDefault().getSeparator()
                    + "db.properties";

                // Read properties from the file
                FileInputStream finf = new FileInputStream(completePath);
                properties.load(finf);
        } catch(Exception e) {
            // Handle exceptions gracefully
            System.out.println("Error In PathHelper " + e);
        }
    }

    static {
        // Load properties file upon class initialization
        loadProperties();

}
}
