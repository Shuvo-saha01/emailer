import { Hono } from 'hono'
import healthRoute from './routers/health.router'

const app = new Hono()

app.route("/api", healthRoute)

export default app
