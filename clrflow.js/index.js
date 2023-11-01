function clrflow(value, foreground, background){
    console.log(`\x1b[${foreground}${value}\x1b[${background}`)
}

clrflow("hi world", "36m", "0m")
