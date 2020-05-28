use std::io;

fn get_input() -> String {
    let mut buffer = String::new();
    io::stdin().read_line(&mut buffer).expect("Failed");
    buffer
}

fn is_palindrome(input: String) -> bool {
    input == input.chars().rev().collect::<String>()
}

fn main(){
    println!("Enter the input below: ");
    let input = get_input();
    println!("output: {}", is_palindrome(input.trim().to_string()));
}
