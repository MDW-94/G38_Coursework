
list1 = [
    {"location": "Scotland", "weather": "cloudy"},
    {"location": "England", "weather": "rain"},
    {"location": "Spain", "weather": "sunshine"},
    {"location": "Italy", "weather": "overcast"},
]

def find_location_by_weather( list1, weather ):
    found_place = []
    for place in list1:
        if place["weather"] == weather:
            found_place = place

    return found_place["location"]

print(find_location_by_weather(list1, "sunshine"))

