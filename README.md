Tee
======

This program takes input from stdin and outputs it to both stdout and a user specified file.

#### Usage

Pipe the data to the program, passing the file name as a command line argument. Examples:

```
echo "Wow! Such stream. So data." | node tee.js doge.txt
```

```
ls /Users | node tee.js files.txt
```
