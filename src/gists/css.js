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
  { 
    name: "gradient-stroke",
    descr: "Text with gradient stroke",
    content: [
      ".gradient-stroke {",
      "   background: -webkit-linear-gradient(0deg, #5a80ef 3%, #34d5b0 100%);",
      "   -webkit-background-clip: text;",
      "   -webkit-text-stroke: 2px transparent;",
      "   color: #F6FDFF;",
      "}"
    ]
  },
  { 
    name: "parallax",
    descr: "Make a parallax on a <div> with a fixed background",
    content: [
      ".parallax {",
      "   /* Set the image used and a specific height */",
      "   background-image: url('/image.jpg');",
      "   height: 70vh;",
      " ",
      "   /* Create the parallax scrolling effect */",
      "   background-attachment: fixed;",
      "   background-position: center;",
      "   background-repeat: no-repeat;",
      "   background-size: cover;",
      "}"
    ]
  },
  { 
    name: "colors with CSS",
    descr: "Change a picture contrast, saturation or other settings",
    content: [
      "hue($color)         // → 0deg..360deg",
      "saturation($color)  // → 0%..100%",
      "lightness($color)   // → 0%..100%",
      "alpha($color)       // → 0..1 (aka opacity())",
      " ",
      "darken($color, 5%) // lighten, saturate, desaturate",
      "grayscale($color)",
      "adjust-hue($color, 15deg)",
      "complement($color)    // like adjust-hue(_, 180deg)",
      "invert($color)",
      "fade-in($color, .5)   // aka opacify()",
      "fade-out($color, .5)  // aka transparentize() - halves the opacity",
      "rgba($color, .5)      // sets alpha to .5",
      " ",
      "adjust-color($color, $blue: 5)",
      "adjust-color($color, $lightness: -30%)   // like darken(_, 30%)",
      "scale-color($color, $lightness: 50%)",
      "change-color($color, $hue: 180deg)",
    ]
  },
  { 
    name: "mixins",
    descr: "default / with a variable / with a default value",
    content: [
      "@mixin heading-font {",
      "   font-family: sans-serif;",
      "   font-weight: bold;",
      "}",
      "h1 {",
      "   @include heading-font;",
      "}",
      " ",
      "@mixin font-size($n) {",
      "   font-size: $n * 1.2em;",
      "}",
      "body {",
      "   @include font-size(2);",
      "}",
      " ",
      "@mixin pad($n: 10px) {",
      "   padding: $n;",
      "}",
      "body {",
      "   @include pad(15px);",
      "}"
    ]
  },
  { 
    name: "detect dark mode",
    descr: "detect light or dark mode from iOs",
    content: [
      "@media (prefers-color-scheme: dark) {",
      "   body {",
      "     background-color: rgb(32, 32, 32);",
      "     color: #fff;",
      "   }",
      "}",
      " ",
      "@media (prefers-color-scheme: light) {",
      "   body {",
      "     color: rgb(32, 32, 32);",
      "     background-color: #fff;",
      "   }",
      "}",
    ]
  },
  { 
    name: "feature queries",
    descr: "check if the browser supports a specific webkit",
    content: [
      "@supports (initial-letter: 4) or (-webkit-initial-letter: 4) {",
      "   p::first-letter {",
      "     -webkit-initial-letter: 4; // initial letter of a height of 4 lines",
      "     initial-letter: 4",
      "   }",
      "}",
    ]
  },
  { 
    name: "set outline to 0",
    descr: "hide chrome's blue outline when focusing on an input",
    content: [
      "*,",
      "::after,",
      "::before {",
      "   outline: 0;",
      "}",
    ]
  },
  { 
    name: "hide scrollbars",
    descr: "hide every scrollbars, especially the ugly ones in linux :)",
    content: [
      "*::-webkit-scrollbar {",
      "   display: none;",
      "}",
    ]
  },
  { 
    name: "selection style",
    descr: "change background color and color of text selection",
    content: [
      "::selection {",
      "   background: #ff388a;",
      "   color: white;",
      "}",
    ]
  },
  { 
    name: "text with stroke",
    descr: "transparent text with a stroke",
    content: [
      ".message-stroke {",
      "   -webkit-text-stroke-width: 1px;",
      "   -webkit-text-fill-color: rgba(0, 0, 0, 0);",
      "}",
    ]
  },
  { 
    name: "mix-blend-mode",
    descr: "apply fusion mode effects (photoshop-like layers)",
    content: [
      "div {",
      "   mix-blend-mode: screen; // overlay, darken, saturation...",
      "}",
    ]
  },
  { 
    name: "box-decoration-break",
    descr: "fit text decoration exactly to text",
    content: [
      "p {",
      "   -webkit-box-decoration-break: clone;",
      "   box-decoration-break: clone;",
      "}",
    ]
  },
  { 
    name: "user-select",
    descr: "select all text with just ONE click or disable",
    content: [
      "p {",
      "   user-select: all;",
      "}",
      " ",
      "p {",
      "   user-select: none;",
      "}",
    ]
  },
  { 
    name: "masonry grid",
    descr: "build a masonry grid with CSS only",
    content: [
      ".masonry {",
      "   margin: 1.5em 0;",
      "   padding: 0;",
      "   -moz-column-gap: 1.5em;",
      "   -webkit-column-gap: 1.5em;",
      "   column-gap: 1.5em;",
      "   font-size: .85em;",
      "   column-count: 3;",
      " ",
      "   .masonry-card {",
      "     display: inline-block;",
      "     background: #fff;",
      "     padding: 1em;",
      "     margin: 0 0 1.5em;",
      "     width: 100%;",
      "     transition: 1s ease all;",
      "     box-sizing: border-box;",
      "     -moz-box-sizing: border-box;",
      "     -webkit-box-sizing: border-box;",
      "     box-shadow: 2px 2px 4px 0 #ccc;",
      "   }",
      "}"
    ]
  },
];
