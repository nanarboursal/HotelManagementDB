import sqlite3
import uuid

from click import command


class Executer:

    # HELPER FUNCTIONS FOR MYSQL OPERATIONS
    def __init__(self, file_path):
        self.__conn = sqlite3.connect(file_path)
        self.__cursor = self.__conn.cursor()

    def close_connection(self):
        self.__conn.close()

    def commit(self):
        self.__conn.commit()

    def create_table(self,
                     table_name: str,
                     *args) -> None:
        execution_string = "CREATE TABLE " + table_name + "("

        for i in args:
            execution_string += i + ", "

        execution_string = execution_string[:-2] + ");"

        self.__cursor.execute(execution_string.upper())

    def insert_values(self,
                      table_name: str,
                      values: tuple,
                      columns=None):

        base_string = "INSERT INTO " + table_name

        if columns is not None:
            base_string += str(columns)
            if len(columns) == 1:
                base_string = base_string[:-2] + ")"

        if len(values) == 1:
            base_string += " VALUES" + " " + str(values)
            base_string = base_string[:-2] + ");"
        else:
            base_string += " VALUES" + " " + str(values) + ";"

        self.__cursor.execute(base_string.upper())

    def fetch_data(self,
                   table: str,
                   *args,
                   select_col=None,
                   ret_str=False):

        base_str = "SELECT"
        if select_col is None:
            base_str += " *"
        else:
            base_str += " "
            for i in select_col:
                base_str += i + ", "
            base_str = base_str[:-2]

        base_str += " FROM {}".format(table)

        for i in args:
            base_str += " " + i

        self.__cursor.execute(base_str.upper() + ";")

        if ret_str:
            return base_str.upper() + ";"
        else:
            return self.__cursor.fetchall(),

    def make_view(self,
                  view_name: str,
                  table: str,
                  *args,
                  select_col=None):

        create_str = "CREATE VIEW {} AS".format(view_name)

        base_str = self.fetch_data(table,
                                   *args,
                                   select_col=select_col,
                                   ret_str=True)

        full_str = create_str + " " + base_str

        self.__cursor.execute(full_str.upper())


if __name__ == '__main__':
    executer = Executer("project_db.sqlite")

# CREATING TABLES AND INSERTING VALUES
    command_list = ["guest_ID VARCHAR(10) PRIMARY KEY",
                    "first_name VARCHAR(50) NOT NULL",
                    "last_name VARCHAR(50) NOT NULL",
                    "address VARCHAR(50) NOT NULL",
                    "email VARCHAR(25) NOT NULL",
                    "phone_number VARCHAR(12) NOT NULL"]

    executer.create_table("GUEST", *command_list)
    print("creation done!")

    executer.insert_values("GUEST",
                           ("123",
                            "John",
                            "Doe",
                            "123 Fremont St",
                            "John@john@gmail.com",
                            "12345678"),
                           columns=("guest_ID",
                                    "first_name",
                                    "last_name",
                                    "address",
                                    "email",
                                    "phone_number"))

    print("insert done!")
# EMPLOYEE
    command_list = ["employee_ID VARCHAR(10) PRIMARY KEY",
                    "first_name VARCHAR(50) NOT NULL",
                    "last_name VARCHAR(50) NOT NULL",
                    "address VARCHAR(50) NOT NULL",
                    "email VARCHAR(25) NOT NULL",
                    "cell_phone_number VARCHAR(12) NOT NULL",
                    "role VARCHAR(50) NOT NULL",
                    "ssn VARCHAR(10) NOT NULL"]

    executer.create_table("EMPLOYEE", *command_list)
    print("creation done!")

    executer.insert_values("EMPLOYEE",
                           ("4567",
                            "Mary",
                            "Jones",
                            "189 San Jose St",
                            "Mary.jones@gmail.com",
                            "12145668",
                            "Manager",
                            "93847573"),
                           columns=("employee_ID",
                                    "first_name",
                                    "last_name",
                                    "address",
                                    "email",
                                    "cell_phone_number",
                                    "role",
                                    "ssn"))

    # CREDIT CARD
    command_list = ["Credit_Card_ID VARCHAR(10) PRIMARY KEY",
                    "Card_Number INT NOT NULL",
                    "Card_Name VARCHAR(100) NOT NULL",
                    "Card_Type VARCHAR(100) NOT NULL",
                    "Expiration_Date DATE NOT NULL"]

    executer.create_table("CREDIT_CARD", *command_list)
    print("creation done! - CREDIT CARD")

    executer.insert_values("CREDIT_CARD",
                           ("6675",
                            129939,
                            "Smith Martin",
                            "Visa",
                            "2023-05-06"),
                           columns=("Credit_Card_ID",
                                    "Card_Number",
                                    "Card_Name",
                                    "Card_Type",
                                    "Expiration_Date"))
    # ROOM
    command_list = ["Room_Number int not null",
                    "Availability VARCHAR(10) not null",
                    "Price_Per_Night decimal(10, 2) not null",
                    "Max_Occupancy int not null",
                    "PRIMARY KEY(Room_Number)"]
    executer.create_table("ROOM", *command_list)
    print("creation done! - ROOM")
    executer.insert_values("ROOM",
                           (55,
                            "TRUE",
                            200.10,
                            4),
                           columns=("Room_Number",
                                    "Availability",
                                    "Price_Per_Night",
                                    "Max_Occupancy"))

    # BOOKED_ROOM
    command_list = ["Reservation_ID char(5) not null",
                    "Room_Number int not null",
                    "PRIMARY KEY(Reservation_ID, Room_Number)",
                    "CONSTRAINT booked_res_fk FOREIGN KEY(Reservation_ID) REFERENCES RESERVATION(Reservation_ID)",
                    "CONSTRAINT booked_room_fk FOREIGN KEY(Room_Number) REFERENCES ROOM(Room_Number)"]
    executer.create_table("BOOKED_ROOM", *command_list)
    print("creation done!- BOOKED_ROOM")
    executer.insert_values("BOOKED_ROOM",
                           ("3434",
                            55),
                           columns=("Reservation_ID",
                                    "Room_Number"))

    executer.insert_values("GUEST",
                           ("555",
                            "Surabhi",
                            "Gupta",
                            "123 SJ St",
                            "surabhi@gmail.com",
                            "122"),
                           columns=("guest_ID",
                                    "first_name",
                                    "last_name",
                                    "address",
                                    "email",
                                    "phone_number"))

    executer.commit()
    executer.close_connection()
