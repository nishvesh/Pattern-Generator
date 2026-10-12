// Theme Toggle Logic
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');
const body = document.getElementById('body');

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.setAttribute('data-theme', 'dark');
    themeLabel.textContent = 'Dark Mode';
  } else {
    body.removeAttribute('data-theme');
    themeLabel.textContent = 'Light Mode';
  }
});

// Mode Toggle Logic
let currentMode = 'geometric'; // 'geometric' or 'custom'
const modeToggleBtn = document.getElementById('modeToggleBtn');
const modeToggleTooltip = document.getElementById('modeToggleTooltip');
const geometricControls = document.getElementById('geometricControls');
const customControls = document.getElementById('customControls');
const mainDescription = document.getElementById('mainDescription');

modeToggleBtn.addEventListener('click', () => {
  if (currentMode === 'geometric') {
    currentMode = 'custom';
    modeToggleTooltip.textContent = 'Geometric generator';
    geometricControls.style.display = 'none';
    customControls.style.display = 'block';
    mainDescription.textContent = 'Convert your text or numbers into large, star-built ASCII patterns.';
  } else {
    currentMode = 'geometric';
    modeToggleTooltip.textContent = 'Custom pattern generation';
    geometricControls.style.display = 'block';
    customControls.style.display = 'none';
    mainDescription.textContent = 'Create Simple Geometric Patterns Using Predefined Shapes.';
  }
});

const patternMode = document.getElementById("modeSelect");

const generateBtn = document.getElementById("generateBtn");
const patternInput = document.getElementById("patternInput");
const selectShape = document.getElementById("selectShape");
const patternCode = document.getElementById("patternCode");
const customTextInput = document.getElementById("customTextInput");

generateBtn.addEventListener("click", function () {
  if (currentMode === 'custom') {
    const text = customTextInput.value;
    if (!text) {
      patternCode.textContent = "Please enter some text!";
      return;
    }
    patternCode.textContent = generateCustomPattern(text);
  } else {
    const size = Number(patternInput.value);
    const shape = selectShape.value;
    const mode = patternMode.value;

    console.log("Mode: ", mode);
    console.log("Size: ", size);
    console.log("Shape: ", shape);

    if (mode === "geometric") {
      if (shape === "square") {
        let pattern = "";
        for (let i = 0; i < size; i++) {
          let row = "";
          for (let j = 0; j < size; j++) {
            row += "*  ";
          }
          pattern += row + "\n";
        }
        patternCode.textContent = pattern;
      } else if (shape === "rectangle") {
        let pattern = "";

        const rows = size;
        const columns = size * 2;

        for (let i = 0; i < rows; i++) {
          let row = "";

          for (let j = 0; j < columns; j++) {
            row += "* ";
          }

          pattern += row + "\n";
        }

        patternCode.textContent = pattern;
      } else if (shape === "triangle") {
        let pattern = "";

        for (let i = 1; i <= size; i++) {
          let row = "";

          for (let j = 1; j <= i; j++) {
            row += "*";
          }

          pattern += row + "\n";
        }

        patternCode.textContent = pattern;
      } else if (shape === "pyramid") {
        let pattern = "";

        for (let i = 1; i <= size; i++) {
          let row = "";

          for (let j = 1; j <= size - i; j++) {
            row += " ";
          }

          for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
          }

          pattern += row + "\n";
        }

        patternCode.textContent = pattern;
      } else if (shape === "diamond") {
        let pattern = "";

        for (let i = 1; i <= size; i++) {
          let row = "";

          for (let j = 1; j <= size - i; j++) {
            row += " ";
          }

          for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
          }

          pattern += row + "\n";
        }

        for (let i = size - 1; i >= 1; i--) {
          let row = "";

          for (let j = 1; j <= size - i; j++) {
            row += " ";
          }

          for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
          }

          pattern += row + "\n";
        }

        patternCode.textContent = pattern;
      } else if (shape === "hourglass") {
        let pattern = "";

        for (let i = size; i >= 1; i--) {
          let row = "";

          for (let j = 1; j <= size - i; j++) {
            row += " ";
          }

          for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
          }

          pattern += row + "\n";
        }

        for (let i = 2; i <= size; i++) {
          let row = "";

          for (let j = 1; j <= size - i; j++) {
            row += " ";
          }

          for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
          }

          pattern += row + "\n";
        }

        patternCode.textContent = pattern;
      } else if (shape === "hollowsquare") {
        let pattern = "";

        for (let i = 1; i <= size; i++) {
          let row = "";

          for (let j = 1; j <= size; j++) {
            if (i === 1 || i === size || j === 1 || j === size) {
              row += "*  ";
            } else {
              row += "   ";
            }
          }

          pattern += row + "\n";
        }

        patternCode.textContent = pattern;
      }
    }
  }
});
