export const comboboxStyles = `
*, *::before, *::after {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  list-style-position: outside;
}

.combo {
  display: block;
  background: #FBFBFB;
  box-sizing: border-box;
  border: solid 4px transparent;
  border-right: solid 4px transparent;
  border-top: solid 2px transparent;
  border-bottom: solid 2px transparent;
  position: relative;
  font-family: Gilroy, "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 110%;
  line-height: 1.0;
}

img {
  position: absolute;
  margin-top: 8px;
  margin-left: 8px;
}

.combo::after {
  border-bottom: 1px solid rgba(0,0,0,.3);
  border-right: 1px solid rgba(0,0,0,.3);
  content: '';
  display: block;
  height: 8px;
  width: 8px;
  pointer-events: none;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%) rotate(45deg);
}

.combo-input {
  background-color: #FBFBFB;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 4px;
  display: block;
  font-size: 16px;
  padding: 8px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

.combo-input:focus {
  outline: none;
  border-color: #881F1A;
}

.combo-menu {
  background-color: #FBFBFB;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
  display: none;
  max-height: 240px;
  overflow-y:scroll;
  left: 0;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 100;
  transition: all 0.5s;
  margin-top:0;
}

.combo-menu > li {
  padding: 8px 0;
}

.combo-menu > li:hover {
  background: #f0f0f0;
  -webkit-animation: list-fade-in 0.2s;
  -moz-animation: list-fade-in 0.2s;
  -o-animation: list-fade-in 0.2s;
  animation: list-fade-in 0.2s;
}

.open .combo-menu {
  display: block;
}

/*
.combo-option {
  padding: 10px 12px 12px;
}

.combo-option.option-current,
.combo-option:hover {
  background-color: #D9D9D9;
  cursor: pointer;
}

.combo-option.option-selected {
  padding-right: 30px;
  position: relative;
}
*/

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #D9D9D9;
}
::-webkit-scrollbar-thumb {
  background: #881F1A;
}
::-webkit-scrollbar-thumb:hover {
  background: #E82F37;
}

@-webkit-keyframes list-fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes list-fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes list-fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes list-fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
`
