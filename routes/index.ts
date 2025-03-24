import { Hono } from "hono";

export const hono = new Hono();

hono.get("/health", (context) => {
  return context.json(
    {
      message: "All Ok",
    },
    200
  );
});

hono.get("/authentication/sign-up", async (context) => {
    const { username, password } = await context.req.json();
    try{
        const result = await SignUpWithUsernameAndPassword({ username, password });

        return context.json(
            {
                data : result,
            }, 201
        );
    }
    
    catch(e){
        return context.json(
            {
                message: "Error",
            },
            500
        );
    }
});