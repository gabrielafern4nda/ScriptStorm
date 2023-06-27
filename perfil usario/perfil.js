
function showImagePreview(event) {
  const input = event.target;
  const file = input.files[0]; /*abre a pasta*/
  const reader = new FileReader(); /*le o arquivo*/

  reader.onload = function(e) { /*função aparecer imagem*/
    const imagePreview = document.getElementById('image-preview');
    imagePreview.src = e.target.result; /*mostra resultado do evento target/ img escolhida*/
  };

  reader.readAsDataURL(file);
}