(function () {
  document.getElementById("ex1_button").addEventListener("click", function () {
    const numbers = Array.from({ length: 10 }, (_, i) => i).join(", ");

    document.getElementById("ex1_content").textContent = numbers;
  });

  document.getElementById("ex2_text").addEventListener('input', function() {
        const input = this.value;
        const content = document.getElementById('ex2_content');
        const regexLetters = /[a-zA-Z]/;
        const regexSpecialChars = /[^0-9]/;

        if (input.length !== 9) {
            content.textContent = 'Długość numeru musi być równa 9';
        } else if (regexLetters.test(input)) {
            content.textContent = 'Numer nie może zawierać liter';
        } else if (regexSpecialChars.test(input)) {
            content.textContent = 'Numer nie może zawierać znaków specjalnych';
        } else {
            content.textContent = 'Numer telefonu jest poprawny';
        }
    });
})();
