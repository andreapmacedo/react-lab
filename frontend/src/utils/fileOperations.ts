export const downloadFile = (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'clientes.txt';
  a.click();
  URL.revokeObjectURL(url);
}




export const processUploadedFile = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      try {
        const jsonData = JSON.parse(event.target.result);
        setClients(jsonData);
      } catch (err) {
        alert("Erro ao processar o arquivo.");
      }
    };
    reader.readAsText(file);
  }
}



// export const processUploadedFile = (file, callback) => {
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function(event) {
//       try {
//         const jsonData = JSON.parse(event.target.result);
//         callback(jsonData);
//       } catch (err) {
//         alert("Erro ao processar o arquivo.");
//       }
//     };
//     reader.readAsText(file);
//   }
// }