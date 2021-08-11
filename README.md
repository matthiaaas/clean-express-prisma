# [clean-express-prisma](https://github.com/matthiaaas/clean-express-prisma)

`clean-express-prisma` is an Express API boilerplate including a fresh setup of [Prisma](https://github.com/prisma/prisma), [Typescript](https://github.com/microsoft/TypeScript), [Prettier](https://github.com/prettier/prettier/), [Heroku](https://heroku.com) and file-based routing from [Express File Routing](https://github.com/matthiaaas/express-file-routing).

## Configuration

### Prisma Database Setup

Create a (PostgreSQL) database and add it's url to `.env`.

```js
// .env
DATABASE_URL=postgresql://...
```

**Note:** See [`Prisma Docs`](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres/) and [PostgreSQL Installation](https://www.robinwieruch.de/postgres-sql-macos-setup) on how to get started.

## Development

Start a dev server on [localhost:4000](http://localhost:4000).

```
yarn dev
```

## Production

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

(Not Recommended) Manually run build for production

```
yarn build
yarn db:deploy
yarn start
```

## File-based routing

Files inside your project's `/routes` directory will get matched an url path automatically.

```php
├── app.ts
├── routes
    ├── index.ts // index routes
    ├── posts
        ├── index.ts
        └── :id.ts // dynamic params
    └── users.ts
└── package.json
```

- `/routes/index.ts` → /
- `/routes/posts/index.ts` → /posts
- `/routes/posts/:id.ts` → /posts/:id
- `/routes/users.ts` → /users

**Note:** See [`express-file-routing`](https://github.com/matthiaaas/express-file-routing) for more details on how to use file-based routing.
