import FormContainer from "./js/components/container/FormContainer.jsx";
import React from "react";

import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowRight, faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowUp, faArrowRight, faArrowDown, faArrowLeft);

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;