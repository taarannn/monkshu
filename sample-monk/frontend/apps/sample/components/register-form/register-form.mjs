import { util } from "/framework/js/util.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { signup } from "../../js/auth.mjs"

const COMPONENT_PATH = util.getModulePath(import.meta);

async function elementConnected(host) {
}

async function elementRendered(host, initialRender) {
}


async function submitReq(event, element) {

    
    event.preventDefault(0);

    // getting shadowRoot using contained element
    const shadowRoot = register_form.getShadowRootByContainedElement(element);

    // getting user details
    const firstName = shadowRoot.querySelector("#first").value;
    const lastName = shadowRoot.querySelector("#last").value;
    const password = shadowRoot.querySelector("#password").value;
    const email = shadowRoot.querySelector("#email").value;

    
    const name = firstName + lastName;

    
    const response = await signup(email, name, password)

    console.log(response)
}

export const register_form = { submitReq, trueWebComponentMode: true, elementConnected, elementRendered };
monkshu_component.register("register-form", `${COMPONENT_PATH}/register-form.html`, register_form);