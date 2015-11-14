# zalgolize(1)
H̬̺̣̫E̤̱̖̹̭͗̾̉ ̆ͭ̒͂C̄̚O̶͡M̸͟Ẹ̘̻̰S̩̥͔̫

## SYNOPSIS

`zalgolize [OPTION]...`

## DESCRIPTION
Reads text from stdin and zalgolizes it.

## OPTIONS

`-p`    Probability that a character will be zalgolized (default 0.15)

`-u`    The maximum amount of upper souls appended to a zalgolized character (default 5)

`-m`    The maximum amount of middle souls appended to a zalgolized character (default 3)

`-l`    The maximum amount of upper souls appended to a zalgolized character (default 5)

## EXAMPLES
Zalgolize small pieces of text

`zalgolize HE COMES`

Zalgolize an entire file with high clustering probability

`cat README | zalgolize -p 0.5`

Make a sweet MOTD

`cowsay -f sodomized-sheep $(lsb_release -ds) | zalgolize -p 0.1 | lolcat`

## INSTALLATION
Install globally through npm

`npm install -g zalgolize`

## CLUSTERING
This is a uniform-clustered zalgolizer. It picks up to a specified number of symbols from an upper, middle and lower array of characters/souls at uniform randomness (with probability `p`), or it picks no symbols at all (with probability `1-p`). This creates a clustered zalgolization that can be tweaked with the parameters.

## BUGS
Please report bugs at [https://github.com/clux/zalgolize/issues](https://github.com/clux/zalgolize/issues)
