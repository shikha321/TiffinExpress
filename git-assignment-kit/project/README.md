# Tiffin Express: Online Food Ordering System

> A browser-based food ordering app with separate **customer** and **admin** roles, built by a two-member team using Git and GitHub.

**Repository:** https://github.com/YOUR-USERNAME/tiffin-express

## Description
Tiffin Express lets customers browse a menu, fill a cart, apply a coupon and place orders, while the restaurant admin manages incoming orders and menu availability.

## Objectives
- Build a working food ordering system with at least five features.
- Practise branching, pull requests, code review and merge-conflict resolution.
- Document the project clearly with Markdown.

## Team Members and Contributions

| Member | Roll No. | GitHub | Branch | Contribution |
|---|---|---|---|---|
| Student 1 Name | 00 | [@student1](https://github.com/student1) | `feature-member1` | Repository setup, menu, login and registration, cart and coupon |
| Student 2 Name | 00 | [@student2](https://github.com/student2) | `feature-member2` | Order placement, order tracking, admin dashboard |

## Features
1. **Menu browsing** with search, category chips and a veg-only filter.
2. **Customer registration and login** with role-based access (customer or admin).
3. **Cart** with quantity controls, coupon `SAVE10`, GST and delivery fee.
4. **Checkout and order tracking** with validation and a four-stage status bar.
5. **Admin dashboard** to update order status, mark dishes sold out and view sales.

## Technologies
- HTML5, CSS3 and JavaScript (no framework)
- Browser `localStorage` for data
- Git and GitHub for version control

## Project Structure
```text
tiffin-express/
├── food-ordering.html   # page structure
├── css/style.css        # styles
├── js/
│   ├── config.js        # shared settings
│   ├── data.js          # menu data and order stages
│   ├── state.js         # app state, storage and bill totals
│   ├── menu.js          # menu view and add-to-cart
│   ├── auth.js          # login and registration
│   ├── cart.js          # cart and checkout view
│   ├── orders.js        # place order and order tracking
│   ├── admin.js         # admin dashboard
│   └── app.js           # rendering and event handling
├── screenshots/
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

## Installation and Execution
```bash
git clone https://github.com/YOUR-USERNAME/tiffin-express.git
cd tiffin-express
```
Open `food-ordering.html` in any browser, or run a local server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000/food-ordering.html`.

**Demo logins:** customers create their own account. Admin: `admin@tiffin.in` / `admin123` (demo only, not a real password).

## Screenshots
![Menu](screenshots/menu.png)
![Cart](screenshots/cart.png)
![Admin dashboard](screenshots/admin.png)

## Sample Output
Placing two items totalling ₹320 with `SAVE10` gives a ₹32 discount, ₹30 delivery fee and 5% GST on the discounted amount.

## License
For academic use.
