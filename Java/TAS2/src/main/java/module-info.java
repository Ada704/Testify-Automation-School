module com.example.tas2 {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.tas2 to javafx.fxml;
    exports com.example.tas2;
}