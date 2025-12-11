class TimesTableApp {
    constructor (outputElementId) {
        this.outputElement = document.getElementById(outputElementId);
    }

    processSelection (number) {
        number = parseInt(number);
        this.displayNumbers (number);
    }

    displayNumbers (num) {
        let html = "";

        for (let index = 1; index <= 12; index++) {
            const value = num * index;

            html += '<span class="p-2 border rounded bg-light text-center fs-5 flex-grow-0 flex-shrink-0 me-2">';
            html += value;
            html += '</span>';
        }
        
        this.outputElement.innerHTML = html;
    }
}

// Create a global instance so HTML can access it
const app = new TimesTableApp ("output");