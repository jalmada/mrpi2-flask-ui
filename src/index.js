import FormContainer from "./js/components/container/FormContainer.jsx";
import React from "react";

import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowRight, faArrowDown, faArrowLeft, faChessBoard, faMoon as DarkMoon, faLightbulb as DarkLightbulb, faSun, faCamera} from '@fortawesome/free-solid-svg-icons'
import { faMoon as LightMoon, faLightbulb as LightLightbulb} from '@fortawesome/free-regular-svg-icons'

library.add(faArrowUp, faArrowRight, faArrowDown, faArrowLeft, faChessBoard, DarkMoon, LightMoon, LightLightbulb, DarkLightbulb, faSun, faCamera);

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;