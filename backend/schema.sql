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

DROP TABLE IF EXISTS BILL;

CREATE TABLE BILL(
    Bill_ID char(5) not null,
    Guest_ID char(5) not null,
    Credit_Card_ID char(5) not null,
    Total_Amount decimal(10, 2) not null,
    Invoice_Date date not null,
    Payment_Date date not null,
    PRIMARY KEY(Bill_ID),
    CONSTRAINT bill_guest_fk FOREIGN KEY(Guest_ID) REFERENCES GUEST(Guest_ID),
    CONSTRAINT bill_cc_fk FOREIGN KEY(Credit_Card_ID) REFERENCES CREDIT_CARD(Credit_Card_ID)
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
    No_People int not null,
    Preferences varchar(50),
    Booking_Date date not null,
    Booking_Time time not null,
    Reservation_Start_Date date not null,
    Reservation_End_Date date not null,
    CONSTRAINT res_guest_fk FOREIGN KEY(Guest_ID) REFERENCES GUEST(Guest_ID),
);

DROP TABLE IF EXISTS BOOKED_ROOMS;

CREATE TABLE BOOKED_ROOMS(
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

DROP TABLE IF EXISTS PAYCHECK;

CREATE TABLE PAYCHECK(
    Paycheck_ID char(5) not null,
    Employee_ID char(5) not null,
    Amount_Paid decimal(10, 2) not null,
    PRIMARY KEY(Paycheck_ID),
    CONSTRAINT pay_emp_fk FOREIGN KEY(Employee_ID) REFERENCES EMPLOYEE(Employee_ID)
);

DROP TABLE IF EXISTS TIMECARD;

CREATE TABLE TIMECARD(
    Timecard_ID char(5) not null,
    Employee_ID char(5) not null,
    Hours decimal(10, 2) not null,
    PRIMARY KEY(Timecard_ID),
    CONSTRAINT time_emp_fk FOREIGN KEY(Employee_ID) REFERENCES EMPLOYEE(Employee_ID)
);
