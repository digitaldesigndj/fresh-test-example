import { createHandler } from "$fresh/server.ts";
import manifest from "@/fresh.gen.ts";
import { assert, assertEquals } from "$std/testing/asserts.ts";

const CONN_INFO = {
  localAddr: { hostname: "127.0.0.1", port: 8000, transport: "tcp" },
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("HTTP assert test.", async (t) => {
  const handler = await createHandler(manifest);

  await t.step("#1 GET /", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
    assertEquals(resp.status, 200);
  });

  // await t.step("#2 POST /", async () => {
  //   const formData = new FormData();
  //   formData.append("text", "Deno!");
  //   const req = new Request("http://127.0.0.1/", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const resp = await handler(req, CONN_INFO);
  //   assertEquals(resp.status, 303);
  // });

  // await t.step("#3 GET /foo", async () => {
  //   const resp = await handler(
  //     new Request("http://127.0.0.1/foo"),
  //     CONN_INFO,
  //   );
  //   const text = await resp.text();
  //   assert(text.includes("<div>Hello Foo!</div>"));
  // });
});