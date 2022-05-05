import pymysql

db = pymysql.connect(host="localhost", user="root", passwd="rkaakffoddl", db="word_test", charset="utf8")
cur = db.cursor()

sql = "SELECT * from Words"
cur.execute(sql)

data_list = cur.fetchall()

print(data_list[0])
print(data_list[1])
print(data_list[2])
