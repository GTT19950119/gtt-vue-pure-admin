export default {
  path: "/fighting",
  redirect: "/fighting/index",
  meta: {
    icon: "vscode-icons:file-type-appscript",
    title: "励志"
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        icon: "vscode-icons:file-type-appscript",
        title: "加油加油"
      }
    },
    {
      path: "/fighting/effort",
      name: "Effort",
      component: () => import("@/views/fighting/effort.vue"),
      meta: {
        icon: "vscode-icons:file-type-clojure",
        title: "努力努力"
      }
    }
  ]
} as RouteConfigsTable;
