function sum_to_n_a(n: number): number {
  if (!n) return 0;
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (sum, current) => sum + current,
    0
  );
}

function sum_to_n_b(n: number): number {
  if (!n) return 0;
  return (n * (n + 1)) / 2;
}

function sum_to_n_c(n: number): number {
  if (!n) return 0;
  return n === 1 ? 1 : n + sum_to_n_c(n - 1);
}

console.log(sum_to_n_a(8));
console.log(sum_to_n_b(8));
console.log(sum_to_n_c(8));
