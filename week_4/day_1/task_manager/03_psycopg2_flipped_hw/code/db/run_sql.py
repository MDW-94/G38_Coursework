import psycopg2  
import psycopg2.extras as ext

# values = None if there are no values passed in here then we go with None
# conn stands for connect, pscyopg2 is a library that connects us to the connect function
# we then type in the connection we want to make
# Newtork request - tricache - try and make a connection to a database, if it works great if it doesn't do alternative
# try: means try and do that connection

# we're attempting to connect to the database specified, 
# if something goes wrong we're printing the eroor report -
# then closing the connection we;ve made (companies might be getting charged for connection to database)

def run_sql(sql, values = None):
    results = []
    conn = None
    try:
        conn = psycopg2.connect("dbname='task_manager'") #the database name is the only thing you'd need to change, this is the same code otherwise
        cur = conn.cursor(cursor_factory=ext.DictCursor) #on my connection, give me a cursor, of this type
        cur.execute(sql, values) #we've staged our cursor, set up our database - this is a cursor method // created by the assigned cur variable
        conn.commit()
        results = cur.fetchall() #if the cursor is successfully assigned to the database then what the cursor returns is assigned to the empty results list
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
    return results