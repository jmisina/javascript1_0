(function () {
document.getElementById('ex1_button').addEventListener('click', function() {
const numbers = Array.from({ length: 10 }, (_, i) => i).join(', ');
document.getElementById('ex1_content').textContent = numbers;
});
                       
                       
  
})();
