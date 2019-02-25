// create an array with nodes
var nodes = new vis.DataSet([
  {
    id: 1,
    label: `0x00405a39:\nand    ebx, 0xfd<-0x03>\nlea    ecx, [esp + 0x34]\nmov    DWORD PTR ss:[esp + 0x10], ebx\ncall   0x00403450<<Func>>`,
    shape: "box",
    size: 150,
    font: {
      align: "left",
      face: "monospace"
    }
  },
  {
    id: 2,
    label: `0x00405a39:\nand    ebx, 0xfd<-0x03>\nlea    ecx, [esp + 0x34]\nmov    DWORD PTR ss:[esp + 0x10], ebx\ncall   0x00403450<<Func>>`,
    shape: "box",
    size: 150,
    font: {
      align: "left",
      face: "monospace"
    }
  },
  {
    id: 3,
    label: `0x00405a39:\nand    ebx, 0xfd<-0x03>\nlea    ecx, [esp + 0x34]\nmov    DWORD PTR ss:[esp + 0x10], ebx\ncall   0x00403450<<Func>>`,
    shape: "box",
    size: 150,
    font: {
      align: "left",
      face: "monospace"
    }
  },
  {
    id: 4,
    label: `0x00405a39:\nand    ebx, 0xfd<-0x03>\nlea    ecx, [esp + 0x34]\nmov    DWORD PTR ss:[esp + 0x10], ebx\ncall   0x00403450<<Func>>`,
    shape: "box",
    size: 150,
    font: {
      align: "left",
      face: "monospace"
    }
  },
  {
    id: 5,
    label: `0x00405a39:\nand    ebx, 0xfd<-0x03>\nlea    ecx, [esp + 0x34]\nmov    DWORD PTR ss:[esp + 0x10], ebx\ncall   0x00403450<<Func>>`,
    shape: "box",
    size: 150,
    font: {
      align: "left",
      face: "monospace"
    }
  }
]);

// create an array with edges

let arrows = {
  to: {
    enabled: true
  }
};
var edges = new vis.DataSet([
  { from: 1, to: 3, arrows, smooth: { type: "cubicBezier" } },
  { from: 1, to: 2, arrows, smooth: { type: "cubicBezier" } },
  { from: 2, to: 4, arrows, smooth: { type: "cubicBezier" } },
  { from: 2, to: 5, arrows, smooth: { type: "cubicBezier" } }
]);

// create a network
var container = document.getElementById("mynetwork");

// provide the data in the vis format
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
  manipulation: false,
  height: "90%",
  layout: { hierarchical: { enabled: true, levelSeparation: 300 } },
  physics: {
    hierarchicalRepulsion: { nodeDistance: 300 },
    solver: "hierarchicalRepulsion"
  },
  edges: { smooth: false }
};

// initialize your network!
var network = new vis.Network(container, data, options);
