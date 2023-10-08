import random
import math
workouts = ["Sit-ups","Burpees","Push-ups",""]
warmups = ["walking laps in the backyard", "running up and down the stairs", "stretching"]
finale = ""
currentDay = 1
wu = "Warm-up:"
def warmUp():
    warmupString = ""
    currentTime = 0
    while(currentTime < 5):
        elapsed = math.ceil(random.random()*3)
        warmupString += f"{elapsed} minutes of {random.choice(warmups)} \n"
        currentTime += elapsed
    return warmupString

def workOut():
    workOutString = ""
    currentTime = 0
    while(currentTime < 35):
        elapsed = math.ceil(random.random()*10)
        workOutString += f"{elapsed} minutes of {random.choice(workouts)} \n"
        currentTime += elapsed
    return workOutString
    
for i in range(4):
   finale += f"Day {i+1}:\n{wu}\n{warmUp()}\nWorkout:\n{workOut()}"
print(finale)
   

print(random.random()*5)