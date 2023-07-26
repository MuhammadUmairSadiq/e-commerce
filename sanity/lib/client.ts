import { createClient } from 'next-sanity'
import { SanityClient } from "sanity";

export let client: SanityClient = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2023-07-25",
  useCdn: false,
});

