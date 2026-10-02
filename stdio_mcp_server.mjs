#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "sailonchain",
  boardId: "sailonchain-official",
  domain: "sailonchain.com",
  npmName: "zc-sailonchain-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
