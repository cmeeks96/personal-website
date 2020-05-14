# https://github.com/mezz64/pyEight
# https://www.home-assistant.io/integrations/eight_sleep/


# pip install pyeight
from pyeight.eight import EightSleep

eight = EightSleep(user, pass, timezone, True, None, loop)

await eight.start()

# Update mattress data, 1min interval recommended
await eight.update_device_data()

# Update user data, 5min interval recommended
await eight.update_user_data()




def fetchEightSleepData():
    print("Eight Sleep")
    return

fetchEightSleepData()




API_URL = 'https://client-api.8slp.net/v1'




