import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Welcome from "../src/components/Welcome.astro";

test("welcome page", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Welcome);

  expect(result).toContain("What's New in Astro 5.0?");
});
