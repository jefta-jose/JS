What makes Javascript unique from other languaes ?

Javascript runs natively on the browser

    JavaScript is the only programming language that runs natively in web browsers, making it essential for client-side web development.
    While other languages (e.g., Python, Java) can be used for backend or non-browser environments, JavaScript is built into browsers 
    like Chrome, Firefox, and Edge.

Javascript Has a mix of interpreted and compile

    While traditionally JavaScript was considered an interpreted language, this is not entirely accurate for modern JavaScript execution. 

    Early implementations of JavaScript in web browsers executed code line by line, interpreting it without prior compilation.
    This made development fast but less efficient for performance.

    Most modern JavaScript engines, like Google Chrome's V8 or Mozilla's SpiderMonkey, use a technique called Just-In-Time (JIT) Compilation.
    In JIT compilation, JavaScript code is first parsed and transformed into bytecode or machine code at runtime, blending the benefits of
    both interpreted and compiled approaches.

    Why This Matters:
    - JIT compilation significantly improves performance while retaining JavaScript's flexibility.
    - Developers still enjoy the experience of writing and testing code interactively, as JIT compilation happens in the background 
        
    and is invisible to them.

    While JavaScript is often described as an interpreted language, modern execution engines use hybrid approaches, leaning heavily on 
    JIT compilation to deliver better runtime performance. This makes JavaScript a mix of interpreted and compiled behavior in practice.


            // Interpretation and Compilation: Understanding the Basics
            // Both interpretation and compilation are methods used to convert high-level source code into machine-readable instructions. 

            // 1. Interpretation is the process where source code is executed line-by-line or statement-by-statement without converting the
            //  entire code into machine code beforehand.

            // How It Works:
            // The program (called an interpreter) reads, translates, and executes the code one step at a time.
            // No intermediate file (like a machine code file) is created.

            // Characteristics:
            // Slower execution because the translation happens during runtime.
            // Easier debugging since errors are reported immediately when encountered.

            // Examples of Interpreted Languages:
            // JavaScript (historically interpreted, now hybrid with JIT)
            // Python
            // Ruby
            // PHP

            // Example Workflow:
            // console.log("Hello, World!");
            // The interpreter reads the console.log statement and directly outputs "Hello, World!" without pre-compiling.


            // 2. Compilation is the process where source code is converted into machine code (binary format) by a compiler 
            // before the program is executed.

            // How It Works:
            // The compiler translates the entire source code into a standalone machine-code file (e.g., .exe on Windows).
            // The compiled file is executed by the operating system, independent of the original source code.


            // Characteristics:
            // Faster execution because the code is pre-compiled.
            // Errors are caught before the program runs (during the compilation phase).

            // Examples of Compiled Languages:
            // C
            // C++
            // Rust
            // Go

            // Example Workflow:
            // #include <stdio.h>

            // int main() {
            //     printf("Hello, World!");
            //     return 0;
            // }

            // A compiler like GCC compiles this code into a binary executable.
            // When executed, the binary outputs "Hello, World!".

            // JavaScript: Uses JIT (Just-In-Time) compilation in engines like V8 for faster execution.
            // Java: Source code is compiled to bytecode (intermediate), then interpreted or JIT-compiled by the Java Virtual Machine (JVM).
            // This hybrid approach combines the flexibility of interpretation with the performance of compilation.


Dynamic Typing
    JavaScript is dynamically typed, meaning variable types are determined at runtime, and you 
    don't need to declare them explicitly. For example:

    let x = 5;       // x is a number
    x = "Hello";     // Now x is a string

Prototype-Based Inheritance
    Unlike class-based languages like Java or C++, JavaScript uses prototype-based inheritance, 
    allowing objects to inherit directly from other objects.

    Example

    const parentObject = {
        makeSound : function(){
            console.log(`this animal ${this.sound}`);
        }
    }

    const childObject = Object.create(parentObject)
    childObject.sound = "barks"

    childObject.makeSound()


First-Class Functions
    Functions in JavaScript are first-class citizens, meaning they can 
    be assigned to variables
        const foo = () =>{
            console.log("this is foo");
        }

        foo()

    be passed as arguments
        function passAsArgument(){
            console.log("simple stuff");
        }

        function passAboveFunction(passAsArgument){
            passAsArgument()
        }

        passAboveFunction()

    or returned from other Functions
        function passAsArgument(){
            console.log("simple stuff");
        }

        function returnAboveFunction(){
            return passAsArgument()
        }

        passAboveFunction()

        