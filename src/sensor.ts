/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Neil Enns. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import DeviceClass from "./deviceClass";
import Entity from "./entity";
import SensorUnit from "./sensorUnit";
import StateClass from "./stateClass";

/**
 * Represents a Home Assistant sensor entity
 */
export default class Sensor extends Entity {
  /**
   *
   * @param name The name of the sensor.
   * @param deviceId The unique identifier for the parent device that contains this entity.
   * @param deviceName friendly name of the device for mqtt publications.
   * @param unit The unit of measurement for the sensor. Optional.
   * @param deviceClass The device class for the sensor. Optional.
   * @param icon The mdi icon for the sensor. Optional.
   * @param stateClass StateClass of the sensor. Optional.
   */
  constructor(name: string, deviceId: string, deviceName: string, unit?: SensorUnit, deviceClass?: DeviceClass, icon?: string, stateClass?: StateClass) {
    super(name, deviceId, deviceName, unit, deviceClass, icon);

    this.discoveryTopic = `homeassistant/sensor/${deviceId}/${this.discoveryPayload.name}/config`;
    this.stateTopic = `homeassistant/sensor/${deviceId}/${this.discoveryPayload.name}/state`;

    this.discoveryPayload.state_topic = this.stateTopic;

    if (stateClass == StateClass.DISABLED) {
      this.discoveryPayload.state_class = undefined;
    }
    else if (stateClass !== undefined) {
      this.discoveryPayload.state_class = stateClass;
    }
  }
}
