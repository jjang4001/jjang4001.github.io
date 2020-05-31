# Deploying
1. commit changes
2. Run: `publish.sh`

If something wacky happens, run the below:
```
git push origin `git subtree split --prefix book develop`:master --force
```