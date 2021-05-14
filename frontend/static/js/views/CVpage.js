import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CVpage");
    }

    async getHtml() {
        return `
            <h1>CVpage</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}