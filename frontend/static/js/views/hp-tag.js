import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("HP-tag");
    }

    async getHtml() {
        return `
            <h1>HP</h1>
            <p>You are viewing the HP!</p>
        `;
    }
}