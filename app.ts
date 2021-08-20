import helmet from "helmet"
import express from "express"
import compression from "compression"
import createRouter from "express-file-routing"

import config from "@/config"

import { getUptime } from "@/utils/helpers"

const app = express()

// json req body parsing
app.use(express.json())

// secure http headers
app.use(helmet())
// gzip compression
app.use(compression())

// file-based routing for /routes
createRouter(app)

app.listen(config.PORT, () => console.log(`🚀 Startup ${getUptime()}`))

process.on("exit", () => console.log(`✨ Done in ${getUptime()}`))
