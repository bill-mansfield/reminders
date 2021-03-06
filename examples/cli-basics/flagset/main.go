package main

import (
	"flag"
	"fmt"
	"log"
	"os"
)

func main() {

	if len(os.Args) < 2 {
		fmt.Println("No command/message provided")
		os.Exit(2)
	}

	cmd := os.Args[1]

	switch cmd {
	case "greet":
		greetCmd := flag.NewFlagSet("greet", flag.ExitOnError)
		msgFlag := greetCmd.String("msg", "CLI BASICS", "The message greet")
		err := greetCmd.Parse(os.Args[2:])

		if err != nil {
			log.Fatal(err.Error())
		}

		fmt.Printf("hello and welcome: %s", *msgFlag)
	case "help":
		fmt.Println("Help yourself!")

	default:
		fmt.Printf("unknown command: %s\n", cmd)
	}
}
