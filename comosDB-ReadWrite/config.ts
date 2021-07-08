// @ts-check

export const config = {
    endpoint: DB_ENDPOINT,
    key: DB_KEY,
    databaseId: "SampleDB",
    containerId: "Persons",
    partitionKey: { kind: "Hash", paths: ["/category"] }
  };
