import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DeviceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Device {
  readonly id: string;
  readonly mac_address?: string;
  readonly name?: string;
  readonly tags?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Device, DeviceMetaData>);
  static copyOf(source: Device, mutator: (draft: MutableModel<Device, DeviceMetaData>) => MutableModel<Device, DeviceMetaData> | void): Device;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly company?: string;
  readonly email?: string;
  readonly avatar?: string;
  readonly Devices?: (Device | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}