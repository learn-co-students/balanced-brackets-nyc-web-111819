const isBalanced = str => {
  let hashMap = { ")": "(", "}": "{", "]": "[" }
  let resultArray = []
  let char
  for (let i = 0; i < str.length; i++) {
    char = str[i]
    resultArray.push(char)
    if (char === "]" || char === "}" || char === ")") {
      if(resultArray[resultArray.length-2] === hashMap[char]){
        resultArray.pop()
        resultArray.pop()
      }
    }
  }

  return resultArray.length ? false : true
  // return resultArray.length ? false : true
}