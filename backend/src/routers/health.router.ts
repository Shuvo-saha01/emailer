import { Hono } from "hono";

const healthRoute = new Hono()

healthRoute.get("/health", (c) => {
  return c.json({
    success: true,
    message: "Server is running"
  })
})

export default healthRoute
