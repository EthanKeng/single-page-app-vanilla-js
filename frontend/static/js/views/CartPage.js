import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CartPage");
    }

    async getHtml() {
        return `
            <h1>CartPage</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}