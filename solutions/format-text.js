function format(text, width) {

  var formatted = '';

  while (text.length > 0) {

    for (var a = width-1; a >= 0; a--) {
      if (text.length <= width) {
        formatted += text;
        text = '';
        break;
      } else if (text.charAt(a) == ' ') {
        formatted += text.slice(0, a) + "\n";
        text = text.substr(a+1);
        break;
      } else if (text.charAt(a+1) == ' ') {
        formatted += text.slice(0, a+1) + "\n";
        text = text.substr(a+2);
        break;
      }
    }

  }

  return formatted;
