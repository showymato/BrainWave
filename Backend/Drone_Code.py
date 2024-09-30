"""
- > READ DOCUMENTATION AND INSTALL REQUIRED TOOLS/DEPENDENCIES 
Source: https://dronekit-python.readthedocs.io/en/latest/automodule.html
        https://mavlink.io/en/messages/common.html#mav_commands
        MAV_CMD_NAV_WAYPOINT = navigate to a waypoint
        MAV_CMD_NAV_RETURN_TO_LAUNCH = return to launch location
        MAV_CMD_NAV_LAND = land to a location
        MAV_CMD_NAV_TAKEOFF = takeoff to desired altitude
"""
import sys
if sys.version_info.major == 3 and sys.version_info.minor >= 10:
    import collections
    from collections.abc import MutableMapping
    setattr(collections, "MutableMapping", MutableMapping)
import time
import dronekit

# Check if the correct number of arguments is provided
if len(sys.argv) != 4:
    print("Usage: Drone_Code.py <latitude> <longitude> <altitude>")
    sys.exit(1)

# Retrieve latitude, longitude, and altitude from command-line arguments
latitude = float(sys.argv[1])
longitude = float(sys.argv[2])
altitude = float(sys.argv[3])

target_locations = [(latitude, longitude, altitude)]

print(f"Your target location is: {target_locations}")

# target_locations = ((-35.362048, 149.164489, 30),
#                     (-35.362184, 149.162649, 20),
#                     (-35.363580, 149.162826, 25),
#                     (-35.363496, 149.165149, 10))

# print("Your traget locations are the following ((-35.362048, 149.164489, 30),(-35.362184, 149.162649, 20),(-35.363580, 149.162826, 25),(-35.363496, 149.165149, 10))")


# print("Trying to connect to the vehicle...")
# vehicle = dronekit.connect(ip="127.0.0.1:14550", wait_ready=True)
# print("Connected to the vehicle.")

# vehicle.parameters["RTL_ALT"] = 3000  # 3000 centimeters = 30 meters

# mission_items = vehicle.commands
# mission_items.download()
# mission_items.wait_ready()
# mission_items.clear()

# # takeoff command
# mission_item = dronekit.Command(0, 0, 0,
#                                 dronekit.mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
#                                 dronekit.mavutil.mavlink.MAV_CMD_NAV_TAKEOFF,
#                                 0, 0, 0, 0, 0, 0, 0, 0, 30)
# mission_items.add(mission_item)

# # navigation locations
# for location in target_locations:
#     mission_item = dronekit.Command(0, 0, 0,
#                                     dronekit.mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
#                                     dronekit.mavutil.mavlink.MAV_CMD_NAV_WAYPOINT,
#                                     0, 0, 0, 0, 0, 0,
#                                     location[0], location[1], location[2])
#     mission_items.add(mission_item)

# # return to launch command
# mission_item = dronekit.Command(0, 0, 0,
#                                 dronekit.mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
#                                 dronekit.mavutil.mavlink.MAV_CMD_NAV_RETURN_TO_LAUNCH,
#                                 0, 0, 0, 0, 0, 0, 0, 0, 0)
# mission_items.add(mission_item)

# # land command
# mission_item = dronekit.Command(0, 0, 0,
#                                 dronekit.mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
#                                 dronekit.mavutil.mavlink.MAV_CMD_NAV_LAND,
#                                 0, 0, 0, 0, 0, 0, 0, 0, 0)
# mission_items.add(mission_item)

# # upload commands
# mission_items.upload()
# print("Uploaded all mission items.")

# while vehicle.mode.name != "GUIDED":
#     vehicle.mode = dronekit.VehicleMode("GUIDED")
#     time.sleep(1)
# print("Vehicle is in GUIDED mode.")

# vehicle.send_calibrate_barometer()

# while not vehicle.is_armable:
#     time.sleep(1)

# print("Vehicle is armable:", vehicle.is_armable)

# while not vehicle.armed:
#     vehicle.armed = True
#     time.sleep(1)

# print("Vehicle is armed:", vehicle.armed)

# while vehicle.mode.name != "AUTO":
#     vehicle.mode = dronekit.VehicleMode("AUTO")
#     time.sleep(1)
# print("Vehicle is in AUTO mode.")

# vehicle.send_mavlink(
#         vehicle.message_factory.command_long_encode(
#             0, 0, dronekit.mavutil.mavlink.MAV_CMD_MISSION_START, 0, 0, 0, 0, 0, 0, 0, 0))

# try:
#     while True:
#         print("Latitude:", vehicle.location.global_relative_frame.lat,
#               "Longitude:", vehicle.location.global_relative_frame.lat,
#               "Altitude:", vehicle.location.global_relative_frame.alt,
#               "Target Number:", vehicle.commands.next)
#         time.sleep(3)
# except KeyboardInterrupt:
#     print("Closing the vehicle...")
#     vehicle.close()
#     print("Closed the vehicle.")