import React from "react";
import "./Board.css";

const p1Area = [
  "00",
  "20",
  "40",
  "60",
  "80",
  "100",
  "01",
  "101",
  "02",
  "102",
  "03",
  "103",
  "04",
  "104",
  "05",
  "25",
  "45",
  "65",
  "85",
  "105",
  "141",
  "142",
  "143",
  "144",
  "145",
  "146",
  "121",
];
const p2Area = [
  "180",
  "200",
  "220",
  "240",
  "260",
  "280",
  "181",
  "281",
  "182",
  "282",
  "183",
  "283",
  "184",
  "284",
  "185",
  "205",
  "225",
  "245",
  "265",
  "285",
  "267",
  "247",
  "227",
  "207",
  "187",
  "167",
  "266",
];
const p3Area = [
  "09",
  "29",
  "49",
  "69",
  "89",
  "109",
  "010",
  "1010",
  "011",
  "1011",
  "012",
  "1012",
  "013",
  "1013",
  "014",
  "214",
  "414",
  "614",
  "814",
  "1014",
  "27",
  "47",
  "67",
  "87",
  "107",
  "127",
  "28",
];
const p4Area = [
  "189",
  "209",
  "229",
  "249",
  "269",
  "289",
  "1810",
  "2810",
  "1811",
  "2811",
  "1812",
  "2812",
  "1813",
  "2813",
  "1814",
  "2014",
  "2214",
  "2414",
  "2614",
  "2814",
  "1413",
  "1412",
  "1411",
  "1410",
  "149",
  "148",
  "1613",
];
const expandableCells = [
  "21",
  "23",
  "61",
  "63",
  "210",
  "212",
  "610",
  "612",
  "201",
  "203",
  "241",
  "243",
  "2010",
  "2012",
  "2410",
  "2412",
];
const excludedCells = [
  "22",
  "24",
  "41",
  "42",
  "43",
  "44",
  "62",
  "64",
  "81",
  "82",
  "83",
  "84",
  "211",
  "213",
  "410",
  "411",
  "412",
  "413",
  "611",
  "613",
  "810",
  "811",
  "812",
  "813",
  "202",
  "204",
  "221",
  "222",
  "223",
  "224",
  "242",
  "244",
  "261",
  "262",
  "263",
  "264",
  "2011",
  "2013",
  "2210",
  "2211",
  "2212",
  "2213",
  "2411",
  "2413",
  "2610",
  "2611",
  "2612",
  "2613",
];

function paintCell(pair) {
  if (p1Area.includes(pair)) {
    return "blue";
  } else if (p2Area.includes(pair)) {
    return "green";
  } else if (p3Area.includes(pair)) {
    return "red";
  } else if (p4Area.includes(pair)) {
    return "yellow";
  }
  
  return "white";
}

function expandHomeCell(pair) {
  if (expandableCells.includes(pair)) {
    return "span 2";
  }
  return
}

function createBoard() {
  var cells = []
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      var pair = (2 * x).toString() + y.toString();

      var expand = expandHomeCell(pair);
      
      var cellStyle = {
        backgroundColor: paintCell(pair),
        gridColumnStart: expand,
        gridRowStart: expand
      }

      if (!excludedCells.includes(pair)) {
        cells.push(<div key={x.toString()+'/'+y.toString()} style={cellStyle} className={"Cell div" + pair} >{x + " " + y}</div>);
      }
    }
  }
  return cells;
}

function Board() {
  return (
    <div className="Board">
      {createBoard()}
    </div>
  )
}

export default Board;
