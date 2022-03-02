# [clean-express-prisma](https://github.com/matthiaaas/clean-express-prisma)

`clean-express-prisma` is a production-ready Express boilerplate including a fresh setup of [Prisma](https://github.com/prisma/prisma), [Typescript](https://github.com/microsoft/TypeScript), [Prettier](https://github.com/prettier/prettier/), [Heroku](https://heroku.com) and file-based routing from [Express File Routing](https://github.com/matthiaaas/express-file-routing).

### Features

- File-based routing
- Preconfigured path aliases
- Security middlewares for production
- Cleanest possible project structure

## Getting Started

Clone the repository or [Use this template](https://github.com/matthiaaas/clean-express-prisma/generate).

```
git clone https://github.com/matthiaaas/clean-electron-react.git YOUR-PROJECT-NAME
cd YOUR-PROJECT-NAME
yarn
```

## Configuration

### Prisma Database Setup

Create a (PostgreSQL) database and add it's url to `.env`.

```js
DATABASE_URL=postgresql://...
```

**Note:** See [`Prisma Docs`](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres/) and [PostgreSQL Installation Guide (macOS)](https://www.robinwieruch.de/postgres-sql-macos-setup) on how to get started.

## Development

Start a dev server on [localhost:4000](http://localhost:4000).

```
yarn dev
```

## Production

The template contains pre-configured Procfile and is ready to be deployed on [Heroku](https://heroku.com) out-of-the-box. For deployment on other platforms further configuration might be necessary.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

(Not Recommended) Manually run build scripts for production

```
yarn build
yarn db:deploy
yarn start
```

## File-based routing

Files inside your project's [`/routes`](/routes) directory will get matched an url path automatically.

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

## Route Example

- `/routes/projects.ts`

```ts
import prisma from "~/lib/prisma"

export const get = async (req, res) => {
  const projects = await prisma.projects.findMany()

  return res.json(projects)
}

export const post = async (req, res) => {
  const { name } = req.body

  const project = await prisma.project.create({
    data: {
      name
    }
  })

  return res.json(project)
}
```
