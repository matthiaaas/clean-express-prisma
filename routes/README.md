# Routes

Files inside this directory will get matched an url path automatically.

**Note:** See [`express-file-routing`](https://github.com/matthiaaas/express-file-routing) for more details on how to use file-based routing.

- `/routes/projects.ts` → /projects

```ts
import prisma from "~/lib/prisma"
import auth from "~/middlewares/auth"

export const get = async (req, res) => {
  const projects = await prisma.projects.findMany()

  return res.json(projects)
}

export const post = [
  auth(), // route & method specific middleware (e.g. authentication)
  async (req, res) => {
    const { name } = req.body
    const { id } = req.user

    const project = await prisma.project.create({
      data: {
        name,
        ownerId: id
      }
    })

    return res.json(project)
  }
]
```
