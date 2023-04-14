function testCount( ) {
  const
      test = document.querySelector(".test"),
      questionsCount = test.querySelectorAll("ul").length - 1,
      checked = test.querySelectorAll("input:checked"),
      checkedCount = checked.length,
      right = test.querySelectorAll("li.right input:checked"),
      rightCount = right.length
  ; 
  alert( `Питань в тесті: ${questionsCount}
Питань  без відповіді: ${questionsCount - checkedCount}, ${100 - (checkedCount / questionsCount * 100).toFixed(0)}%
Правильних питань: ${rightCount}, ${(rightCount / questionsCount * 100).toFixed(0)}%
`)
}