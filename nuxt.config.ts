export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/styles/main.css",
    "bootstrap-icons/font/bootstrap-icons.min.css", // <- use `.min.css` to match the installed file
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+qzH5rZl5pa2x65Kgf80OJFdroafW",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
