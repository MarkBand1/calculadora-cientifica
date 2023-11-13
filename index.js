function appendCharacter(character) {
  document.getElementById("display").value += character;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  var currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculateResult() {
  try {
    var result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
   function appendCharacter(character) {
     document.getElementById("display").value += character;
   }

   function clearDisplay() {
     document.getElementById("display").value = "";
   }

   function backspace() {
     var currentDisplay = document.getElementById("display").value;
     document.getElementById("display").value = currentDisplay.slice(0, -1);
   }

   function calculateResult() {
     try {
       var result = eval(document.getElementById("display").value);
       document.getElementById("display").value = result;
     } catch (error) {
       document.getElementById("display").value = "Error";
     }
   }
   function appendCharacter(character) {
     document.getElementById("display").value += character;
   }
   //factorial
    function appendCharacter(character) {
      document.getElementById("display").value += character;
    }

    function calculateFactorial() {
      try {
        var expression = document.getElementById("display").value;
        var number = eval(expression);

        if (Number.isInteger(number) && number >= 0) {
          var result = factorial(number);
          document.getElementById("display").value = result;
        } else {
          document.getElementById("display").value =
            "Error: Solo se puede calcular el factorial de un número entero no negativo.";
        }
      } catch (error) {
        document.getElementById("display").value = "Error";
      }
    }

    function factorial(n) {
      return n === 0 ? 1 : n * factorial(n - 1);
    }
