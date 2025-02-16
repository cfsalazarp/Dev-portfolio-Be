import { config } from "process";
import { act } from "react";

export default ({ env }) => ({
    upload: {
        config: {
            porvider: "strapi-provider-upload-supabase",
            providerOptions: {
                apiUrl: env('SUPABASE_API_URL'),
                apiKey: env('SUPABASE_API_KEY'),
                bucket: env('SUPABASE_BUCKET'),
                directory: env('SUPABASE_DIRECTORY'),
                options: {},
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
