type IconSize = LooseAutoComplete<"sm" | "xs">;
type LooseAutoComplete<T extends string> = T | Omit<string, T>;

export type Event =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

/*
before 
const sendEvent = (eventType: Event["type"], payload?: any) => {};
*/
const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {};

// Usage examples
sendEvent("LOG_IN", { userId: "12345" }); // Valid
sendEvent("SIGN_OUT"); // Valid

const albumTypes = {
  CD: "cd",
  VINYL: "vinyl",
  DIGITAL: "digital",
} as const;

type AlbumType = (typeof albumTypes)[keyof typeof albumTypes];

declare function createFSM<TState extends string>(config: {
  initial: TState;
  states: TState[];
  // states: NoInfer<TState>[];
}): TState;

createFSM({
  initial: "open",
  states: ["open"],
});

function isObjAndHasIdProperty(value: unknown) {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number"
  );
}

const value = { id: 123 };
if (isObjAndHasIdProperty(value)) {
  console.log(value.id); // number
}

const array: Record<string, string>[] = [
  { key: "name", value: "Daniel" },
  { key: "age", value: "26" },
  { key: "location", value: "UK" },
];

const obj: Record<string, string> = {
  key: "name",
  value: "Daniel",
};

const grouped = array.reduce((obj: Record<string, string>, item) => {
  obj[item.key] = item.value;
  return obj;
}, {});

const myArray = ["a", "b", "c"] as const satisfies string[];
const myarray: readonly string[] = ["a", "b", "c"];
const obj1={
  name:"string",
} as const

obj1.name = "string"

