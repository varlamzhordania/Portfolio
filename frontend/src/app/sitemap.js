import {NEXT_BASE_API_URL} from "../config";

export default async function sitemap() {

    return [
        {
            url: `${NEXT_BASE_API_URL}`,
            lastModified: new Date(),
        },
        {
            url: `${NEXT_BASE_API_URL}#about`,
            lastModified: new Date(),
        },
        {
            url: `${NEXT_BASE_API_URL}#skills`,
            lastModified: new Date(),
        },
        {
            url: `${NEXT_BASE_API_URL}#projects`,
            lastModified: new Date(),
        },
        {
            url: `${NEXT_BASE_API_URL}#services`,
            lastModified: new Date(),
        },
        {
            url: `${NEXT_BASE_API_URL}#hire`,
            lastModified: new Date(),
        },
    ]
}