var li1 = parseInt(prompt("Insira o número de linhas da primeira matriz:"));
var col1 = parseInt(prompt("Insira o número de colunas da primeira matriz:"));
var li2 = parseInt(prompt("Insira o número de linhas da segunda matriz:"));
var col2 = parseInt(prompt("Insira o número de colunas da segunda matriz"));

if (col1 == col2 && li1 == li2) {
    var Matriz1 = new Array(li1, col1);
    var Matriz2 = new Array(li2, col2);

    for (var i = 0; i < li1; i++) {
        Matriz1[i] = []
        for (j = 0; j < col1; j++) {
            Matriz1[i][j] = (parseInt(Math.random() * 10))
        }
    }

    for (var i = 0; i < li2; i++) {
        Matriz2[i] = []
        for (var j = 0; j < col2; j++) {
            Matriz2[i][j] = (parseInt(Math.random() * 10));
        }
    }

    var matrizAdicao = new Array(li1, col1);

    for (var i = 0; i < li1; i++) {
        matrizAdicao[i] = []
        for (var j = 0; j < col2; j++) {
            matrizAdicao[i][j] = Matriz1[i][j] + Matriz2[i][j];
        }
    }

    var matrizSub = new Array(li1, col1);

    for (var i = 0; i < li1; i++) {
        matrizSub[i] = []
        for (var j = 0; j < col2; j++) {
            matrizSub[i][j] = Matriz1[i][j] - Matriz2[i][j];
        }
    }


    var matrizTranspos1 = new Array(li1, col1);
    var matrizTranspos2 = new Array(li2, col2);

    for (var i = 0; i < li1; i++) {
        matrizTranspos1[i] = []
        for (var j = 0; j < col1; j++) {
            matrizTranspos1[i][j] = Matriz1[j][i];
        }
    }

    for (var i = 0; i < li2; i++) {
        matrizTranspos2[i] = []
        for (var j = 0; j < col2; j++) {
            matrizTranspos2[i][j] = Matriz2[j][i];
        }
    }



    ////////////////////////////

    var table1 = "<table>";


    for (var i = 0; i < li1; i++) {
        table1 += "<tr>";
        for (var j = 0; j < col2; j++) {
            table1 += "<td>" + Matriz1[i][j] + "</td>";
        }
        table1 += "</tr>";
    }
    table1 += "</table>";

    var table2 = "<table>";

    for (var i = 0; i < li1; i++) {
        table2 += "<tr>";
        for (var j = 0; j < col2; j++) {
            table2 += "<td>" + Matriz2[i][j] + "</td>";
        }
        table2 += "</tr>";
    }
    table2 += "</table>";



    var tableAdi = "<table>";

    for (var i = 0; i < li1; i++) {
        tableAdi += "<tr>";
        for (var j = 0; j < col2; j++) {
            tableAdi += "<td>" + matrizAdicao[i][j] + "</td>";
        }
        tableAdi += "</tr>";
    }

    tableAdi += "</table>";



    var tableSub = "<table>";

    for (var i = 0; i < li1; i++) {
        tableSub += "<tr>";
        for (var j = 0; j < col2; j++) {
            tableSub += "<td>" + matrizSub[i][j] + "</td>";
        }
        tableSub += "</tr>";
    }

    tableSub += "</table>";



    var tableTranspos1 = "<table>";

    for (var i = 0; i < li1; i++) {
        tableTranspos1 += "<tr>";
        for (var j = 0; j < col1; j++) {
            tableTranspos1 += "<td>" + matrizTranspos1[i][j] + "</td>";
        }
        tableTranspos1 += "</tr>";
    }
    tableTranspos1 += "</table>";

    var tableTranspos2 = "<table>";

    for (var i = 0; i < li2; i++) {
        tableTranspos2 += "<tr>";
        for (var j = 0; j < col2; j++) {
            tableTranspos2 += "<td>" + matrizTranspos2[i][j] + "</td>";
        }
        tableTranspos2 += "</tr>";
    }
    tableTranspos2 += "</table>";

} else {
    alert("ERRO: Não foi possível somar e subtrair as Matrizes, tamanhos inválidos")
}

if (col1 = li2) {
    var matrizMulti = new Array(col1, li2);

    for (var i = 0; i < li1; i++) {
        matrizMulti[i] = []
        for (var j = 0; j < col2; j++) {
            let multi = 0;
            for (var k = 0; k < li1; k++) {
                multi += Matriz1[i][k] * Matriz2[k][j];
            }
            matrizMulti[i][j] = multi;
        }
    }


    var tableMulti = "<table>";

    for (var i = 0; i < li1; i++) {
        tableAdi += "<tr>";
        for (var j = 0; j < col2; j++) {
            tableMulti += "<td>" + matrizMulti[i][j] + "</td>";
        }
        tableMulti += "</tr>";
    }
    tableMulti += "</table>";
} else {
    alert("ERRO: Não foi possível multiplicar, tamnhos não permitidos.")
}


document.write("<h1> Primeira Matriz</h1>");
document.write(table1);

document.write("<h1> Segunda Matriz</h1>");
document.write(table2);

document.write("<h1> Soma das Matrizes</h1>");
document.write(tableAdi);

document.write("<h1> Subtração das Matrizes</h1>");
document.write(tableSub);

document.write("<h1> Multiplicação das Matrizes</h1>");
document.write(tableMulti);

document.write("<h1> Transposição da primeira Matriz</h1>");
document.write(tableTranspos1);

document.write("<h1> Transposição da segunda Matriz</h1>");
document.write(tableTranspos2 + "<br> <Br>");

console.table(Matriz1);
console.table(Matriz2);
console.table(matrizAdicao);
console.table(matrizSub);
console.table(matrizMulti);
console.table(matrizTranspos1);
console.table(matrizTranspos2);



