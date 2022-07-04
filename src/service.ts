import { StoreComponent } from "./interfaces";

export const isStartedTyping = (valueObject: string[], store: StoreComponent) =>
  valueObject.some(
    (key: string) => store[key as keyof StoreComponent]!.length > 0
  );

export const isValidForm = (valueObject: string[], store: StoreComponent) =>
  valueObject.every(
    (key: string) => store[key as keyof StoreComponent]!.length > 0
  );
