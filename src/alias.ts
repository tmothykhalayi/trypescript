// Define a type alias for a tuple
type Coordinates = [number, number];

// Now you can use the alias like any other type
function moveTo(location: Coordinates): void {
    console.log(`Moving to coordinates: (${location[0]}, ${location[1]})`);
}

// Using the alias
moveTo([10, 20]);
//aliases revision

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type guitarist = {
  name: string;
  activestatus: boolean;
  albums: [string, boolean][];  // Corrected to use a tuple with a colon
};

type userid =stringOrNumber
//literal types
let myname :'timothy'
let username :'dave'|'timothy'|'khalayi'
username ='any'

