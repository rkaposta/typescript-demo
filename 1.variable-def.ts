namespace Variables {

  function f(x) {
      let x = 100;
  }


  function f2(condition, x) {
      if (condition) {
          let x = 100;
          return x;
      }

      return x;
  }


  function sumMatrix(matrix: number[][]) {
      let sum = 0;
      for (let i = 0; i < matrix.length; i++) {
          var currentRow = matrix[i];
          for (let i = 0; i < currentRow.length; i++) {
              sum += currentRow[i];
          }
      }

      return sum;
  }


  for (var i = 0; i < 10 ; i++) {
      setTimeout(function() { console.log(i); }, 100 * i);
  }

}