// rustc solution2-rust.rs && ./solution2-rust
use std::io;

fn get_input() -> String {
    let mut buffer = String::new();
    io::stdin().read_line(&mut buffer).expect("Failed");
    buffer
}

fn solve(range: usize) -> Vec<usize> {
    let mut result = Vec::new();
    let mut compute: std::vec::Vec<i64> = Vec::new();
    for i in 0..range {
        println!("Enter the {} element: ", i);
        compute.push(get_input().trim().parse::<i64>().unwrap());
    }
    println!("Enter the sum below: ");
    let sum: i64 = get_input().trim().parse::<i64>().unwrap();
    let mut j: usize = range - 1;
    let mut i: usize = 0;
    while i < j {
        let check: i64 = compute[i] + compute[j];
        if check < sum {
            i += 1;
        } else if check > sum {
            j -= 1;
        } else if check == sum {
            result.push(i);
            result.push(j);
            break;
        }
    }
    result
}

fn main() {
    println!("Enter the total no. of elements below: ");
    let output = solve(get_input().trim().parse::<usize>().unwrap());
    println!("\nThe indices are {:?}", output);
}
