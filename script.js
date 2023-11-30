function shortenURL() {
    var inputURL = document.getElementById('inputBox').value;
    var tinyURLAPI = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(inputURL);

    fetch(tinyURLAPI)
      .then(response => response.text())
      .then(data => {
        var shortenedURL = data.trim();
        document.getElementById('outputBox').value = shortenedURL;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function copyContent(element) {
    element.select();
    document.execCommand('copy');
    alert('Copied the text: ' + element.value);
  }