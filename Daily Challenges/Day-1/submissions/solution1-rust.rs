// rustc solution1-rust.rs && ./solution1-rust.rs
use std::io;

fn solve(r: usize, c: usize) -> i32 {
    // Create a 2d array dynamically
    let mut base = vec![0; r * c];
    let mut base_temp: Vec<_> = base.as_mut_slice().chunks_mut(c).collect();
    let matrix: &mut [&mut [_]] = base_temp.as_mut_slice();
    // Fill the matrix O(n^2)
    for i in 0..r {
	for j in 0..c {
	    println!("Input the value for row = {}, column = {}, Below: ", i, j);
            let mut input = String::new();
            io::stdin().read_line(&mut input).unwrap();
	    matrix[i][j] = input.trim().parse().unwrap();
    }
     }
    //logic o(n) approach
    let mut diag_one = 0;
    let mut diag_two = 0;
     for i in 0..r {
          diag_one += matrix[i][i];
          diag_two += matrix[i][c-i-1];
        }
     if diag_one > diag_two
	{diag_one - diag_two}
	else
	{diag_two - diag_one}
}

fn main() {
    println!("{}", solve(3, 3));
}
