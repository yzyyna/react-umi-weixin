// @ts-nocheck
import React from "react";
import { ApplyPluginsType } from "/Users/mac/Projects/GitHub/react-umi-weixin/node_modules/umi/node_modules/@umijs/runtime";
import * as umiExports from "./umiExports";
import { plugin } from "./plugin";

export function getRoutes() {
  const routes = [
    {
      path: "/",
      exact: true,
      component: require("@/pages/index.tsx").default,
    },
    {
      path: "/share",
      exact: true,
      component: require("@/pages/share/index.tsx").default,
    },
    {
      path: "/to-be-partner",
      exact: true,
      component: require("@/pages/to-be-partner/index.tsx").default,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: "patchRoutes",
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
