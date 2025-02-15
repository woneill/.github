module.exports = {
  onboarding: false,
  requireConfig: "optional",
  autodiscover: true,
  autodiscoverFilter: [process.env.REPOLIST || "woneill/*"],
  extends: ["github>woneill/.github:renovate-config"],
  hostRules: [
    {
      hostType: "docker",
      username: process.env.DOCKERHUB_USERNAME || "",
      password: process.env.DOCKERHUB_TOKEN || "",
    },
    {
      matchHost: "lscr.io",
      hostType: "docker",
      username: "USERNAME",
      password: process.env.RENOVATE_TOKEN || "",
    },
  ],
};
