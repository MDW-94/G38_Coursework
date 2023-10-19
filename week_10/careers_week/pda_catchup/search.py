
list_of_stuff = [
    {"colour": "red", "number": 4, "shape": "sphere"},
    {"colour": "blue", "number": 3, "shape": "square"},
    {"colour": "green", "number": 2, "shape": "rectangle"},
    {"colour": "yellow", "number": 3, "shape": "pyramid"},
    {"colour": "orange", "number": 2, "shape": "oval"},
    {"colour": "purple", "number": 1, "shape": "cube"},
]

def find_colour_and_shape_by_num( list, number ):
    found_items = []
    for item in list:
        if item["number"] == number:
            found_items.append(item)

    return found_items

print(find_colour_and_shape_by_num(list_of_stuff, 2))