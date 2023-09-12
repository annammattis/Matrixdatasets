/* eslint-disable no-undef */
// js program to multiply two square matrices.

const N = 3;

// function multiples A and B and stores result in res
function multiply(A, B, res) {
  let i, j, k;
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      res[i][j] = 0;
      for (k = 0; k < N; k++) res[i][j] += A[i][k] * B[k][j];
    }
  }
}

//driver code

//to store result
let res = new Array(N);
for (let k = 0; k < N; k++) res[k] = new Array(N);

let A = [
  ["a", "b", "c"],
  ["p", "q", "r"],
  ["u", "v", "w"],
];

let B = [
  ["α", "β", "γ"],
  ["λ", "μ", "ν"],
  ["ρ", "σ", "τ"],
];

multiply(A, B, res);

document.write("Result matrix is <br>");
for (i = 0; i < N; i++) {
  for (j = 0; j < N; j++) document.write(res[i][j] + " ");
  document.write("<br>");
}

export default multiply;
