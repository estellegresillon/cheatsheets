export const css = [
  { 
    name: "drop-shadow",
    descr: "Have a shadow of the exact shape of your div",
    content: [
      "p {",
      "   filter: drop-shadow(0 0 30px #333);",
      "}"
    ]
  },
  { 
    name: "object-fit",
    descr: "Image cover horizontally and vertically",
    content: [
      ".img-container {",
      "   width: 100%;",
      "   height: 25%;",
      "   object-fit: cover;",
      "   overflow: hidden;",
      " ",
      "   img {",
      "     width: 100%;",
      "     height: auto;",
      "   }",
      "}"
    ]
  },
];
