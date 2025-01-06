import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Welcome from "../src/components/Welcome.astro";
import reactRenderer from "@astrojs/react/server.js";

test("welcome page", async () => {
  const container = await AstroContainer.create();
  container.addServerRenderer({ renderer: reactRenderer });
  container.addClientRenderer({
    name: "@astrojs/react",
    entrypoint: "@astrojs/react/client.js",
  });
  const result = await container.renderToString(Welcome);

  expect(result).toContain("welcome");
  expect(result).toContain(
    "software developer and machine learning enthusiast",
  );
  expect(result).toContain("My Projects");
});
