import sqlite3
import uuid


class Executer:

    def __init__(self, file_path):
        self.__conn = sqlite3.connect(file_path)
        self.__cursor = self.__conn.cursor()
    

    def close_connection(self):
        self.__conn.close()

    def commit(self):
        self.__conn.commit()


if __name__ == '__main__':
    executer = Executer("schema.sql")

    executer.commit()
    executer.close_connection()