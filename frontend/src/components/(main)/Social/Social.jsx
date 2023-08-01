"use client"
import {Divider, Stack} from "@mui/material";
import Link from "next/link";
import Fiverr from "./Fiverr";
import {LinkedIn} from "@mui/icons-material";
import Upwork from "./Upwork";

const Social = () => {
    return (
        <Stack direction={"row"} gap={1.5} alignItems={"center"}>
            <Link href={"https://www.fiverr.com/varlamzhordania"} target={"_blank"}><Fiverr/></Link>
            <Link
                href={"https://www.upwork.com/services/product/development-it-a-modern-seo-friendly-ecommerce-shop-with-nextjs-1681698758268948480?ref=project_share&tier=0"}
                target={"_blank"}><Upwork/></Link>
        </Stack>
    )
}

export default Social