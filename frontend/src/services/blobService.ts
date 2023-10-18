// blobService.ts
export const downloadFile = (data: any) => {
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  // a.download = 'clientes.txt';
    // Formatação da data para "YYYY-MM-DD"
    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime();
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
  
    a.download = `backup_archeng_${formattedDate}_${currentTimestamp}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

export const processUploadedFile = (e: React.ChangeEvent<HTMLInputElement>, callback: (data: any) => void) => {
  const file = e.target.files ? e.target.files[0] : null;
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      try {
        const jsonData = JSON.parse(event.target.result as string);
        callback(jsonData);
      } catch (err) {
        alert("Erro ao processar o arquivo.");
      }
    };
    reader.readAsText(file);
  }
}
