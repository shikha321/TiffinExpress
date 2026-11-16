# Git Task Guide (SEC101 Group Assignment)

Use **Git Bash** on Windows. Set `KIT` to this kit's folder, for example `KIT=~/Downloads/git-assignment-kit`.

**Folders:** `project/` is what Student 1 pushes first (it becomes the repo root). `commit-parts/` holds each student's feature code, split so you can make real commits. `full-working-project/` is the finished app for testing and screenshots.

Take a screenshot at every step marked 📸.

## Task 2: Setup
**Student 1**
```bash
git config --global user.name "Student 1 Name"
git config --global user.email "student1@email.com"
mkdir tiffin-express && cp -r $KIT/project/. tiffin-express/ && cd tiffin-express
git init -b main
git add .
git commit -m "Initial commit: base project, README, CONTRIBUTING and .gitignore"
```
On GitHub create a **public** repo named `tiffin-express` (no README). Then:
```bash
git remote add origin https://github.com/STUDENT1/tiffin-express.git
git push -u origin main
```
Repo **Settings > Collaborators > Add people**: invite Student 2. 📸

**Student 2**: accept the email invite, then
```bash
git config --global user.name "Student 2 Name"
git config --global user.email "student2@email.com"
git clone https://github.com/STUDENT1/tiffin-express.git && cd tiffin-express
```
The browser console may show 404s for scripts not added yet. That is expected until the branches are merged.

## Task 3: Branches (4 commits each)
**Student 1**
```bash
git checkout -b feature-member1
cp $KIT/commit-parts/student1/01-auth-part1.js js/auth.js
git add js/auth.js && git commit -m "feat(auth): add login and registration screen"
cat $KIT/commit-parts/student1/02-auth-part2.js >> js/auth.js
git add js/auth.js && git commit -m "feat(auth): add register, login and admin check logic"
cp $KIT/commit-parts/student1/03-cart.js js/cart.js
git add js/cart.js && git commit -m "feat(cart): add cart with coupon, bill and checkout form"
```
Edit your section in `CONTRIBUTING.md`, then:
```bash
git add CONTRIBUTING.md && git commit -m "docs: add Student 1 contributions"
git push -u origin feature-member1
```

**Student 2**
```bash
git checkout -b feature-member2
cp $KIT/commit-parts/student2/01-orders-part1.js js/orders.js
git add js/orders.js && git commit -m "feat(orders): add order placement with validation"
cat $KIT/commit-parts/student2/02-orders-part2.js >> js/orders.js
git add js/orders.js && git commit -m "feat(orders): add order history and tracking bar"
cp $KIT/commit-parts/student2/03-admin.js js/admin.js
git add js/admin.js && git commit -m "feat(admin): add dashboard with status, availability and sales"
```
Edit your section in `CONTRIBUTING.md`, then:
```bash
git add CONTRIBUTING.md && git commit -m "docs: add Student 2 contributions"
git push -u origin feature-member2
```

**Pull requests (GitHub website)**
1. Each student: **Compare & pull request**, base `main`, add a description. 📸
2. Each student reviews the partner's PR: **Files changed > Review changes**, leave a comment and **Approve**. 📸
3. Merge both PRs. Then everyone runs:
```bash
git checkout main && git pull
git log --oneline --graph --all
```
📸 (the graph output)

## Task 4: Merge conflict
The shared line is `STORE_TAGLINE` in `js/config.js`.

**Student 1**
```bash
git checkout main && git pull && git checkout -b conflict-member1
```
Change the tagline to `"Fresh home-style meals, delivered fast."`
```bash
git commit -am "feat: update tagline (Student 1)" && git push -u origin conflict-member1
```
**Student 2** (from the same `main`, before merging Student 1's change)
```bash
git checkout main && git pull && git checkout -b conflict-member2
```
Change the tagline to `"Order your favourite Delhi food in minutes."`
```bash
git commit -am "feat: update tagline (Student 2)" && git push -u origin conflict-member2
```
Merge `conflict-member1` into `main` through a PR first. Then Student 2 does:
```bash
git checkout conflict-member2
git merge main
```
Git reports a conflict in `js/config.js`. 📸 Open the file and you will see:
```text
<<<<<<< HEAD
const STORE_TAGLINE="Order your favourite Delhi food in minutes.";
=======
const STORE_TAGLINE="Fresh home-style meals, delivered fast.";
>>>>>>> main
```
Keep one final line (or combine them), delete the three marker lines. 📸 Then:
```bash
git add js/config.js
git commit -m "fix: resolve tagline merge conflict"
git push
```
Open and merge the PR for `conflict-member2`. Student 1 reviews it. 📸

## Task 5: Documentation
Fill in names, roll numbers, GitHub links and the repo URL in `README.md` and `CONTRIBUTING.md`. Run the app from `full-working-project/` (or your merged `main`), take screenshots, save them in `screenshots/` as `menu.png`, `cart.png`, `admin.png`, then:
```bash
git add . && git commit -m "docs: add screenshots and final README" && git push
```

## Before you submit
- Both accounts show commits, one PR each and one review each.
- The repo is **public** and has code, `README.md`, `CONTRIBUTING.md`, `.gitignore`.
- The admin password in the code is a demo credential. Say so in the README and add no real passwords or keys.
