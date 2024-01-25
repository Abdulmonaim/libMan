# libMan (2021)

libMan is a library management system designed to manage and organize your book inventory. Developed using TypeScript and Prisma for database management.

## Features

### User Authentication and Authorization

- Secure user authentication mechanism.
- Only authorized personnel can access and modify library data.

### Book Management

- Seamless addition and removal of books by admins.
- Categorization of books based on genres for easy exploration.

### User Management

- User registration for patrons.
- Secure user verification mechanisms.

### Session Handling

- Session controller for managing user sessions.
- Middleware for session verification ensuring secure access to specific routes.

### Database Management

- Prisma integration for seamless database management.
- Organized migration scripts for database structure evolution.


## Project Structure

```markdown
- libMan/
  - .eslintrc.cjs
  - package-lock.json
  - package.json
  - prisma/
    - migrations
    - migration_lock.toml
    - schema.prisma
  - src/
    - app.ts
    - controllers/
      - book.controller.ts
      - session.controller.ts
      - user.controller.ts
    - middlewares/
      - verifySession.ts
    - routes/
      - book.route.ts
      - index.ts
      - routesPaths/
      - session.route.ts
      - user.route.ts
    - server.ts
  - tsconfig.json
