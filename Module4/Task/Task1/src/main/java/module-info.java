module com.graham.tas3 {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.graham.tas3 to javafx.fxml;
    exports com.graham.tas3;
}