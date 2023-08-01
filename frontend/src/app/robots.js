import {NEXT_BASE_API_URL} from "../config";


export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: [
                "/",
            ],
            disallow: [
            ],
        },
        sitemap: `${NEXT_BASE_API_URL}sitemap.xml`,
    }
}