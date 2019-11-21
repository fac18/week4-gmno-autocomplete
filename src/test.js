const searchData = require('./handlers.js');
const test = require('tape');

test("returns an array", function(t) {
    const actual = Array.isArray(searchData.search("s")); 
    const expected = true;
    t.equal(actual, expected, "should return true");
    t.end();
})

test("empty term returns empty Array", function(t) {
    const actual = searchData.search(""); 
    const expected = [];
    t.deepEquals(actual, expected, "should return an empty array");
    t.end();
})

test("returns an array of data starting with st", function(t) {
    const actual = searchData.search("St"); 
    const expected = ["St Augustine's Abbey",
    "St Kilda",
    "St Martin's Church",
    "Stonehenge, Avebury and Associated Sites",
    "Studley Royal Park"];
    console.log(actual);
    t.deepEquals(actual, expected, "should return an array of data");
    t.end();
})

test("none of the strings returned should be empty", function(t) {
    const actual = searchData.search("s").filter(place => place.length<0); 
    const expected = [];
    t.deepEquals(actual, expected, "should not return an empty str");
    t.end();
})


// returns an array of strings for c 

