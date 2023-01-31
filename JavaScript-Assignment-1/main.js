const data = [
    ["Name", "Age", "DOB", "Email", "Company"],
    ["Abhinav", "21", "16-07-2001", "abhinav@gamil.com", "Gemini Solutions"],
    ["Arshit", "22", "12-02-2000", "arshit@gamil.com", "Gemini Solutions"],
    ["Abhishek", "20", "10-07-2002", "abhishek@gamil.com", "Gemini Solutions"],
    ["Anmol", "21", "23-12-2001", "anmol@gamil.com", "Gemini Solutions"]
];

(function head() {
    var h = document.createElement("H1");
    var t = document.createTextNode("Dynamic Table");
    h.appendChild(t);
    document.body.appendChild(h);
    h.style.textAlign = "center";
})();

(function createTable() {

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    const row = document.createElement("tr");
    let rows = 5;
    let cols = 5;


    for (let i = 0; i < rows; i++) {

        const row = document.createElement("tr");

        for (let j = 0; j < cols; j++) {

            const cell = document.createElement("td");
            cell.style.cssText = "padding: 10px; text-align: center;"
            if (i == 0) {
                cell.style.fontWeight = "bold";
            }
            const cellText = document.createTextNode(`${data[i][j]}`);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }


    tbl.appendChild(tblBody);

    document.body.appendChild(tbl);
    tbl.style.cssText = 'margin: 100px auto ;  border-collapse: collapse; font-size: 32px; width: 100%;'
    tbl.setAttribute("border", "10");

})();
