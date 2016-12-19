let codeMirror = require("CodeMirror");

// TODO get javascript highlighting working.
codeMirror.fromTextArea(document.getElementById("codebox"), {
  lineNumbers: true,
  theme: "ambiance",
  mode:  "javascript"
});
