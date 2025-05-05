const assetServerUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.origin.com";

export { assetServerUrl };
