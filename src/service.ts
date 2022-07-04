import { StoreComponent} from "./context/userContext";

export const isStartedTyping =(valueObject:string[], store: StoreComponent) => 
valueObject.some((key:string) => store[key as keyof StoreComponent]!.length > 0 )
