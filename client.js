import { render, mount } from "./index.js";

const renderContext = window.document;

const HelloTitle = render(renderContext, "h1", null, "Hello");

const Paragraph = render(renderContext, "p", null, "<span class='toto'>World !</span> lorem ipsum dolor sit amet");

let app = render(renderContext, "section", null, HelloTitle);

/* You can do this one when the first render implementation is OK */
app = render(renderContext, "section", null,[HelloTitle, Paragraph]);

mount(renderContext, "app", app);

