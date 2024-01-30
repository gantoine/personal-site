# My personal website

This is the source code for my personal website.

## Deploy

```sh
rclone --progress sync . fastmail:me.gantoine.com/files/website --exclude ".git/**" --exclude ".DS_Store"
```
