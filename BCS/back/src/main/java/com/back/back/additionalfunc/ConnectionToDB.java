package com.back.back.additionalfunc;

import java.sql.*;
import java.util.Properties;

public class ConnectionToDB {
    public static String connectToDB(String newQuery){
        String url = "jdbc:postgresql://localhost:5432/postgres";
        Properties props = new Properties();
        props.setProperty("user","postgres");
        props.setProperty("password","root");
        try {
            Connection conn = DriverManager.getConnection(url, props);
            Statement statement = conn.createStatement();
            statement.execute(newQuery);
            ResultSet res = statement.getResultSet();
            ResultSetMetaData finalRes = res.getMetaData();
            int cols = finalRes.getColumnCount();
            String finalValue = "[";
            int count = 0;
            while (res.next()) {
                if(count !=0){
                    finalValue += ",";
                }
                finalValue += "{";
                for (int i = 1; i <= cols; i++) {
                    String value = res.getString(i);
                    String columnSting = finalRes.getColumnName(i);
                    finalValue += "\"" + columnSting + "\"" + ": ";
                    finalValue += "\"" + value + "\"" ;
                    if(i!=cols) {
                        finalValue += ",";
                    }
                }
                finalValue += "}";
                count++;
            }
            finalValue += "]";
            return finalValue;
        }
        catch (Exception e){
            throw new UnsupportedOperationException("Query Error");
        }
    }
    public static void addToDB(String newQuery, String newResultGetQuery) {
        String url = "jdbc:postgresql://localhost:5432/postgres";
        Properties props = new Properties();
        props.setProperty("user","postgres");
        props.setProperty("password","root");
        if (newResultGetQuery.equals("[]"))
            try {
                Connection conn = DriverManager.getConnection(url, props);
                Statement statement = conn.createStatement();
                statement.execute(newQuery);
            } catch (Exception e) {
                throw new UnsupportedOperationException("INSERT INTO TABLE ERROR");
            }
    }
}
