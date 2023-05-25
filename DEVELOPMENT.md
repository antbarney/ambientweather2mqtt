# Develompent tips and tricks

Here's how to do common development tasks with this project when you've forgotten after a year of not touching the code.

## How to deploy a new release

1. Update the CHANGELOG.md file with the changes
2. Run `npm version` to set the npm version for the package
3. Publish a release using GitHub releases, wait for it to finish
4. Edit `hassio_aw2m\config.yaml` to have the new release number
5. Edit `hassio_aw2m\CHANGELOG.md` to have the changes
6. Push the `hassio_aw2m` changes to main

## How to force Home Assistant to check for udpated version

1. Go to `Settings` > `Add-ons` > `Add-on Store`
2. Select `...` in the top right
3. Select `Check for Updates`

## How to debug

1. Press F5 to run the project locally
2. Say yes if there's a firewall prompt for local network access
3. Point the Ambient Weather station to the local IP address on the port listed in the debug log

Note that IoT/NoT virtual network rules may prevent direct connections to the machine running the code. Firewall
rules on the router may need to be adjusted accordingly.

## How to force the auto-discover messages to send

Go to http://address:port/discover

## How to send a real data blob

Go to http://address:port/data?<urlencoded data>. Here is a full example:

`/data/?stationtype=AMBWeatherV4.2.9&PASSKEY=40:F5:20:3A:40:FF&dateutc=2021-07-01+20:34:06&tempinf=73.0&humidityin=56&baromrelin=29.900&baromabsin=29.513&tempf=68.2&battout=1&humidity=66&winddir=358&windspeedmph=0.0&windgustmph=0.0&maxdailygust=3.4&hourlyrainin=0.000&eventrainin=0.000&dailyrainin=0.000&weeklyrainin=0.000&monthlyrainin=0.000&totalrainin=0.000&solarradiation=93.58&uv=0&batt_co2=1`