module com.example.tas {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.tas to javafx.fxml;
    exports com.example.tas;
}