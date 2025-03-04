"use strict";
// Now you can use the alias like any other type
function moveTo(location) {
    console.log(`Moving to coordinates: (${location[0]}, ${location[1]})`);
}
// Using the alias
moveTo([10, 20]);
