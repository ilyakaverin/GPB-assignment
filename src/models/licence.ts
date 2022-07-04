import { NEW_LICENSE } from "../interfaces";

export interface LicenseInterface extends NEW_LICENSE {
  id: number;
}

export class License {
  public readonly id: number;

  constructor(newLicence: NEW_LICENSE) {
    Object.assign(this, newLicence);
    this.id = Math.floor(Math.random() * 10000);
  }

  getId() {
    return this.id;
  }
  update(newData: NEW_LICENSE) {
    Object.assign(this, newData);
  }
}
