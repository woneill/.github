module.exports = {
  onboarding: false,
  requireConfig: "optional",
  autodiscover: true,
  autodiscoverFilter: [process.env.REPOLIST || "woneill/*"],
  extends: [
    "config:best-practices",
    ":automergeBranch",
    ":maintainLockFilesWeekly",
    ":rebaseStalePrs",
    ":semanticCommits",
    ":semanticCommitScope(deps)",
    "docker:enableMajor",
    "group:linters",
    "customManagers:helmChartYamlAppVersions",
  ],
  "pre-commit": {
    enabled: true,
  },
  packageRules: [
    {
      matchDatasources: ["docker"],
      versioning: "loose",
    },
  ],
  hostRules: [
    {
      hostType: "docker",
      username: process.env.DOCKERHUB_USERNAME || "",
      password: process.env.DOCKERHUB_TOKEN || "",
    },
  ],
  reviewers: ["woneill"],
};
