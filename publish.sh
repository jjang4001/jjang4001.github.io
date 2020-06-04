cp CNAME ./book/CNAME
git add --all
git commit -m "copy CNAME"
git subtree push --prefix book origin master
