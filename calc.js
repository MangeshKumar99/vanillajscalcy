function calc() {
    let expression = "";
    return function (e) {
      if (e.target.id !== "keypad") {
        if (
          e.target.firstChild.data !== "=" &&
          e.target.firstChild.data !== "DEL"
        ) {
          expression = expression + e.target.firstChild.data;
          document.getElementById("calcyScreen").innerText = expression;
        }
        if (e.target.firstChild.data === "RESET") {
          document.getElementById("calcyScreen").innerText = "";
          expression = "";
        }
        if (e.target.firstChild.data === "DEL") {
          expression = expression.slice(0, -1);
          document.getElementById("calcyScreen").innerText = expression;
        }
        if (e.target.firstChild.data === "=") {
          if (
            expression[expression.length - 1] == "+" ||
            expression[expression.length - 1] == "-" ||
            expression[expression.length - 1] == "x" ||
            expression[expression.length - 1] == "/"
          ) {
            alert("Invalid expression, pls try again");
          } else {
            expression = expression.replace("x", "*");
            document.getElementById("calcyScreen").innerText = eval(expression);
            expression = eval(expression).toString();
          }
        }
      }
    };
  }
  const onKeyPress = calc();
  
  const onToggle = (e) => {
    const body = document.getElementById("body");
    const logo = document.getElementById("logo");
    const theme = document.getElementById("theme");
    const number = document.getElementById("number");
    const toggle = document.getElementById("toggle");
    const theme1 = document.getElementById("theme1");
    const theme2 = document.getElementById("theme2");
    const theme3 = document.getElementById("theme3");
    const calcyScreen = document.getElementById("calcyScreen");
    const keypad = document.getElementById("keypad");
  
    const keys = document.querySelectorAll(
      "#key1, #key2, #key3, #key4, #key5, #key6, #key7, #key8, #key9, #key0, #keydot, #keyplus, #keyminus, #keymultiply, #keydivide"
    );
    const del = document.getElementById("del");
    const reset = document.getElementById("reset");
    const equal = document.getElementById("equal");
  
    if (e.target.id === "theme1") {
      body.setAttribute("style", "background-color:#3A4764;");
      calcyScreen.setAttribute(
        "style",
        "background-color:#202034; color:#FFFFFF;"
      );
      number.setAttribute("style", "color:#FFFFFF;");
      toggle.setAttribute("style", "background-color:#202034;");
      keypad.setAttribute("style", "background-color:#232C43;");
  
      for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute("style", "background-color:#EAE3DC; color:#3B414E");
      }
      reset.setAttribute("style", "background-color:#6B789E;");
      del.setAttribute("style", "background-color:#6B789E;");
      equal.setAttribute("style", "background-color:#CA5502");
      logo.setAttribute("style", "color:#FFFFFF;");
      theme.setAttribute("style", "color:#FFFFFF;");
  
      theme2.className = "";
      theme3.className = "";
      theme2.setAttribute("style", "width: 1rem; height: 1rem; color:#202034;");
      theme3.setAttribute("style", "width: 1rem; height: 1rem; color:#202034;");
      theme1.setAttribute(
        "style",
        "width: 1rem; height: 1rem; background-color: #ff4500; color:#ff4500; font-size:12px; border-radius:0.75rem;"
      );
    }
  
    if (e.target.id === "theme2") {
      body.setAttribute("style", "background-color:#E6E6E6;");
      calcyScreen.setAttribute(
        "style",
        "background-color:#EDEDED; color:#000000;"
      );
      number.setAttribute("style", "color:#000000;");
      toggle.setAttribute("style", "background-color:#D1CCCC;");
      keypad.setAttribute("style", "background-color:#D1CCCC;");
  
      for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute("style", "background-color:#E5E4E1;");
      }
      equal.setAttribute("style", "background-color:#CA5502;");
      reset.setAttribute("style", "background-color:#377F86;");
      del.setAttribute("style", "background-color:#377F86;");
      logo.setAttribute("style", "color:#000000;");
      theme.setAttribute("style", "color:#000000;");
  
      theme1.className = "";
      theme3.className = "";
      theme1.setAttribute("style", "width: 1rem; height: 1rem; color:#D1CCCC;");
      theme3.setAttribute("style", "width: 1rem; height: 1rem; color:#D1CCCC;");
      theme2.setAttribute(
        "style",
        "width: 1rem; height: 1rem; background-color: #ff4500; color:#ff4500; font-size:12px; border-radius:0.75rem;"
      );
    }
    if (e.target.id === "theme3") {
      body.setAttribute("style", "background-color:#160628;");
      calcyScreen.setAttribute(
        "style",
        "background-color:#1D0934; color:#FFE53D;"
      );
      number.setAttribute("style", "color:#FFE53D;");
      toggle.setAttribute("style", "background-color:#1D0934;");
      keypad.setAttribute("style", "background-color:#1D0934;");
  
      for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute("style", "background-color:#341C4F; color:#FFE53D");
      }
  
      equal.setAttribute("style", "background-color:#00E0D1; color:#000000");
      reset.setAttribute("style", "background-color:#58077D;");
      del.setAttribute("style", "background-color:#58077D;");
      logo.setAttribute("style", "color:#FFE53D;");
      theme.setAttribute("style", "color:#FFE53D;");
      theme1.className = "";
      theme2.className = "";
      theme1.setAttribute("style", "width: 1rem; height: 1rem; color:#202034;");
      theme2.setAttribute("style", "width: 1rem; height: 1rem; color:#202034;");
      theme3.setAttribute(
        "style",
        "width: 1rem; height: 1rem; background-color: #00E0D1; color:#00E0D1; font-size:1px; border-radius:0.75rem;"
      );
    }
  };
  