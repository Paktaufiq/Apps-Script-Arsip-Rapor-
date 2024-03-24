function doGet() {
  var template = HtmlService.createTemplateFromFile('Page');
  return template.evaluate();
}

function searchNISN(nisn) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RAPOR");
  var data = sheet.getDataRange().getValues();
  var result = [];

  for (var i = 1; i < data.length; i++) { 
    if (data[i][1] == nisn) { 
      result.push(data[i]);
    }
  }

  if (result.length > 0) {
    return result;
  } else {
    return "Data Tidak Ditemukan";
  }
}
