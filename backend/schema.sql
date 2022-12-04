DROP TABLE IF EXISTS GUEST;

CREATE TABLE GUEST (
    Guest_ID char(5) not null,
    First_Name varchar(30) not null,
    Last_Name varchar(40) not null,
    Address varchar(50) not null,
    Cell_Phone_Number char(13) not null,
    Email varchar(20) not null,
    PRIMARY KEY(Guest_ID)
);

DROP TABLE IF EXISTS CREDIT_CARD;

CREATE TABLE CREDIT_CARD(
    Credit_Card_ID char(5) not null,
    Card_Number char(16) not null,
    Card_Name varchar(50) not null,
    Expiration_Date date not null,
    Card_Type varchar(15) not null,
    PRIMARY KEY(Credit_Card_ID)
);

DROP TABLE IF EXISTS ROOM;

CREATE TABLE ROOM(
    Room_Number int not null,
    Availability boolean not null,
    Price_Per_Night decimal(10, 2) not null,
    Max_Occupancy int not null,
    PRIMARY KEY(Room_Number)
);

DROP TABLE IF EXISTS RESERVATION;

CREATE TABLE RESERVATION(
    Reservation_ID char(5) not null,
    No_Rooms int not null,
    Guest_ID char(5) not null,
    Credit_Card_ID char(5) not null,
    No_Guests int not null,
    Preferences varchar(50),
    Booking_Date date not null,
    Booking_Time time not null,
    Reservation_Start_Date date not null,
    Reservation_End_Date date not null,
    No_Nights int not null,
    CONSTRAINT res_guest_fk FOREIGN KEY(Guest_ID) REFERENCES GUEST(Guest_ID),
    CONSTRAINT res_cc_fk FOREIGN KEY(Credit_Card_ID) REFERENCES CREDIT_CARD(Credit_Card_ID),
);

DROP TABLE IF EXISTS BOOKED_ROOM;

CREATE TABLE BOOKED_ROOM(
    Reservation_ID char(5) not null,
    Room_Number char(5) not null,
    PRIMARY KEY(Reservation_ID, Room_Number),
    CONSTRAINT booked_res_fk FOREIGN KEY(Reservation_ID) REFERENCES RESERVATION(Reservation_ID),
    CONSTRAINT booked_room_fk FOREIGN KEY(Room_Number) REFERENCES ROOM(Room_Number)
);

DROP TABLE IF EXISTS EMPLOYEE;

CREATE TABLE EMPLOYEE(
    Employee_ID char(5) not null,
    First_Name varchar(30) not null,
    Last_Name varchar(40) not null,
    Role varchar(20) not null,
    SSN char(9) not null,
    Address varchar(50) not null,
    Cell_Phone_Number char(13) not null,
    Email varchar(20) not null,
    PRIMARY KEY(Employee_ID)
);
