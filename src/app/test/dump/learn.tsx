import assert from "assert";
import React from "react";

const Row = (props: {
  icon: React.ComponentType<{
    className: string;
  }>;
}) => {
  return (
    <div>
      <props.icon className="h-8 w-8" />
      {/* <props.icon/> error:prop className missing */}
    </div>
  );
};
function renderRow() {
  return <Row icon={UserIcon} />;
}
function UserIcon() {
  return <div>icon</div>;
}

declare function getId(name: string): number {
  return 1;
};

function yell(str) {
  assert(typeof str === "string");
  return str.toUppercase();
  //         ~~~~~~~~~~~
  // error: Property 'toUppercase' does not exist on type 'string'.
  //        Did you mean 'toUpperCase'?
}

function whatsNever(a: string | number) {
  if (typeof a !== "string" && typeof a !== "number") {
    a; //(parameter) a: never
  }
}

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}

myForEach([1, 2, 3], (a, i) => {
  if (i) console.log(i.toFixed());
});

// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }

//good - non-overloaded version
function good(a: number): number;
function good(a: number, b: number): number;

function good(a: number, b?: number) {
  return 1;
}
good(4)
good(4, 5)

let bool = typeof {} === "object";

const args = [8, 5];
const angle = Math.atan2(...args);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ colour: "red", width: 100 });
let mySquare2: SquareConfig = { colour: "red", width: 100 };


interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: string;
}