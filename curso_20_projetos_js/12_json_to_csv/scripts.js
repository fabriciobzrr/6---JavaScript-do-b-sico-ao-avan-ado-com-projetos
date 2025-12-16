// Selecionando elementos
const converterForm = document.querySelector("#converterForm")
const converterInput = document.querySelector("#converterInput")
const toJsonBtn = document.querySelector("#toJson")
const toCsvBtn = document.querySelector("#toCsv")

function jsonToCsv(json) {
  // Percorre o array e lista todas as chaves do objeto chamado json no índice 0 retornando um array com essas chaves
  const headers = Object.keys(json[0])
  // Cria um array vazio para adicionar novos elementos
  const csvRows = []

  // Adiciona ao array csvRows os dados de headers extraidos
  csvRows.push(headers.join(","))

  // Percorre o array do json recebido na função - row = objetos / json = array de objetos
  for (const row of json) {
    // Armazena na constante values um array com os valores das chaves de headers onde header aponta para a chave (id, name, age)
    const values = headers.map((header) => {
      // Armazena na variável value os valores das chaves de headers através do objeto(row) e do indice(header)
      let value = row[header]

      if (value === null || value === undefined) {
        value = ""
      } else if (typeof value === "object") {
        value = JSON.stringify(value)
      }
      // Retorna os valores das iterações. Em cada iteração retorna um array e armazena na constante values.
      return value
    })
    // Une o conteúdo da constante values em string separadas por vírgula e o adiciona ao array csvRows
    csvRows.push(values.join(","))
  }
  // Retorna a string dentro csvRows separada por quebra de linha com "\n"
  return csvRows.join("\n")
}

function csvToJson(csv) {
  const lines = csv.split("\n")
  const headers = lines[0].split(",")
  const json = []
  console.log(headers)

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",")
    const row = {}
    for (let j = 0; j < headers.length; j++) {
      let value = values[j]

      if (value[0] === "{" || value[0] === "[") {
        value = JSON.parse(value)
      }

      row[headers[j]] = value
    }
    json.push(row)
  }
  return json
}

toCsvBtn.addEventListener("click", function () {
  const json = JSON.parse(converterInput.value.trim())
  const csv = jsonToCsv(json)

  downloadCsv(csv)
})

toJsonBtn.addEventListener("click", function () {
  const csv = converterInput.value.trim()
  const json = csvToJson(csv)

  displayJson(json)
})

function downloadCsv(csv) {
  const downloadLink = document.createElement("a")
  downloadLink.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
  )

  downloadLink.setAttribute("download", "data.csv")
  downloadLink.style.display = "none"

  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

function displayJson(json) {
  const resultArea = document.createElement("pre")
  resultArea.textContent = JSON.stringify(json, null, 1)
  document.body.appendChild(resultArea)
}
