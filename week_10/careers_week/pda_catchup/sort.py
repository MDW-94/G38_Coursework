list_of_data = [
    {"name":"Harry", "age":55},
    {"name":"Sam", "age":24},
    {"name":"Ella", "age":68},
    {"name":"Tina", "age":36},
    {"name":"David", "age":22},
    {"name":"Jack", "age":80},
    {"name":"Tom", "age":56},
    {"name":"Patricia", "age":45},
    {"name":"Deborah", "age":34},
    {"name":"Tim", "age":69},
    {"name":"Ewan", "age":58},
    {"name":"Ryan", "age":20},
    {"name":"Joe", "age":18},
    {"name":"Emma", "age":23},
    {"name":"Will", "age":36},
    {"name":"Janet", "age":47},
]

def sort_by_age( list ):
    return list['age']

list_of_data.sort(key=sort_by_age)
print(list_of_data)