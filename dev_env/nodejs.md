# Installation of node.js

## Through Installer

<https://nodejs.org/en/download/>

## Through Homebrew

### Install Homebrew

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Update Homebrew

```sh
brew update
```

### Add to $PATH

```sh
export PATH="/usr/local/bin:$PATH"
```

### Nodejs and npm

```sh
brew install node
```

## Check version

Type in these commands in Terminal to check if the installation successed.

```sh
node -v
npm -v
```

## Reference

- [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#osx)
- [Install Node.js and npm using Homebrew on OS X and macOS](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)